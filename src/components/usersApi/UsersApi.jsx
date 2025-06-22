import { useEffect, useState } from "react";
import "../../style/usersApi/usersApi.css";

function UsersApi() {
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        alert("Щось пішло не так, перезапустіть сторінку");
        return;
      }
      const result = await response.json();
      setUserState(result);
    };

    fetchData();
  }, []);

  return (
    <div id="userApi">
      <ul className="userApiList">
        {userState.map((user) => (
          <li key={user.id}>
            <div className="userInfo">
              <h2>Про Користувуча</h2>
              <div>
                Ім'я: <h3>{user.name}</h3>
              </div>
              <div>
                Логін: <h3>{user.username}</h3>
              </div>
              <p>Пошта: {user.email}</p>
            </div>

            <div className="userAddress">
              <h2>Адресса</h2>
              <p>Вулиця: {user.address.street}</p>
              <p>Офіс: {user.address.suite}</p>
              <p>Місто: {user.address.city}</p>
              <p>Поштовий індекс: {user.address.zipcode}</p>
            </div>

            <div className="userCompanyInfo">
              <h2>Дані компанії</h2>
              <p>Телефон: {user.phone}</p>
              <p>Веб-сайт: {user.website}</p>
              <p>Ім'я компанії: {user.company.name}</p>
              <p>Рекламне гасло: {user.company.catchPhrase}</p>
              <p>Діальність: {user.company.bs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersApi;
