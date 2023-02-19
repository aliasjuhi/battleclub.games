/*eslint-disable*/
import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";


import Stats from "views/index-sections/Stats";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <div className="page-header clear-filter" filter-color="zold">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/esports1.png") +  ")"
          }}
          ref={pageHeader}
        ></div>
       
          
       <Container >
          <div  style={{ height: 400, width: "100%" }}>
          <Row>
          <Col span={12} style={{height: 400, width: "100%" }}>
              <Stats/>
            </Col>
          </Row>
          </div>
        </Container>  
          <Container lassName=" border" fluid="md" >
      </Container>      
          </div>
     
    </>
  );
}

export default IndexHeader;
