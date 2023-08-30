import React from "react";
import "./index.css";
import Content from "./props/Content";
import Footer from "./props/Footer";

const Page = () => {
  // // // 확인 용
  // const props = useContext(UsePage);
  // console.log("props", props);

  return (
    <div className="page">
      <h1>context hook</h1>
      {/* <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} /> */}
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
