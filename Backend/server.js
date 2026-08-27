const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Test route
app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "DEVSTORM API is running 🚀"
    });

});


// Health check
app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        status: "online",
        server: "DEVSTORM API"
    });

});


// Event information
app.get("/api/event", (req, res) => {

    res.json({

        name: "DEVSTORM 2026",

        duration: "36 Hours",

        meetup: {
            venue: "SDMA",
            time: "3:00 PM"
        },

        hackathon: {
            venue: "14th Block, LPU",
            start: "6:00 PM"
        },

        breaks: {

            dinner:
                "8:00 PM - 9:30 PM",

            morning:
                "5:00 AM - 9:00 AM",

            afternoon:
                "12:30 PM - 2:00 PM"

        }

    });

});


// Start server

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `DEVSTORM API running on port ${PORT}`
    );

});