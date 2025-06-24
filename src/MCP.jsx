import { useState, useEffect } from "react";
import "./styles/MCP.css"; 

/**
 * MCP component fetches and displays an image for a given MCP name.
 *
 * Fetches the image from a backend API endpoint using the provided `mcpName` prop,
 * handles loading and error states, and displays the image if available.
 * Cleans up the created object URL when the component unmounts or the image changes.
 *
 * @component
 * @param {Object} props
 * @param {string} props.mcpName - The name of the MCP to fetch and display the image for.
 * @returns {JSX.Element} The rendered MCP image component.
 * @author Samuel Niang
 */
const MCP = ({mcpName}) => {
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to store the image URL (created from blob)
    const [data, setData] = useState(null);
    // State to store any error message
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetches the image from the backend API
        const fetchImage = async () => {
            try {
                setLoading(true); // Start loading
                setError(null);   // Reset error state
                // Make API request to fetch the image for the given MCP name
                const response = await fetch(`http://localhost:3001/api/MCP/${mcpName}`);
                // If response is not OK, parse error message and throw
                if (!response.ok) {
                    const errorJson = await response.json();
                    throw new Error(errorJson.message || `HTTP error! status: ${response.status}`);
                }
                // Convert response to a Blob (binary data)
                const blob = await response.blob();
                // Create a temporary object URL for the image blob
                const imageUrl = URL.createObjectURL(blob);
                setData(imageUrl); // Store the image URL in state
            } catch (err) {
                setError(err.message); // Store error message in state
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchImage();

        // Cleanup function: revoke object URL when component unmounts or data changes
        return () => {
            if (data) {
                URL.revokeObjectURL(data); // Prevent memory leaks
            }
        };
        // Only re-run effect when mcpName changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mcpName]);

    return (
        <div className="mcp-container">
            {/* Display the MCP name, replacing underscores with spaces */}
            <h3>MCP picture from {mcpName.replace('_',' ')}</h3>
            {/* Show loading message while fetching */}
            {loading && <p>Loading MCP data...</p>}
            {/* Show error message if fetch failed */}
            {error && <p className="error">Error loading MCP data: {error}</p>}
            {/* Show the image if data is available */}
            {data && <img src={data} alt={`MCP ${mcpName}`} />}
            {/* Show fallback message if no data, no error, and not loading */}
            {!loading && !data && !error && <p>No MCP data available.</p>}
        </div>
    );
}

export default MCP;