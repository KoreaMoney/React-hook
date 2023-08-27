import React, { useContext } from "react";
import {UsePage} from "../UsePage";

const Content = ({ isDark }) => {
  // useContext사용 시
  // const { isDark } = useContext(UsePage);
  // console.log("Content : isDark ? ", isDark);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>context props가 content로 들어왔네요?</p>
    </div>
  );
};

export default Content;
