import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * MongoDB atlas
 * cluster is group of database
 * Provider: aws googlecloud azure
 * Region: Nearby location
 * Create a deployment
 * Cluster setup will happen
 * create a database user: first user has atlas Admin permissions
 * create database username and password
 * choose a connection method: drivers -> nodejs
 * Database Access : Database Users -> contains users created
 * Network Access: IP Access List -> whitelisted IPs
 * Delete existing IPs and Add IP Access List Entry 0.0.0.0/0 (everyone can access)
 * So, now anyone with username and password can access the database
 * Save username and password safely
 * Avoid using special characters in password (problem happens sometimes)
 * MONGO_URL=mongodb+srv://<db_username>:<db_password>@cluster0.5tifw.mongodb.net
 * mongodb+srv:// --> This is custom protocol of mongodb
 */

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("Error connecting to mongodb", err);
    });
};

export default db;
