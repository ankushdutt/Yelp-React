require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// GET All restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("select * from restaurants;");
  res.status(200).json({
    status: "success",
    data: {
      restaurant: results.rows,
    },
  });
});

// GET one restaurant and its all reviews
app.get("/api/v1/restaurants/:id", async (req, res) => {
  const restaurant = await db.query(
    "select * from restaurants where id = $1;",
    [req.params.id]
  );

  const reviews = await db.query(
    "select * from reviews where restaurant_id = $1;",
    [req.params.id]
  );
  console.log(reviews);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: restaurant.rows[0],
      reviews: reviews.rows,
    },
  });
});

// CREATE restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// CREATE Reviews
app.post("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) returning *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(201).json({
      status: "success",
      data: {
        reviews: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// UPDATE restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// DELETE restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM reviews where restaurant_id = $1", [
      req.params.id,
    ]);
    await db.query("DELETE FROM restaurants where id = $1", [req.params.id]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
