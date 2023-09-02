import React, { useState } from "react";
import { useInput } from "./customHooks/useInput";
/**
 * @returns kimdowon 김도원 23.09.01.
 * 커스텀 훅은 중복된 기능 또는 코드들의 사용을 줄이기 위해 진행
 * 폭발적인 재 사용성을 증가시킨다.
 */

function displayMessage(message) {
  alert(message);
}
const CustomHook = () => {
  const [value, handleChange, handleSubmit] = useInput("", displayMessage);
  return (
    <div>
      <h1>Custom-Hooks</h1>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default CustomHook;
