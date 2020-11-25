import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Graph from "./components/Graph";
import DayPicker from "react-day-picker";
import Commentaire from "./components/Commentaire/Commentaire.jsx";
import Parameter from "./components/Parameter/Parameter.jsx"

import "./App.css";
import "react-day-picker/lib/style.css";

import Logo from "./unknown.png";
import Param from "./paramnoir.png";
import ParamA from "./paramvert.png";
import Dash from "./dashnoir.png";
import DashA from "./dashrose.png";


var option = {
  legend: {
    display: false,
  },
};
var dataDep = {
  labels: ["Fourniture", "Salaires", "Autre"],

  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
      hoverBackgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
    },
  ],
};
var dataGain = {
  datasets: [
    {
      data: [10, 20],
    },
  ],
  backgroundColor: ["#C2BDEF", "#BDEAEF"],
  hoverBackgroundColor: ["#C2BDEF", "#BDEAEF"],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Gain", " "],
};
var data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      label: "en k€",
      borderColor: "#BDEAEF",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#BDEAEF",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#BDEAEF",
      pointHoverBorderColor: "#BDEAEF",
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

var id = window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
></link>;
class App extends Component {
  constructor(props) {
    super(props);
    this.parameter = this.parameter.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.state = { page: 1 }
  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }

  render() {
    return (
      <div class="container" style={{ maxWidth: "2000px" }}>
        <div class="row">
          <div class="col-sm-2" style={{ fontWeight: "bold" }}>
            <header class="App-header">
              <div class="row">
                <img src={Logo} style={{ margin: "auto" }}></img>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="choixEntre">
                    <div class="row">
                      <a style={{ margin: "auto" }}>Entreprise A</a>
                    </div>
                  </div>
                  <div class="col-sm-1"></div>
                </div>
              </div>

              {
                this.state.page === 1
                ?              /* btn page 1*/
                <div>
                  <div class="row" onClick={this.dashboard} style={{ marginTop: "40%", cursor: "pointer" }}>
                    <div class="col-sm-2">
                      <img src={DashA}></img>
                    </div>
                    <div class="col-sm-10">
                      <a style={{ color: "#FDE1DE" }}>Mon DashBoard</a>
                    </div>
                  </div>
                  
                  <div class="row" onClick={this.parameter} style={{ marginTop: "10%", cursor: "pointer" }}>
                    <div class="col-sm-2">
                      <img src={Param}></img>
                    </div>
                    <div class="col-sm-10">
                      <a> Mes Paramètres</a>
                    </div>
                  </div>
                </div>
                :               /*btn page 2 */
                <div>
                  <div class="row" onClick={this.dashboard} style={{ marginTop: "40%", cursor: "pointer" }}>
                    <div class="col-sm-2">
                      <img src={Dash}></img>
                    </div>
                    <div class="col-sm-10">
                      <a>Mon DashBoard</a>
                    </div>
                  </div>
                  <div class="row" onClick={this.parameter} style={{ marginTop: "10%", cursor: "pointer" }}>
                    <div class="col-sm-2">
                      <img src={ParamA}></img>
                    </div>
                    <div class="col-sm-10">
                      <a style={{ color: "#78E6D0" }} > Mes Paramètres</a>
                    </div>
                  </div>
                </div>

              }
            </header>
          </div>
          

          {
            this.state.page === 1
              /* Page 1 */
              ? <div v-if="this.state.page == 1" class="col-sm-10" style={{ fontWeight: "bold" }}>
                <div class="row">
                  <div class="col-sm-9">
                    <div class="row row-mid">
                      <div class="App-headerMilieu">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10 container-graph-benefice">
                          <div class="row" style={{ marginTop: "1em" }}>
                            <titre>Bénéfices</titre>
                          </div>
                          <div class="row row-graph-benefice">
                            <Line data={data2} type="line" height="auto" />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-1"></div>
                    </div>
                    <div class="row row-mid">
                      <div class="col-sm-6">
                        <div class="App-headerMilieu">
                          <div class="col-sm-1"></div>
                          <div class="col-sm-10">
                            <titre>Gains</titre>
                            <div class="row">
                              <Doughnut
                                data={dataGain}
                                options={option}
                                height="150px"
                              />
                            </div>
                          </div>
                          <div class="col-sm-1"></div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="App-headerMilieu">
                          <div class="col-sm-1"></div>
                          <div class="col-sm-10">
                            <titre>Depense</titre>
                            <div class="row">
                              <Doughnut
                                data={dataDep}
                                options={option}
                                height="150px"
                              />
                            </div>
                          </div>
                          <div class="col-sm-1"></div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-mid">
                      <div class="col-sm-10">
                        <div class="App-headerMilieu">
                          <Commentaire />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="row">
                      <div class="App-header">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                          <titre>Date</titre>
                          <div class="row">
                            <DayPicker />
                          </div>
                        </div>
                        <div class="col-sm-1"></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="App-header">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                          <titre>ToDo</titre>
                          <div class="row">
                            <Graph />
                          </div>
                        </div>
                        <div class="col-sm-1"></div>
                      </div>
                    </div>
                    <div class="col-sm-1"></div>
                  </div>
                  <div class="row">
                    <Graph />
                  </div>
                </div>
              </div>
              /* Page 2 */
              : <div className="page2">
                <Parameter /> 
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
