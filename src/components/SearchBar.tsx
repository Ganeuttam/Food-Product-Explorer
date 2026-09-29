interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="field field-search">
      <label htmlFor="search">Search by title</label>

      <input
        id="search"
        type="search"
        placeholder="e.g. phone"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />
    </div>
  );
}