import React from "react";

const Dashboard = (props) => {
  const {balls, strikes, handleStrikes, handleBalls, handleFoul, handleHit} = props;

  return(
    <>
      <button onClick={()=>{handleStrikes(strikes)}}>strike</button>
      <button onClick={()=>{handleBalls(balls)}}>ball</button>
      <button onClick={()=>{handleFoul(strikes)}}>foul</button>
      <button onClick={()=>{handleHit()}}>hit</button>
    </>
  )
}

export default Dashboard;