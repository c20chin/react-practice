export const SelectionForm = ({ breeds, setSelectedBreed, selectedBreed }) => {
  return (
    <>
      <ul>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </ul>
    </>
  );
};
