import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import "../../style/notice/notice.css";

const notes = [
  {
    title: "Заголовок 1",
    text: "Залиш свою нотатку тут!",
  },
  {
    title: "Заголовок 2",
    text: "Залиш свою нотатку тут!",
  },
  {
    title: "Заголовок 3",
    text: "Залиш свою нотатку тут!",
  },
];

function Notice() {
  const [notisText, setNotisText] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes && localNotes.length > 0) {
      setNotisText(localNotes);
    } else {
      setNotisText(notes);
    }
  }, []);

  useEffect(() => {
    if (notisText.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notisText));
    }
  }, [notisText]);

  const handleEditor = (i) => {
    setEditIndex(i);
  };

  const handleChange = (i, field, value) => {
    const updatedNotes = [...notisText];
    updatedNotes[i] = {
      ...updatedNotes[i],
      [field]: value,
    };
    setNotisText(updatedNotes);
  };

  const savedEdit = () => {
    setEditIndex(null);
    toast.success("Успішно відредаговано!", { position: "top-right" });
  };

  return (
    <div id="notes">
      <ul className="notesList">
        {notisText.map((note, i) => (
          <li key={i} className="notesItems">
            {editIndex === i ? (
              <>
                <input
                  value={note.title}
                  onChange={(event) =>
                    handleChange(i, "title", event.target.value)
                  }
                />
                <textarea
                  value={note.text}
                  onChange={(event) =>
                    handleChange(i, "text", event.target.value)
                  }
                />
                <button type="button" onClick={savedEdit}>
                  Зберегти
                </button>
              </>
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
                <button type="button" onClick={() => handleEditor(i)}>
                  Редагувати
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;
