import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

let items = [
  { title: "хлеб" },
  { title: "молоко" },
  { title: "макароны" },
  { title: "конфеты" },
  { title: "кофе" },
  { title: "капуста" },
  { title: "шоколад" },
  { title: "сигареты" },
  { title: "сыр" },
  { title: "колбаса" },
  { title: "соль" },
  { title: "сахар" }
];

export default function List() {
  const [list, setList] = useState(items);

  const onChange = event => {
    const result = items.filter(item => {
      return item.title.startsWith(event.target.value);
    });

    setList(result);
  };

  const [sorti, setSorti] = useState(false);





  function sortList() {



    if (sorti) {
      let newSortedList = [...items].sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      setSorti(false);
    } else {
     let newSortedList = [...items].reverse(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      setSorti(true);
    }
    
  }
  console.log(sortList)





  return (
    <div>
      <h1>Список продуктов:</h1>

      <input onChange={onChange} />

      <FormControlLabel
        control={
          <Switch
            checked={sorti.checked}
            onClick={sortList}
             
            name="checkedB"
            color="primary"
          />
        }
        label="сортировка по алфавиту"
      />

      <ul className = 'list'>
        {list.map(product => {
          return <li className = 'lis' key={product.title}>{product.title} </li>;
        })}
      </ul>
    </div>
  );
}
