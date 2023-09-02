import express from "express";
import cors from "cors";
import inspections from "./api/inspections.route.js";
import restaurants from "./api/restaurants.route.js";

console.log("server.js started")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/inspections", inspections);
app.use("/api/v1/restaurants", restaurants);

app.use("*", (req, res) => 
res.status(404).json({ 
    error: "not found" 
    })
);

export default app;
