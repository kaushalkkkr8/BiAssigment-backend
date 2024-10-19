const { data } = require("./db.connect");
data();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Event = require("./meetUpSchema");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const createEvent = async (newEvent) => {
  try {
    const event = new Event(newEvent);
    const add = await event.save();
    console.log("Saved:", add);
    return add;
  } catch (error) {
    throw error;
  }
};

app.post("/event", async (req, res) => {
  try {
    const addData = await createEvent(req.body);
    res.status(201).json({ message: "data Added", event: addData });
  } catch (error) {
    res.status(500).json({ error: "Failed to add data" });
  }
});

const fetchAllData = async () => {
  try {
    const fetchAll = await Event.find();
    return fetchAll;
  } catch (error) {
    throw error;
  }
};

app.get("/allEvent", async (req, res) => {
  try {
    const fetchAll = await fetchAllData();
    if (fetchAll.length > 0) {
      res.json(fetchAll);
    } else {
      res.status(401).json({ error: "Movie Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("app is running on Port: ", PORT);
});
