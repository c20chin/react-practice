import { useEffect, useState } from "react";

const useFetchJson = () => {
  const [jsonData, setJsonData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchJsonApi = async () => {
      const response = await fetch(url);
      try {
        if (response.ok) {
          const data = await response.json();
          setJsonData(data);

          //console.log(jsonData);
        } else {
          console.log("Failed to fetch data.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchJsonApi();
  }, []);
  console.log(jsonData);
  return {jsonData};
};

export default useFetchJson;