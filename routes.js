const express = require("express");
const router = express.Router();
const Sticker = require("./models/Sticker"); // Import Sticker Model

// 📌 Create a new sticker
router.post("/stickers", async (req, res) => {
    try {
        const { imageUrl, category, description } = req.body;
        const newSticker = new Sticker({ imageUrl, category, description });
        await newSticker.save();
        res.status(201).json(newSticker);
    } catch (error) {
        res.status(500).json({ error: "Error adding sticker" });
    }
});

// 📌 Read all stickers
router.get("/stickers", async (req, res) => {
    try {
        const stickers = await Sticker.find();
        res.status(200).json(stickers);
    } catch (error) {
        res.status(500).json({ error: "Error fetching stickers" });
    }
});

// 📌 Read a single sticker by ID
router.get("/stickers/:id", async (req, res) => {
    try {
        const sticker = await Sticker.findById(req.params.id);
        if (!sticker) return res.status(404).json({ error: "Sticker not found" });
        res.status(200).json(sticker);
    } catch (error) {
        res.status(500).json({ error: "Error fetching sticker" });
    }
});

// 📌 Update a sticker by ID
router.put("/stickers/:id", async (req, res) => {
    try {
        const updatedSticker = await Sticker.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSticker) return res.status(404).json({ error: "Sticker not found" });
        res.status(200).json(updatedSticker);
    } catch (error) {
        res.status(500).json({ error: "Error updating sticker" });
    }
});

// 📌 Delete a sticker by ID
router.delete("/stickers/:id", async (req, res) => {
    try {
        const deletedSticker = await Sticker.findByIdAndDelete(req.params.id);
        if (!deletedSticker) return res.status(404).json({ error: "Sticker not found" });
        res.status(200).json({ message: "Sticker deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting sticker" });
    }
});

module.exports = router;
