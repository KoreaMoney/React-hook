import React, { useRef, useState } from "react";
/**
 * @brief useRef
 * @author Kim Dowon
 * @Date 23.08.27.
 * @returns
 * ref object는 언제든지 수정이 가능하다
 * component가 unmount되기 전까지는 값을 유지시킨다
 *
 * 사용되는 상황
 * 1. 저장공간
 * 2. Ref의 변화 -> No 렌더링 -> 변수들의 값을 유지할때
 * 3. State값의 변화 -> 렌더링 -> Ref값은 여전히 유지
 * 4. Input값의 focus하고 싶을 때 == document.querySelector
 */
const UseRef = () => {
  // const [count, setCount] = useState(0);
  const [render, setRender] = useState(0);
  const countRef = useRef(0);

  // const handleCountUpdate = () => {
  //   setCount(count + 1);
  // };

  const handleRenderUpdate = () => {
    setRender(render + 1);
  };

  // Ref는 아무리 수정해도 컴포넌트를 re-rendering을 시키지 않는다.
  const handleRefUpdate = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref값 올라가유 : ", countRef);
  };

  console.log("렌더링을 합니다 🎢");
  // console.log("Ref값 올라갈까유? : ", countRef);

  return (
    <div>
      <p>State : {render}</p>
      <p>useRef : {countRef.current}</p>
      {/* <button onClick={handleCountUpdate}>state값 올라갑니다</button> */}
      <button onClick={handleRenderUpdate}>
        리 랜더링 되유 값이 이제 바껴유
      </button>

      <button onClick={handleRefUpdate}>ref값 올라갑니다</button>
    </div>
  );
};

export default UseRef;
