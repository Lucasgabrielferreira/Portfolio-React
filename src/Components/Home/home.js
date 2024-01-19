import React from "react";
import "./home.css";
import Body from "../Body/body";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;
