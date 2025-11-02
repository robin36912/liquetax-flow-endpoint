import express from "express";
const app = express();
app.use(express.json());

// Health check endpoint for Meta
app.get("/", (req, res) => {
  if (req.query.health_check === "true") {
    return res.json({ status: "ok" });
  }
  res.send("Liquetax WhatsApp Flow Endpoint Active!");
});

// Handle POST requests from Meta
app.post("/", (req, res) => {
  console.log("Received from Meta:", req.body);
  res.json({
    action: "SUCCESS",
    data: {
      message: "Flow data received successfully!",
    },
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
