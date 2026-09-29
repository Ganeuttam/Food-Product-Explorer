import { formatCategory } from "../utils/format";

interface CategoryFilterProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

export function CategoryFilter({
  categories,
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="field">
      <label htmlFor="category">Category</label>

      <select
        id="category"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        <option value="all">All categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {formatCategory(category)}
          </option>
        ))}
      </select>
    </div>
  );
}