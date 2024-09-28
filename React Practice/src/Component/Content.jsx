import useFetchHook from "../hooks/useFetchHook";
import { DogImage } from "./DogImage";
import { SelectionForm } from "./SelectionForm";
export const Content = () => {
  const {
    count,
    setCount,
    dogImages,
    breeds,
    setSelectedBreed,
    selectedBreed,
  } = useFetchHook();

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
        }
      >
        -
      </button>
      <SelectionForm
        breeds={breeds}
        setSelectedBreed={setSelectedBreed}
        selectedBreed={selectedBreed}
      />
      <DogImage dogImages={dogImages} />
    </div>
  );
};
