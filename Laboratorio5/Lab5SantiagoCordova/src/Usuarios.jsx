import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const dataInicial = [
  {
    numeroEmpleado: 1001,
    nombreEmpleado: "Jorge Carranza",
    areaTrabajo: "TI",
    anioInicio: 2022,
    email: "jorge@tec.mx",
  },
  {
    numeroEmpleado: 1002,
    nombreEmpleado: "Ramon Velez",
    areaTrabajo: "Finanzas",
    anioInicio: 2021,
    email: "ramon@banorte.com",
  },
  {
    numeroEmpleado: 1003,
    nombreEmpleado: "Hugo Sanchez",
    areaTrabajo: "Deportes",
    anioInicio: 2020,
    email: "hugo@club.com",
  },
];

export const Usuarios = () => {
  const [data, setData] = React.useState(dataInicial);
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);

  const [form, setForm] = React.useState({
    numeroEmpleado: "",
    nombreEmpleado: "",
    areaTrabajo: "",
    anioInicio: "",
    email: "",
  });

  const mostrarModalActualizar = (dato) => {
    // pasamos todo como string para inputs controlados
    setForm({
      numeroEmpleado: String(dato.numeroEmpleado ?? ""),
      nombreEmpleado: String(dato.nombreEmpleado ?? ""),
      areaTrabajo: String(dato.areaTrabajo ?? ""),
      anioInicio: String(dato.anioInicio ?? ""),
      email: String(dato.email ?? ""),
    });
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => setModalActualizar(false);

  const mostrarModalInsertar = () => {
    setForm({
      numeroEmpleado: "",
      nombreEmpleado: "",
      areaTrabajo: "",
      anioInicio: "",
      email: "",
    });
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => setModalInsertar(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const editar = () => {
    const datoEditado = {
      ...form,
      numeroEmpleado: parseInt(form.numeroEmpleado, 10),
      anioInicio: parseInt(form.anioInicio, 10),
    };

    const newData = data.map((registro) =>
      registro.numeroEmpleado === datoEditado.numeroEmpleado ? datoEditado : registro
    );

    setData(newData);
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    if (
      window.confirm(
        "Estás Seguro que deseas Eliminar el empleado " + dato.numeroEmpleado
      )
    ) {
      setData(data.filter((r) => r.numeroEmpleado !== dato.numeroEmpleado));
      setModalActualizar(false);
    }
  };

  const insertar = () => {
    const valorNuevo = {
      ...form,
      numeroEmpleado: parseInt(form.numeroEmpleado, 10),
      anioInicio: parseInt(form.anioInicio, 10),
    };

    setData([...data, valorNuevo]);
    setModalInsertar(false);
  };

  return (
    <>
      <Container className="d-flex flex-column align-items-center">
        <br />
        <Button color="success" onClick={mostrarModalInsertar}>
          Crear
        </Button>
        <br />
        <br />

        <Table className="text-center" style={{ maxWidth: 1000 }}>
          <thead>
            <tr>
              <th>Número de empleado</th>
              <th>Nombre</th>
              <th>Área de trabajo</th>
              <th>Año de inicio</th>
              <th>Email</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map((dato) => (
              <tr key={dato.numeroEmpleado}>
                <td>{dato.numeroEmpleado}</td>
                <td>{dato.nombreEmpleado}</td>
                <td>{dato.areaTrabajo}</td>
                <td>{dato.anioInicio}</td>
                <td>{dato.email}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* MODAL INSERTAR */}
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar empleado</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Número de empleado: </label>
            <input
              className="form-control"
              name="numeroEmpleado"
              type="number"
              onChange={handleChange}
              value={form.numeroEmpleado}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre de empleado: </label>
            <input
              className="form-control"
              name="nombreEmpleado"
              type="text"
              onChange={handleChange}
              value={form.nombreEmpleado}
            />
          </FormGroup>

          <FormGroup>
            <label>Área de trabajo: </label>
            <input
              className="form-control"
              name="areaTrabajo"
              type="text"
              onChange={handleChange}
              value={form.areaTrabajo}
            />
          </FormGroup>

          <FormGroup>
            <label>Año de inicio: </label>
            <input
              className="form-control"
              name="anioInicio"
              type="number"
              onChange={handleChange}
              value={form.anioInicio}
            />
          </FormGroup>

          <FormGroup>
            <label>Email: </label>
            <input
              className="form-control"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL ACTUALIZAR */}
      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <div>
            <h3>Editar empleado</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Número de empleado: </label>
            <input
              className="form-control"
              readOnly
              type="number"
              value={form.numeroEmpleado}
            />
            <small className="text-muted">
              (El número de empleado se usa como ID y no se edita)
            </small>
          </FormGroup>

          <FormGroup>
            <label>Nombre de empleado:</label>
            <input
              className="form-control"
              name="nombreEmpleado"
              type="text"
              onChange={handleChange}
              value={form.nombreEmpleado}
            />
          </FormGroup>

          <FormGroup>
            <label>Área de trabajo:</label>
            <input
              className="form-control"
              name="areaTrabajo"
              type="text"
              onChange={handleChange}
              value={form.areaTrabajo}
            />
          </FormGroup>

          <FormGroup>
            <label>Año de inicio:</label>
            <input
              className="form-control"
              name="anioInicio"
              type="number"
              onChange={handleChange}
              value={form.anioInicio}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={editar}>
            Editar
          </Button>
          <Button color="danger" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};