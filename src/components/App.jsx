import { Toaster } from "react-hot-toast";
import "../style/index.css";
import Notice from "./notice/Notice.jsx";
import UserSort from "./userSort/UserSort.jsx";
import UsersApi from "./usersApi/UsersApi.jsx";
import Acardion from "./acardion/Acardion.jsx";
import Timer from "./timer/Timer.jsx";
import Pagination from "./pagination/Pagination.jsx";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <h1 id="title">Practice-CSS-React-3</h1>
      <Notice />
      <UserSort />
      <UsersApi />
      <Acardion />
      <Timer />
      <Pagination />
    </>
  );
}

export default App;
