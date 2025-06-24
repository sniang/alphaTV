import express from 'express';      // Express.js web framework
import cors from 'cors';            // Middleware for enabling CORS
import dotenv from 'dotenv';        // Loads environment variables from .env file

// ====================
// Environment & Config
// ====================

// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();

// Set server port from environment or default to 3001
const PORT = process.env.PORT || 3001;
export const MAINDIR = process.env.MAINDIR || '/Volumes/dfs/Experiments/ALPHA'; // Base directory for all data files


// ====================
// Middleware
// ====================

// Enable CORS for all routes
app.use(cors());

// =====================
// Utilities
// =====================

// =====================
// Routes
// =====================

// ====================
// Server Startup
// ====================

// Start the server and listen on the specified port
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server started');
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Main directory is set to: ${MAINDIR}`);
});

