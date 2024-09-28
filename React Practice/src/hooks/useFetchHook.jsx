import { useEffect, useState } from "react";

const useFetchHook = () => {
  const [count, setCount] = useState(3);
  const [dogImages, setDogImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [previousBreed, setPreviousBreed] = useState("");
  const [previosCount, setPreviousCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!response.ok) {
          throw new Error("Failed to fetch breed data.");
        }
        const { message } = await response.json();
        setBreeds(Object.keys(message));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchDogImages = async () => {
      const url = !selectedBreed
        ? `https://dog.ceo/api/breeds/image/random/${count}`
        : `https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch breed data.");
        }
        const { message } = await response.json();
        console.log(count, previosCount);
        if (selectedBreed && selectedBreed === previousBreed) {
          if (count > previousCount) {
            const newImages = message.slice(previousCount);
            setDogImages((prevImages) => [...prevImages, ...newImages]);
          } else {
            setDogImages((prevImages) => prevImages.slice(0, count));
          }
        } else {
          setDogImages([...message]);
        }
        setPreviousBreed(selectedBreed);
        setPreviousCount(count);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImages();
  }, [selectedBreed, count]);
  return {
    count,
    setCount,
    selectedBreed,
    setSelectedBreed,
    breeds,
    setBreeds,
    dogImages,
  };
};

export default useFetchHook;
