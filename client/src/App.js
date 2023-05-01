import React, { Component } from 'react';

import './App.css';


class App extends Component {
  state = {
    response: '',
    email: '',
    password: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
    });
    const body = await response.text();

    // console.log("hloooe")
    // getEmails(this.state.email, this.state.password)
    
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          Email 
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ email: e.target.value })}
          />
          App Password
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
