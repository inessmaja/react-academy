import React from 'react';
import '../style.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  accedi = () => {
    const emailEsatta = 'pippo@gmail.com';
    const passwordEsatta = '123';
    if (
      this.state.email === emailEsatta &&
      this.state.password === passwordEsatta
    ) {
      localStorage.setItem('isLogged', true);
      this.setState({ email: '', password: '' });
      this.props.loginCallback();
    } else {
      console.log('Not logged in');
    }
  };

  upadateEmail = (event) => this.setState({ email: event.target.value });
  upadatePassword = (event) => this.setState({ password: event.target.value });

  render() {
    return (
      <div className="panel">
        <h1 className="sign-in"> Sign In</h1>
        <input
          type="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.upadateEmail}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.upadatePassword}
        />
        <br /> <br />
        <button className="button" onClick={this.accedi}>
          Sign In
        </button>
        <p className="loginNotes">
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc
        </p>
      </div>
    );
  }
}
