import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 64;
  const uniqueIdsRef = useRef(new Set());

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const newImages = response.data.filter(
        (image) => !uniqueIdsRef.current.has(image.id)
      );
      newImages.forEach((image) => uniqueIdsRef.current.add(image.id));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="image-gallery p-2 pt-0 md:p-4">
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative h-fit overflow-hidden rounded-lg"
          >
            <img
              className="object-contain w-full h-full transform transition-transform duration-300 hover:scale-110"
              src={image.download_url}
              alt={image.author}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2">
              <p className="text-white text-sm font-medium">{image.author}</p>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-8">Loading...</p>}
      {!loading && images.length % limit === 0 && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
