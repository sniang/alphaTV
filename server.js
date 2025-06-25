/**
 * ALPHA TV API Server
 * Author: Samuel Niang
 *
 * This Express.js API serves data and images related to the ALPHA experiment at CERN.
 * It is designed to provide backend support for the ALPHA TV React app, which displays
 * the live status of different apparatus components.
 */

import express from 'express';      // Express.js web framework
import cors from 'cors';            // Middleware for enabling CORS
import dotenv from 'dotenv';        // Loads environment variables from .env file
import fs from 'fs';                // Node.js file system module
import path from 'path';            // Node.js path utilities

// ====================
// Environment & Config
// ====================

// Load environment variables from .env file (if present)
dotenv.config();

// Initialize Express application
const app = express();

// Set server port from environment or default to 3001
const PORT = process.env.PORT || 3001;

// Base directory for all data files (can be overridden by environment variable)
export const MAINDIR = process.env.MAINDIR || '/Volumes/dfs/Experiments/ALPHA';


// ====================
// Middleware
// ====================

// Enable CORS for all routes (allows requests from any origin)
app.use(cors());


// =====================
// Utilities
// =====================

/**
 * Recursively get all .png image file names in a directory and its subdirectories.
 * Used to find all MCP images for a given stick and month.
 * @param {string} stick - Stick identifier (e.g., "PB2")
 * @param {string|null} dir - Directory to search (defaults to current month for stick)
 * @returns {string[]} - Array of .png file paths relative to MAINDIR.
 */
export function getAllPngImages(stick = "PB2", dir = null) {
    function getYearMonthDay(offset = 0) {
        const now = new Date();
        now.setDate(now.getDate() + offset);
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    // Try up to 31 days back if no images found
    let baseDir = dir;
    let found = false;
    let searchDir = '';
    for (let offset = 0; offset > -31; offset--) {
        if (!baseDir) {
            searchDir = path.join(MAINDIR, `MCP_Images_${stick}`, getYearMonthDay(offset));
            console.log(`Searching in: ${searchDir}`);
        } else {
            searchDir = baseDir;
        }
        if (fs.existsSync(searchDir)) {
            found = true;
            break;
        }
        if (baseDir) break; // Only loop if dir is not provided
    }
    if (!found) return [];

    let results = [];
    const list = fs.readdirSync(searchDir, { withFileTypes: true });
    for (const entry of list) {
        const fullPath = path.join(searchDir, entry.name);
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
 * Used to provide the latest MCP image for a given stick.
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

/**
 * GET /api/MCP/:stick
 * Returns the most recent MCP image for the specified stick.
 * Valid stick values: AT, AT_US, BDS, CT, CT_US, LDS, PB2, PDS, UDS
 * Responds with the image file or an error message.
 */
app.get('/api/MCP/:stick', (req, res) => {
    const sticks = ["AT","AT_US", "BDS", "CT", "CT_US", "LDS", "PB2", "PDS", "UDS"];
    const stick = req.params.stick
    if (!sticks.includes(stick)) {
        return res.status(400).json({ error: `Invalid stick: ${stick}. Valid options are: ${sticks.join(', ')}` });
    }
    const imagePath = getMostRecentImage(stick);
    if (!imagePath) {
        return res.status(404).json({ error: 'No images found' });
    }
    const fullImagePath = path.join(MAINDIR, imagePath);
    if (!fs.existsSync(fullImagePath)) {
        return res.status(404).json({ error: 'Image file not found' });
    }
    res.sendFile(fullImagePath);
});


// ====================
// Server Startup
// ====================

/**
 * Starts the Express server and logs configuration details.
 */
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server started');
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Main directory is set to: ${MAINDIR}`);
});

// For debugging: call getMostRecentImage() at startup
getMostRecentImage()