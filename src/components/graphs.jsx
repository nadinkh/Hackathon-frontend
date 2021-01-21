import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {dataline:{}};

  componentDidMount(){
      fetch("https://inference-server-hackathon-itc.herokuapp.com/predict")
      .then((res)=> {return res.json()})
      .then((data)=>
      {const values=[];
        const labels=[];
        const objData=JSON.parse(data.predictions)
      for (const [key, value] of Object.entries(objData)) {
          values.push(value);
        labels.push(key);
      }
      let dataLine= {
        labels: labels,
        datasets: [
          {
            label: "Number of donors predicted for the next seven days",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(255, 0,0, .3)",
            borderColor: "rgb(255, 0, 0)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: values,
          }
        ]
      }
      this.setState({dataline:dataLine})
    })
  }

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataline} options={{ responsive: true}} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;