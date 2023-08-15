import React from "react";
import Chart from "react-apexcharts";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        series: [40, 60],
      }
    };
  }
  render() {
    return (
      <div id="pieChart">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="pie"
          width="100%"
        />
      </div>
    );
  }
}
