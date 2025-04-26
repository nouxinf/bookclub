import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const Notes = () => {
    const [content, setContent] = useState("");
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "400px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Notes</h3>
                <button onClick={toggleMinimize} style={{ cursor: "pointer" }}>
                    {isMinimized ? "Expand" : "Minimize"}
                </button>
            </div>
            {!isMinimized && (
                <div style={{ marginTop: "10px" }}>
                    <MDEditor value={content} onChange={setContent} previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                    }}/>
                </div>
            )}
        </div>
    );
};

export default Notes;