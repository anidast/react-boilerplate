import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
      padding: 0,
    },
  },
};

class AMonthCases extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const urlFetch = fetch('https://covid19.mathdro.id/api/daily/');

    urlFetch
      .then(res => res.json())
      .then(resJson => {
        const number = {
          labels: Array.from(Array(30).keys()),
          datasets: [
            {
              label: '',
              data: [],
              backgroundColor: 'rgb(142, 182, 249)',
              barPercentage: 0.8,
              categoryPercentage: 1.0,
            },
          ],
        };

        resJson.slice(-30).forEach(element => {
          number.datasets[0].data.push(element.totalConfirmed);
        });
        this.setState({
          data: number,
        });
      });
  }

  render() {
    return (
      <div className="my-4">
        <p className="is-size-6 has-text-light">A month confirmed cases</p>

        {Object.keys(this.state.data).length && (
          <Bar options={options} data={this.state.data} />
        )}
      </div>
    );
  }
}

export default AMonthCases;
