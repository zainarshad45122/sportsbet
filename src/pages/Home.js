import React from "react";
import MyPullConnector from "./PullConnector";


const notifyInitialDump = () => {
  const pullConnector = new MyPullConnector("sept.oddsmatrix.com", 7000);
  pullConnector.start('LawleyandAllen');
 
 // pullConnector.notifyInitialDump() ;
}

const Home = () => {
 
  return <button onClick={() => notifyInitialDump()}>
  Pull Data
</button>;
};

export default Home;
