import React, { Component } from "react";
import { Button, Card, Row, Col, Container, Modal } from "react-bootstrap";
import axios from "axios";

class Postulaciones extends Component {
  constructor() {
    super();
    this.state = { postulaciones: [], show: false };
  }

  //componentDidMount() { //<----------------------------
  //  this.state.getPostulaciones();
  //}

  getPostulaciones = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:1818/Repositorio")
      .then((response) => {
        this.setState({ postulaciones: response.data });
        console.log(this.state.postulaciones);
        //vemos que postulaciones son las correctas status 1
      })
      .catch((err) => console.log(err));
  };

  handleShow = (e) => {
    this.setState({
      show: true,
    });
  };

  handleClose = (e) => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <br />

        <Container fluid>
          <h1> Postulaciones </h1>

          <Button
            variant="primary"
            type="submit"
            onClick={this.getPostulaciones}
          >
            {" "}
            Hola{" "}
          </Button>
        </Container>

        <br />
        <br />

        <Container fluid>
          <ul>
            {this.state.postulaciones.map((postulacion) => (
              <div>
                <Card>
                  <Card.Header>
                    Esta postulacion tiene id {postulacion.id}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{postulacion.correo}</Card.Title>
                    <Card.Text>
                      Esta postulacion tiene el status {postulacion.status}, y
                      esta interesa en {postulacion.postulacion}.
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer className="text-muted">
                    <Row>
                      <Col sm={3}>
                        <Button variant="primary">Ver en mas detalles</Button>
                      </Col>
                      <Col sm={8}></Col>
                      <Col sm={1}>
                        <Button variant="danger" onClick={this.handleShow}>
                          Borrar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
                <br />
              </div>
            ))}{" "}
          </ul>
        </Container>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Rechazar postulante</Modal.Title>
          </Modal.Header>
          <Modal.Body>Se le enviara un correo al postulante.</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" size="sm" block onClick={this.handleClose}>
              {" "}
              Cerrar{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Postulaciones;
