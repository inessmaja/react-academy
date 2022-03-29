import React from 'react';
import '../style.css';

import TitleHeader from '../components/TitleHeader';
import VideoList from '../components/VideoList';

export default function Home(props) {
  return (
    <>
      <button onClick={() => props.logoutCallback()}>Logout</button>
      <TitleHeader titles={props.data.titleData} />
      {props.data.lists.map((elementocorrente) => {
        return <VideoList title={elementocorrente} clickedVideo={props.clickedVideo} />;
      })}
    </>
  );
}
