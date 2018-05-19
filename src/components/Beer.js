import React from "react";

const Beer = props => {
  return (
    <div>
      <p>{props.detail.url} </p>
      <p>{props.detail.name}</p>
      <p>{props.detail.ibu} </p>
      <p>{props.detail.calories} </p>
      <p>{props.detail.abv} </p>
      <p>{props.detail.style} </p>
      <p>{props.detail.category}</p>
    </div>
  );
};

export default Beer;
