import React, { useCallback, useEffect, useState } from "react";
/**
 * @returns kimdowon 김도원 23.08.27
 * useMemo와 같이 memoization한다
 * useMemo와 다른 점은 인자를 전달한 콜백함수 그 자체를 전달한다
 * 함수를 필요할때 마다 매번 선언하는게 아니라 캐시된 함수를 부른다
 */
const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const handleCallback = () => {
    console.log(`함수를 부릅니다 : ${number}`);
    return;
  };

  // const handleCallback = useCallback(() => {
  //   console.log(`함수를 부릅니다 : ${number}`);
  //   return;
  // }, [number]);

  // useEffect(() => {
  //   console.log("함수가 변경되었습니다.");
  // }, [handleCallback]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={handleCallback}>함수 부르기</button>
    </div>
  );
};

export default UseCallback;
