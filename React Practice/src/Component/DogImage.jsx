import useFetchHook from "../hooks/useFetchHook";

export const DogImage = ({ dogImages }) => {
  return (
    <div className="card">
      <ul>
        {dogImages.map((dogImage) => (
          <li>
            <img
            style={{ margin: "3px", height: "100pt", borderRadius: "5px" }}
            key={dogImage}
            src={dogImage}
          ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

