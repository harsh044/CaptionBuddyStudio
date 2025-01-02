import React, { useState } from "react";
import Input from "./Input"; // Input component for user input
import Card from "./Card"; // Card component to display captions
import "./main.css";


const Main = () => {
  const [captions, setCaptions] = useState([]);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State for loader

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true); // Start loader
    try {
      const captions = await uploadImage(file);
      setCaptions(captions);
      setError("");
    } catch (err) {
      console.error("Upload error:", err.message);
      setError(err.message || "Error uploading image or generating captions.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const uploadImage = async (file) => {
    try {      
      const formData = new FormData();
      formData.append("img_url", file);
      console.log("FormData content:", formData.get("img_url"));

      const response = await fetch(
        `https://captionbuddy-849413316122.us-central1.run.app/caption_generator_api/caption_generator`,
        {
          method: "POST",
          headers: { accept: "application/json" },
          body: formData,
        }
      );
      console.log("res >>", response)

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to generate captions: ${errorData}`);
      }

      const data = await response.json();
      console.log("Received captions:", data.data);
      return data.data || [];
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error(`Error uploading image: ${error.message}`);
    }
  };

  return (
    <main className="main_container">
      <Input
        file={file}
        setFile={setFile}
        uploadImage={handleUpload}
        error={error}
      />
      <div className="captions_section">
        {loading ? (
          <div className="loader"></div> // Display loader while loading
        ) : captions.length > 0 ? (
          <Card captions={captions} />
        ) : (
          <p>No captions available.</p>
        )}
      </div>
    </main>
  );
};

export default Main;
