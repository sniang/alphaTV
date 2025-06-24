import express from 'express';      // Express.js web framework
import cors from 'cors';            // Middleware for enabling CORS
import dotenv from 'dotenv';        // Loads environment variables from .env file
import fs from 'fs';
import path from 'path';

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
/**
 * Returns the current year and month as a string in the format "YYYY-MM".
 * @returns {string} - Year and month, e.g., "2024-06"
 */
export function getCurrentYearMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}/${month}`;
}

/**
 * Recursively get all .png image file names in a directory and its subdirectories.
 * @param {string} dir - Directory to search.
 * @returns {string[]} - Array of .png file paths relative to MAINDIR.
 */
export function getAllPngImages(stick = "PB2", dir = null) {
    if (!dir) {
        dir = path.join(MAINDIR, `MCP_images_${stick}`, getCurrentYearMonth());
    }
    let results = [];
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of list) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(getAllPngImages(stick, fullPath));
        } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
            results.push(path.relative(MAINDIR, fullPath));
        }
    }
    return results;
}

/**
 * Returns the most recent .png image path found by getAllPngImages.
 * @param {string} stick - The stick identifier.
 * @returns {string|null} - The relative path to the most recent image, or null if none found.
 */
export function getMostRecentImage(stick = "PB2") {
    const images = getAllPngImages(stick);
    if (images.length === 0) return null;
    // Sort by path (which includes date/time in the filename and folders)
    images.sort((a, b) => a.localeCompare(b));
    return images[images.length - 1];
}

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

getMostRecentImage()