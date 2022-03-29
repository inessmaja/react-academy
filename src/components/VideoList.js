import React from 'react';
import '../style.css';

export default function VideoList(props) {

const data = [
  {id: 0, imgSrc: "https://placekitten.com/g/400/200", description: 'Video preview'},
  {id: 1, imgSrc: "https://placekitten.com/g/300/200", description: 'Video preview'},
  {id: 2, imgSrc: "https://placekitten.com/g/500/300", description: 'Video preview'},
  {id: 3, imgSrc: "https://placekitten.com/g/600/200", description: 'Video preview'},
  {id: 4, imgSrc: "https://placekitten.com/g/300/500", description: 'Video preview'},
  {id: 5, imgSrc: "https://placekitten.com/g/200/100", description: 'Video preview'},
];


  return (
    <>
      <h4> {props.title} </h4>
      <div className="scroll">
        <div className="thumbnail" >
          {data.map(elem => <img src={elem.imgSrc} onClick={() =>props.clickedVideo(elem.id)}/>)}
        
        </div>
      </div>
    </>
  );
}

