import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
      <button>
        <Link to="/useEffect">useEffect 확인</Link>
      </button>
      <button>
        <Link to="/useRef">useRef 확인</Link>
      </button>
      <button>
        <Link to="/useReducer">useReducer 확인</Link>
      </button>
      <button>
        <Link to="/useContext">useContext 확인</Link>
      </button>
      <button>
        <Link to="/useMemo">useMemo 확인</Link>
      </button>
      <button>
        <Link to="/useCallback">useCallback 확인</Link>
      </button>
      <button>
        <Link to="/reactMemo">React.memo 확인</Link>
      </button>
    </div>
  );
};

export default App;
