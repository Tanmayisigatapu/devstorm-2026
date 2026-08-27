const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();


// ================================
// Middleware
// ================================

app.use(cors());

app.use(express.json());


// ================================
// Serve DEVSTORM Website
// ================================

// Serve index.html, style.css, app.js, etc.
app.use(express.static(path.join(__dirname, "..")));


// ================================
// Website Home Page
// ================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "..", "index.html")
    );

});


// ================================
// Health Check API
// ================================

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        status: "online",
        server: "DEVSTORM API"
    });

});


// ================================
// Event Information API
// ================================

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

            dinner: "8:00 PM - 9:30 PM",

            morning: "5:00 AM - 9:00 AM",

            afternoon: "12:30 PM - 2:00 PM"

        }

    });

});


// ================================
// Start Server
// ================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `DEVSTORM API running on port ${PORT}`
    );

});