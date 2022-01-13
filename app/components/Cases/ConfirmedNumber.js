import React, { Component } from 'react';

class ConfirmedNumber extends Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    const urlFetch = fetch('https://covid19.mathdro.id/api/');

    urlFetch
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          value: resJson.confirmed.value,
        });
        // console.log(this.state.value);
      });
  }

  render() {
    return (
      <div>
        <p className="is-size-6 has-text-light">Confirmed Cases right now</p>
        <p className="is-size-1 has-text-light my-1">{this.state.value}</p>
      </div>
    );
  }
}

export default ConfirmedNumber;
