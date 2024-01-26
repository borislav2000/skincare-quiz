import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FirstQuestion from "./pages/FirstQuestion";
import SecondQuestion from "./pages/SecondQuestion";
import ThirdQuestion from "./pages/ThirdQuestion";
import FourthQuestion from "./pages/FourthQuestion";
import FifthQuestion from "./pages/FifthQuestion";
import Results from "./pages/Results";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/question-1", element: <FirstQuestion /> },
  { path: "/question-2", element: <SecondQuestion /> },
  { path: "/question-3", element: <ThirdQuestion /> },
  { path: "/question-4", element: <FourthQuestion /> },
  { path: "/question-5", element: <FifthQuestion /> },
  { path: "/results", element: <Results /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
