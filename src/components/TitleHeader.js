import React from 'react';
import '../style.css';

export default function TitleHeader(props) {
  return (
    <div className="container">
      <div className="texts">
        <h1 className="title"> {props.titles.title} </h1>
        <p className="description"> {props.titles.description} </p>
        <p className="notes"> {props.titles.notes} </p>
      </div>

      <div id="tnimg" className="images">
        <img src="https://placekitten.com/g/600/200" />
      </div>
    </div>
  );
}
