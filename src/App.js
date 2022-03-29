import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';

import './style.css';

export default class App extends React.Component{

  constructor(props){
    super(props);

    const isLogged = localStorage.getItem('isLogged');
    this.state = {
      isLogged: true,
      isPlayer: true,
    };
  }

   data = {
    titleData: {
      title: 'House of Cats :)',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      notes:
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    lists: ['Keep watching', 'Comedy'],
  };

  login = () => {
    this.setState({ isLogged: true });
  };

  logout = () => {
    localStorage.removeItem('isLogged');
    this.setState({ isLogged: false });
  };

  clickedVideo = (id) =>{
    console.log('videoclick AppComponent ' + id);
    this.setState({isPlayer: true});
  };

  render() {
    return this.state.isLogged ? (
      this.state.isPlayer ?(
      <Player />
      ) :
      <Home data={this.data} logoutCallback={this.logout} clickedVideo={this.clickedVideo}/>
    ) : (
      <Login loginCallback={this.login} />
    );
  }
}