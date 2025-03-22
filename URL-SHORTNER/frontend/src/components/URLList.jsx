import React from "react";

const URLList = ({ shortUrls }) => {
  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">🔗 Shortened URLs</h2>
      {shortUrls.length === 0 ? (
        <p className="text-gray-500">No URLs found. Start shortening!</p>
      ) : (
        <ul className="space-y-3">
          {shortUrls.map((url) => (
            <li
              key={url._id}
              className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center"
            >
              <a
                href={url.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {url.shortUrl}
              </a>
              <span className="text-sm text-gray-600">
                Created on {new Date(url.date).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default URLList;
