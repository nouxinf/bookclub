import React, { useState } from "react";
import "./styles/Export.css"
const Export = () => {
    const [importError, setImportError] = useState(null);

    const handleExport = () => {
        // Retrieve quiz data and notes content from localStorage
        const quizData = JSON.parse(localStorage.getItem("quizData")) || [];
        const notesContent = localStorage.getItem("notesContent") || "";

        // Combine data into a single object
        const exportData = {
            quiz: quizData,
            notes: notesContent,
        };

        // Convert the data to a JSON string and create a downloadable file
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "exportData.json");
        document.body.appendChild(downloadAnchorNode); // Required for Firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleImport = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Validate the structure of the imported data
                if (importedData.quiz && importedData.notes !== undefined) {
                    localStorage.setItem("quizData", JSON.stringify(importedData.quiz));
                    localStorage.setItem("notesContent", importedData.notes);
                    setImportError(null);
                    alert("Data imported successfully!");
                } else {
                    throw new Error("Invalid file structure");
                }
            } catch (error) {
                setImportError("Failed to import data. Please ensure the file is valid.");
            }
        };
        reader.readAsText(file);
    };

    return (
        <header>
            <label htmlFor="export-all">
                <i className="fa-solid fa-download"></i>
            </label>
            <button className="hidden" id="export-all" onClick={handleExport} style={{ cursor: "pointer", marginBottom: "10px" }}>
            </button>
            <label htmlFor="import-all">
                <i className="fa-solid fa-upload"></i>
            </label>
            <input className="hidden" id="import-all" type="file" accept=".json" onChange={handleImport} style={{ marginBottom: "10px" }} />
            {importError && <p style={{ color: "red" }}>{importError}</p>}
        </header>
    );
};

export default Export;