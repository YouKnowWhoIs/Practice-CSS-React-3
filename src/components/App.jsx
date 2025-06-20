import { Toaster } from "react-hot-toast";
import "../style/index.css";
import Notice from "./notice/Notice.jsx";

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
    </>
  );
}

export default App;
