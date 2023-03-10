import "./categories.component.scss";
import { useState } from "react";

const Categories = (props) => {
  const [category] = useState([
    {
      key: "1",
      name: "Всі",
    },
    {
      key: "2",
      name: "Батончики",
    },
    {
      key: "3",
      name: "Печиво",
    },
    {
      key: "4",
      name: "Спеції",
    },
    {
      key: "5",
      name: "Випічка",
    },
    {
      key: "6",
      name: "Гранола",
    },
    {
      key: "7",
      name: "Маси і начинки",
    },
  ]);

  return (
    <div className="categories">
      <div className="filter">
        <label htmlFor="category">Категорії товарів: </label>
        <select
          name="category"
          id="category"
          defaultValue="Всі"
          onChange={(e) => props.chooseCategory(e.target.value)}
        >
          {category.map((item) => (
            <option key={item.key} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="availability-filter">
        <label htmlFor="availability-chkbox">Наявність товару: </label>
        <input
        name="availability-chkbox"
        id="availability-chkbox"
          type="checkbox"
          onChange={() => props.checkAvailability(!props.avaialble)}
          // value="true"
        />
      </div>
    </div>
  );
};

export default Categories;
