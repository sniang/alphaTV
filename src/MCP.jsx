import { useState, useEffect } from "react";
import "./styles/MCP.css"; 

const MCP = ({mcpName}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:3001/api/MCP/${mcpName}`);
                if (!response.ok) {
                    const errorJson = await response.json();
                    throw new Error(errorJson.message || `HTTP error! status: ${response.status}`);
                }
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setData(imageUrl);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();

        // Cleanup: revoke object URL when component unmounts or data changes
        return () => {
            if (data) {
                URL.revokeObjectURL(data);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mcpName]);

    return (
        <div className="mcp-container">
            <h3>MCP picture from {mcpName.replace('_',' ')}</h3>
            {loading && <p>Loading MCP data...</p>}
            {error && <p className="error">Error loading MCP data: {error}</p>}
            {data && <img src={data} alt={`MCP ${mcpName}`} />}
            {!loading && !data && !error && <p>No MCP data available.</p>}
        </div>
    );
}

export default MCP;