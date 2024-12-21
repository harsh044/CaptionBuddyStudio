import React from "react";
import "./Input.css";

const Input = ({ file, setFile, uploadImage, error,loading }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update the file state when a file is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    uploadImage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="upload_section">
        {/* Custom File Input */}
        <label htmlFor="fileInput" className="custom_file_label">
          Choose File
        </label>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden_file_input"
        />
        {file && <span className="file_name">{file.name}</span>}

        {/* Upload button */}
        <button type="button" onClick={uploadImage} disabled={loading}>
          Generate Captions
        </button>
      </div>

      {/* Error message */}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Input;
