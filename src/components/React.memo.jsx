import React, { useState } from "react";
import ChildComponent from "./react.memo/ChildComponent";
/**
 * @returns kimdowon 김도원 23.08.31
 * 매번 렌더링마다 무거운 로직을 처리할때 성능 측면에서 부담이 된다면
 * 불필요한 렌더링을 막기 위해 사용하는 것
 * props를 보내는 쪽이 렌더링이 될때 마다 props를 받는 쪽은 계속 렌더링이 된다
 * 그래서 렌더링의 횟수를 컨트롤 할 수 있도록 해야한다
 *
 * HOC(Higher Order Component : 고착 컴포넌트)
 * -> 일반 컴포넌트를 받아서 -> () -> 최적화된 컴포넌트로 구성한다
 * -> 최적화된 컴포넌트는 props check을 통해 props를 검토한다
 * -> props의 변화가 있다면 그때 rendering이 된다
 * -> 컴포넌트 로직을 재사용이 된다
 * -> 꼭 필요할 때만 사용해야 한다
 *
 * 사용되는 상황
 * 1. 컴포넌트가 같은 props로 자주 렌더링을 할 때
 * 2. 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야 할 때
 */

const ReactMemo = () => {
  const [age, setAge] = useState(0);
  const [propsAge, setPropsAge] = useState(0);
  const [name, setName] = useState("");

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateChildAge = () => {
    setPropsAge(propsAge + 1);
  };

  console.log("👨‍💻부모 컴포넌트가 렌더링이 됩니다");

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "20rem" }}>
      <h1>부모컴포넌트 나이</h1>
      <p>age : {age}</p>
      <span>자식 이름 : </span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={updateAge}>나이 업데이트</button>
        <button onClick={updateChildAge}>child 나이 업데이트</button>
      </div>
      <ChildComponent name={name} age={propsAge} />
    </div>
  );
};

export default ReactMemo;
