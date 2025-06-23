import { useState } from "react";
import "../../style/acardion/acardion.css";

function Acardion() {
  const [activeSection, setActiveSection] = useState("");

  const handleBtnToggle = (section) => {
    if (activeSection === section) {
      setActiveSection("");
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div id="acardion">
      <div className="conteinerItems">
        <button onClick={() => handleBtnToggle("plan")}>План на тиждень</button>
        {activeSection === "plan" && (
          <p className="acordionText">
            Скласти список завдань, виділити пріоритети та запланувати
            відпочинок у вихідні.
          </p>
        )}
      </div>

      <div className="conteinerItems">
        <button onClick={() => handleBtnToggle("idea")}>
          Ідея для проєкту
        </button>
        {activeSection === "idea" && (
          <p className="acordionText">
            Створити веб-додаток для збереження особистих нотаток з авторизацією
            користувача.
          </p>
        )}
      </div>

      <div className="conteinerItems">
        <button onClick={() => handleBtnToggle("quote")}>Цитата дня</button>
        {activeSection === "quote" && (
          <p className="acordionText">
            Успіх — це сума маленьких зусиль, повторюваних з дня в день.
          </p>
        )}
      </div>
    </div>
  );
}

export default Acardion;
