import React, { useState, useEffect } from "react";
import { shortenURL, getURLs } from "./services/api";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [urls, setUrls] = useState([]);

  // Fetch all URLs on load
  useEffect(() => {
    async function fetchData() {
      const data = await getURLs();
      setUrls(data);
    }
    fetchData();
  }, []);

  // Handle URL submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) {
      alert("Please enter a valid URL!");
      return;
    }

    const result = await shortenURL(originalUrl);
    if (result) {
      setUrls([...urls, result]);
      setOriginalUrl("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">🔗 URL Shortener</h1>

      {/* URL Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg mb-6 space-x-2"
      >
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your URL"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Shorten
        </button>
      </form>

      {/* Shortened URLs List */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📚 Shortened URLs</h2>
        {urls.length === 0 ? (
          <p className="text-gray-500">No URLs found. Start shortening!</p>
        ) : (
          <ul className="space-y-3">
            {urls.map((url) => (
              <li
                key={url._id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <a
                  href={url.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {url.shortUrl}
                </a>
                <span className="text-sm text-gray-600">
                  {new Date(url.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
