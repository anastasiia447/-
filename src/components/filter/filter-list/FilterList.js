import { FilterItem } from "../filter-item/FilterItem";

export function FilterList({ setFilter, list, title, filters }) {
  return (
    <div className="category">
      <h3 className="filter-title">{title}</h3>
      {list.map((item) => (
        <FilterItem
          title={item.title}
          value={item.value}
          setFilter={setFilter}
          key={item.title}
          filters={filters}
        />
      ))}
    </div>
  );
}