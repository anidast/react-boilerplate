/* eslint-disable react/prop-types */
import React, { Component } from 'react';

const Regions = props => (
  <tr className="has-text-weight-medium">
    <td>{props.region.state}</td>
    <td className="has-text-right">{props.region.confirmed}</td>
  </tr>
);

class TopRegion extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const urlFetch = fetch('https://covid19.mathdro.id/api/daily/1-11-2022');

    urlFetch
      .then(res => res.json())
      .then(resJson => {
        const temp = [];

        resJson.slice(0, 5).forEach(element => {
          temp.push({
            state: element.countryRegion,
            confirmed: element.confirmed,
          });
        });
        this.setState({
          data: temp,
        });
        // console.log(this.state.data);
      });
  }

  regionList() {
    return this.state.data.map(currentData => <Regions region={currentData} />);
  }

  render() {
    return (
      <table className="table has-background-info has-text-light">
        <thead>
          <tr>
            <th className="has-text-light has-text-weight-normal">
              Top region cases
            </th>
            <th className="has-text-light has-text-weight-normal">
              Confirmed cases
            </th>
          </tr>
        </thead>
        <tbody>{this.regionList()}</tbody>
      </table>
    );
  }
}

export default TopRegion;
