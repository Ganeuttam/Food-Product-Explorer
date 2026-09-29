interface RatingFilterProps {
  value: number;
  onChange: (value: number) => void;
}

const OPTIONS = [
  { value: 0, label: "Any rating" },
  { value: 3, label: "3.0 & up" },
  { value: 4, label: "4.0 & up" },
  { value: 4.5, label: "4.5 & up" },
];

export function RatingFilter({
  value,
  onChange,
}: RatingFilterProps) {
  return (
    <div className="field">
      <label htmlFor="rating">Minimum rating</label>

      <select
        id="rating"
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
      >
        {OPTIONS.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}