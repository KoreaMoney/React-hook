import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import ReactMemo from "./components/React.memo";
import UseState from "./components/UseState";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/useState",
        element: <UseState />,
      },
      {
        path: "/useEffect",
        element: <UseEffect />,
      },
      {
        path: "/useRef",
        element: <UseRef />,
      },
      {
        path: "/useReducer",
        element: <UseReducer />,
      },
      {
        path: "/useContext",
        element: <UseContext />,
      },
      {
        path: "/useMemo",
        element: <UseMemo />,
      },
      {
        path: "/useCallback",
        element: <UseCallback />,
      },
      {
        path: "/reactMemo",
        element: <ReactMemo />,
      },
    ],
  },
]);
export default router;
