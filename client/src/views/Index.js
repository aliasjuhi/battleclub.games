import React from "react";
import DarkFooter from "components/Footers/DarkFooter";
import IndexHeader from "components/Headers/IndexHeader.js";


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
     
      <div className="wrapper">
          <IndexHeader/>
        <div className="main">

        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
