import React, { useContext } from "react";
import { UsePage } from "../usePage";

const Footer = () => {
  // useContext사용 시
  const { isDark, setIsDark } = useContext(UsePage);
  console.log("Content : isDark  ", isDark);
  console.log("Content : setIsDark  ", setIsDark);

  const isToggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "gray" : "white",
      }}
    >
      <button className="button" onClick={isToggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
