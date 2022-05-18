export function getId(productName) {
    return productName.toLowerCase().split(" ").join("_");
  }
  
  export function FilterItem({ setFilter, title, value, filters }) {
    function onChange(e) {
      setFilter((items) => {
        if (e.target.checked) {
          return items.concat(getId(title));
        } else {
          return items.filter((id) => id !== getId(title));
        }
      });
    }
    return (
      <div className="form-checkbox-category">
        <label>
          <input
            type="checkbox"
            name="category"
            onChange={onChange}
            checked={filters.includes(getId(title))}
          />
          {title}
        </label>
        <span className="amount">{value}</span>
      </div>
    );
  }