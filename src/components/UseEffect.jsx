/**
 * @brief useMemo
 * @author Kim Dowon
 * @Date 23.08.27.
 * @returns
 * useEffect( 콜백 함수, [의존성 배열])
 *
 * 함수가 마운트가 되었을때
 * 콜백 함수 이후 의존성 배열의 값이 변할 때
 * 함수가 언 마운트가 되었을 때
 *
 * 작동한다.
 */
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0); // State 변경되면 rendering
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 의존성 배열이 없는 경우
  useEffect(() => {
    console.log("렌더링을 합니다 🎢");
    //......
  });

  // // 의존성 배열만 있는 경우
  // useEffect(() => {
  //   console.log("렌더링을 합니다 🎢");
  // }, []);

  // // 의존성 배열이 있는 경우 (count일 경우)
  // useEffect(() => {
  //   console.log("숫자가 렌더링을 합니다 💡");
  // }, [count]);

  // // 의존성 배열이 있는 경우 (name일 경우)
  // useEffect(() => {
  //   console.log("이름이 렌더링을 합니다 📺");
  // }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>업데이트 : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>name : {name}</p>
    </div>
  );
};

export default UseEffect;
