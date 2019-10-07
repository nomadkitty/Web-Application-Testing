import React from "react";

const Display = (props) => {
  const {balls, strikes} = props
  return(
    <>
      <h3>Balls: {balls}</h3>
      <h3>Strikes: {strikes}</h3>
    </>
  )
}

export default Display;