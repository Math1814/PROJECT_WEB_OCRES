import React, { Component, Fragment } from "react";
import "./Parameter.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
// import FormControl from 'react-bootstrap/FormControl'
// import FormCheck from 'react-bootstrap/FormCheck'
// import FormFile from 'react-bootstrap/FormFile'
import { isNaN } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import {API_URL} from "../../config";
import API from '../../api';

import moment from "moment";
import axios from "axios";


class Graphique extends Component {
    constructor(props) {
        super(props);
        this.myRef3 = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                mois: null,
                benef: null,
            },

            errorMessage: ""
        };
    }

    handleChange(event) {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        })
    }
    async handleSubmit(event) {
        event.preventDefault();
        var mois = 1;
        if (this.state.formData.benef === null) {
          this.setState({ errorMessage: "Il faut rentrer des valeurs" });
          return;
        }
        console.log("avant switch", this.myRef3.current.value)
            switch (this.myRef3.current.value) { // on aurait pu mettre dans la BDD typegain en int mais on trouvait ca plus simple pour se reperer de mettre des string
              case "Janvier":
                console.log("Janvier")
                   mois=1;
                   break;
              case "Février":
                  console.log("Février")
                 mois=2;
                 
                break;
              case "Mars":
                console.log("Février")
                mois=3;
                break;
              case "Avril":
                console.log("Février")
                mois=4;
                break;

            case "Mai":
                console.log("Mai")
                mois=5;
                break;
            case "Juin":
                console.log("Juin")
                mois=6;
                break;
            case "Juillet":
                console.log("Juillet")
                mois=7;
                break;
            case "Aout":
                console.log("Aout")
                mois=8;
                break;
            case "Septembre":
                console.log("Septembre")
                mois=9;
                break;
            case "Octobre":
                console.log("Octobre")
                mois=10;
                break;
            case "Novembre":
                console.log("Novembre")
                mois=11;
                break;
            case "Décembre":
                console.log("Décembre")
                mois=12;
                break;
              default:
                mois=1;
                break;
            }
        try {
            
          await API.put(
            `/entreprises/benef/${this.props.entreprise_id}/${mois}`,
            this.state.formData
          );
          this.setState({
            formData: {
                mois: "",
                benef: "",
            },
            errorMessage: "",
          });
        } catch (error) {
          console.log(error);
        }


    }

    render() {
        console.log("hello");
        return (

            <Fragment>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <titre style={{ fontWeight: "bold" }}>Ajout d'un chiffre d'affaire</titre>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <Form.Label style={{ color: "#FBC86A" }} >Quel mois?  </Form.Label>
                        <Form.Control
                            as="select"
                            size="lg"
                            value={this.state.formData.mois}
                            ref = {this.myRef3}
                            onChange={this.handleChange}
                        >
                            <option value="Janvier">Janvier</option>
                            <option value="Février">Février</option>
                            <option value="Mars">Mars</option>
                            <option value="Avril">Avril</option>
                            <option value="Mai">Mai</option>
                            <option value="Juin">Juin</option>
                            <option value="Juillet">Juillet</option>
                            <option value="Aout">Août</option>
                            <option value="Septembre">Septembre</option>
                            <option value="Octobre">Octobre</option>
                            <option value="Novembre">Novembre</option>
                            <option value="Décembre">Décembre</option>
                        </Form.Control>
                    </div>
                    <br />
                    <div class="row">
                        <Form.Label style={{ color: "#FBC86A" }} >Combien?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="bénéfice en K€"
                            name="benef"
                            size="lg"
                            value={this.state.formData.benef}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div class="row">
                        <Button variant="flat1" type="submit">
                            Envoyer
                  </Button>

                    </div>
                </Form>

                <br></br>
            </Fragment>
        );

    }
}

export default Graphique;