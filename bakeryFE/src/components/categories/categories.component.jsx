import './categories.component.scss';
import { useState } from 'react';

const Categories = (props) => {
  const [category] = useState([
    {
    key: "1",
    name: "Всі"
  },
  {
    key: "2",
    name: "Батончики"
  },
  {
    key: "3",
    name: "Печиво"
  },
  {
    key: "4",
    name: "Спеції"
  },
  {
  key: "5",
  name: "Випічка"
  }, 
  {
  key: "6",
  name: "Маси і начинки"
  }
]);

  return (
    <div className="categories">
      <label htmlFor="category">Категорії товарів: </label>
      <select name="category"
      id="category"
      defaultValue="Всі"
      onChange={(e) => props.chooseCategory(e.target.value)}
      >
        {category.map((item) => (
          <option key={item.key} value={item.name}>{item.name}</option>
        ))
        }
      </select>

    </div>
  )
}

export default Categories;