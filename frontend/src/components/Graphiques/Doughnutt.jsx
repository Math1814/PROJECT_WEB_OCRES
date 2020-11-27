import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
class Doughnutt extends Component {
    constructor(props) {
        super(props);
         this.state = { benef : this.props.user };
        // this.state = {  }
    }
    option = {
        legend: {
          display: true,
        },
      };
    render() {
      var datas = 
        {
        labels: ["Matières Premières", "Charges Salariés", "Charges", "Autre"],
      
        datasets: [
          {
            data: this.props.user,
            backgroundColor: ["#CEACCE", "#CFBECF", "#D0E1D1","#CFFFD0"],
            hoverBackgroundColor: ["#B79FB7", "#B7ACB7", "#B8C4B9","#B7D9B8"],
          },
        ],
      };
        return (
            <Doughnut data={datas} options={this.option} />
        );
    }
}

export default Doughnutt;