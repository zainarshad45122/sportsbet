import React from "react";
import LbPushConnector from "./PushConnector";

const notifyInitialDump = () => {
  console.log('notify');
  const pushConnector = new LbPushConnector('sept.oddsmatrix.com', 7000);
  pushConnector.start('LawleyandAllen');
}



const Home = () => {
 
  return <button onClick={() => notifyInitialDump()}>
  Push Data Socket Connection
</button>;
};

export default Home;
