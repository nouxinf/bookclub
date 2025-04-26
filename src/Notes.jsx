import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const Notes = () => {
    const [content, setContent] = useState(() => {
        return localStorage.getItem("notesContent") || "";
    });
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        localStorage.setItem("notesContent", content);
    }, [content]);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="notesdiv" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Notes</h3>
                <button onClick={toggleMinimize} style={{ cursor: "pointer" }}>
                    {isMinimized ? "Expand" : "Minimize"}
                </button>
            </div>
            {!isMinimized && (
                <div style={{ marginTop: "10px" }}>
                    <MDEditor
                        value={content}
                        onChange={setContent}
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]],
                        }}
                        height={400}
                    />
                </div>
            )}
        </div>
    );
};

export default Notes;