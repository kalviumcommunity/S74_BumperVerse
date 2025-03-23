require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Home route with DB connection status
app.get('/', async (req, res) => {
    const dbStatus = mongoose.connection.readyState; // 1 = Connected, 0 = Disconnected
    res.json({ databaseStatus: dbStatus === 1 ? 'Connected' : 'Disconnected' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
