import React from "react";
import MyPushConnector from "./PushConnector";

const notifyInitialDump = () => {
  console.log('notify');
  const pushConnector = new MyPushConnector("sept.oddsmatrix.com", 7000);
  pushConnector.start('LawleyandAllen');
}



const Home = () => {
 
  return <button onClick={() => notifyInitialDump()}>
  Push Data Socket Connection
</button>;
};

export default Home;
