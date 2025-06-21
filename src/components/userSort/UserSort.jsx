import { useState } from "react";
import "../../style/userSort/userSort.css";

const users = [
  { name: "Олег", age: 25 },
  { name: "Марія", age: 30 },
  { name: "Іван", age: 22 },
  { name: "Андрій", age: 27 },
  { name: "Оксана", age: 35 },
  { name: "Наталя", age: 29 },
  { name: "Сергій", age: 31 },
  { name: "Ірина", age: 24 },
  { name: "Віктор", age: 28 },
  { name: "Світлана", age: 26 },
];

function UserSort() {
  const [selectedSort, setSelectedSort] = useState("");
  const [userSort, setUserSort] = useState(users);

  const handleChangeSort = (e) => {
    const value = e.target.value;

    setSelectedSort(value);

    if (value === "sortName") {
      setUserSort(users.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (value === "sortAge") {
      setUserSort(users.sort((a, b) => a.age - b.age));
    }
  };

  return (
    <div id="usersSort">
      <div className="conteinerInput">
        <h3>Сортування</h3>
        <div>
          <span>
            По алфавіту
            <input
              type="radio"
              name="sort"
              value="sortName"
              checked={selectedSort === "sortName"}
              onChange={handleChangeSort}
            />
          </span>
          <span>
            По віку
            <input
              type="radio"
              name="sort"
              value="sortAge"
              checked={selectedSort === "sortAge"}
              onChange={handleChangeSort}
            />
          </span>
        </div>
      </div>

      <ul className="usersList">
        {userSort.map((user, i) => (
          <li key={i}>
            <span>
              <p>Ім'я:</p>
              <h3>{user.name}</h3>
            </span>
            <p>Вік: {user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSort;
