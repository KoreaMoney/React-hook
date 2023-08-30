import React, { memo } from "react";

const ChildComponent = ({ name, age }) => {
  console.log("🐼자식 컴포넌트가 렌더링이 됩니다");

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h4>props받는 컴포넌트</h4>
      <p>name : {name}</p>
      <p>age : {age}</p>
    </div>
  );
};

export default ChildComponent;

// // React memo방식
// const ChildComponent = ({ name, age }) => {
//   console.log("🐼자식 컴포넌트가 렌더링이 됩니다");

//   return (
//     <div style={{ border: "1px solid gray", padding: "10px" }}>
//       <h4>props받는 컴포넌트</h4>
//       <p>name : {name}</p>
//       <p>age : {age}</p>
//     </div>
//   );
// };

// export default memo(ChildComponent);
