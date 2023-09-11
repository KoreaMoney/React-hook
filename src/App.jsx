/**
 * @brief App 컴포넌트
 * @author Kim Dowon
 * @Date 23.08.27.
 */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">홈으로 이동하기</Link>
      </div>
      <br />
      <Outlet />
      <br />
      <div>
        <Link to="/useState">useState 확인</Link>
        <br />
        <Link to="/useEffect">useEffect 확인</Link>
        <br />
        <Link to="/useRef">useRef 확인</Link>
        <br />
        <Link to="/useReducer">useReducer 확인</Link>
        <br />
        <Link to="/useContext">useContext 확인</Link>
        <br />
        <Link to="/useMemo">useMemo 확인</Link>
        <br />
        <Link to="/useCallback">useCallback 확인</Link>
        <br />
        <Link to="/reactMemo">React.memo 확인</Link>
        <br />
        <Link to="/customHook">CustomHook 확인</Link>
        <br />
        <Link to="/customHook2">CustomHook2 확인</Link>
        <br />
      </div>
    </div>
  );
};

export default App;
