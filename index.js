//const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

/**
 * Why dotenv is required?
 * The Twelve-Factor App methodology, suggests to strictly separate app's config(store in the environment variables) from code.
 * Because config varies substantially across deploys, code does not.
 */

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

console.log("mera port", process.env.PORT);

/** Routes start with /  */
app.get("/", (req, res) => {
  res.send("Cohort is live!");
});

app.get("/swati", (req, res) => {
  res.send("swati");
});

app.get("/notes", (req, res) => {
  res.send("Notes likh lo acche se!!!");
});

/** To allow only valid(known) frontend/clients to send request to backend */
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/** to enable backend to accept Json data */
app.use(express.json());

/** To enable url encoding */
app.use(express.urlencoded({ extended: true }));

db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
