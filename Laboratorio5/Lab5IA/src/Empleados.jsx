import React from "react";
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
  Input,
  Badge,
} from "reactstrap";

// Archivo nuevo: Empleados.jsx (CRUD similar, UI mejorada)

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
    areaTrabajo: "Operaciones",
    anioInicio: 2020,
    email: "hugo@club.com",
  },
];

export const Empleados = () => {
  const [data, setData] = React.useState(dataInicial);
  const [modalActualizar, setModalActualizar] = React.useState(false);
  const [modalInsertar, setModalInsertar] = React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");

  const [form, setForm] = React.useState({
    numeroEmpleado: "",
    nombreEmpleado: "",
    areaTrabajo: "",
    anioInicio: "",
    email: "",
  });

  const abrirInsertar = () => {
    setForm({
      numeroEmpleado: "",
      nombreEmpleado: "",
      areaTrabajo: "",
      anioInicio: "",
      email: "",
    });
    setModalInsertar(true);
  };

  const cerrarInsertar = () => setModalInsertar(false);

  const abrirActualizar = (dato) => {
    setForm({
      numeroEmpleado: String(dato.numeroEmpleado ?? ""),
      nombreEmpleado: String(dato.nombreEmpleado ?? ""),
      areaTrabajo: String(dato.areaTrabajo ?? ""),
      anioInicio: String(dato.anioInicio ?? ""),
      email: String(dato.email ?? ""),
    });
    setModalActualizar(true);
  };

  const cerrarActualizar = () => setModalActualizar(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validarForm = () => {
    if (!form.numeroEmpleado || !form.nombreEmpleado || !form.areaTrabajo || !form.anioInicio || !form.email) {
      alert("Completa todos los campos antes de guardar.");
      return false;
    }
    const num = parseInt(form.numeroEmpleado, 10);
    const anio = parseInt(form.anioInicio, 10);

    if (Number.isNaN(num) || num <= 0) {
      alert("Número de empleado inválido.");
      return false;
    }
    if (Number.isNaN(anio) || anio < 1900 || anio > new Date().getFullYear() + 1) {
      alert("Año de inicio inválido.");
      return false;
    }
    if (!String(form.email).includes("@")) {
      alert("Email inválido.");
      return false;
    }
    return true;
  };

  const insertar = () => {
    if (!validarForm()) return;

    const num = parseInt(form.numeroEmpleado, 10);
    const yaExiste = data.some((r) => r.numeroEmpleado === num);
    if (yaExiste) {
      alert("Ese número de empleado ya existe. Usa otro.");
      return;
    }

    const nuevo = {
      numeroEmpleado: num,
      nombreEmpleado: form.nombreEmpleado.trim(),
      areaTrabajo: form.areaTrabajo.trim(),
      anioInicio: parseInt(form.anioInicio, 10),
      email: form.email.trim(),
    };

    setData([...data, nuevo]);
    setModalInsertar(false);
  };

  const editar = () => {
    if (!validarForm()) return;

    const actualizado = {
      numeroEmpleado: parseInt(form.numeroEmpleado, 10),
      nombreEmpleado: form.nombreEmpleado.trim(),
      areaTrabajo: form.areaTrabajo.trim(),
      anioInicio: parseInt(form.anioInicio, 10),
      email: form.email.trim(),
    };

    const newData = data.map((r) =>
      r.numeroEmpleado === actualizado.numeroEmpleado ? actualizado : r
    );

    setData(newData);
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    if (
      window.confirm(
        "¿Seguro que deseas eliminar al empleado " + dato.numeroEmpleado + "?"
      )
    ) {
      setData(data.filter((r) => r.numeroEmpleado !== dato.numeroEmpleado));
      setModalActualizar(false);
    }
  };

  const dataFiltrada = data
    .filter((r) => {
      const q = busqueda.trim().toLowerCase();
      if (!q) return true;
      return (
        String(r.numeroEmpleado).includes(q) ||
        r.nombreEmpleado.toLowerCase().includes(q) ||
        r.areaTrabajo.toLowerCase().includes(q) ||
        String(r.anioInicio).includes(q) ||
        r.email.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => a.numeroEmpleado - b.numeroEmpleado);

  return (
    <Container className="py-4">
      {/* Header Card */}
      <div className="p-4 mb-4 bg-light border rounded-4 shadow-sm">
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div>
            <h2 className="m-0">Gestión de Empleados</h2>
            <div className="text-muted">
              Administra empleados (crear, editar, eliminar) con búsqueda rápida.
            </div>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <Badge color="secondary" pill className="px-3 py-2">
              Total: {data.length}
            </Badge>
            <Button color="success" className="px-3" onClick={abrirInsertar}>
              <span className="me-2">+</span>
              Nuevo empleado
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-3">
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por número, nombre, área, año o email..."
          />
          <div className="small text-muted mt-2">
            Mostrando {dataFiltrada.length} de {data.length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-4 shadow-sm p-3 bg-white">
        <Table responsive hover striped className="align-middle text-center m-0">
          <thead>
            <tr>
              <th style={{ width: 170 }}>Número</th>
              <th>Nombre</th>
              <th>Área</th>
              <th style={{ width: 150 }}>Año inicio</th>
              <th>Email</th>
              <th style={{ width: 220 }}>Acción</th>
            </tr>
          </thead>

          <tbody>
            {dataFiltrada.map((dato) => (
              <tr key={dato.numeroEmpleado}>
                <td>
                  <Badge color="dark" pill className="px-3 py-2">
                    {dato.numeroEmpleado}
                  </Badge>
                </td>
                <td className="text-start">{dato.nombreEmpleado}</td>
                <td>
                  <Badge color="info" pill className="px-3 py-2">
                    {dato.areaTrabajo}
                  </Badge>
                </td>
                <td>{dato.anioInicio}</td>
                <td className="text-start">{dato.email}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      color="primary"
                      outline
                      onClick={() => abrirActualizar(dato)}
                    >
                      Editar
                    </Button>
                    <Button
                      color="danger"
                      outline
                      onClick={() => eliminar(dato)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}

            {dataFiltrada.length === 0 && (
              <tr>
                <td colSpan={6} className="py-4 text-muted">
                  No hay resultados con esa búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Modal Insertar */}
      <Modal isOpen={modalInsertar} toggle={cerrarInsertar}>
        <ModalHeader toggle={cerrarInsertar}>
          Nuevo empleado
        </ModalHeader>

        <ModalBody>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Número de empleado</label>
                <input
                  className="form-control"
                  name="numeroEmpleado"
                  type="number"
                  value={form.numeroEmpleado}
                  onChange={handleChange}
                  placeholder="Ej. 1004"
                />
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Año de inicio</label>
                <input
                  className="form-control"
                  name="anioInicio"
                  type="number"
                  value={form.anioInicio}
                  onChange={handleChange}
                  placeholder="Ej. 2023"
                />
              </FormGroup>
            </div>

            <div className="col-12">
              <FormGroup>
                <label>Nombre de empleado</label>
                <input
                  className="form-control"
                  name="nombreEmpleado"
                  type="text"
                  value={form.nombreEmpleado}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                />
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Área de trabajo</label>
                <input
                  className="form-control"
                  name="areaTrabajo"
                  type="text"
                  value={form.areaTrabajo}
                  onChange={handleChange}
                  placeholder="Ej. TI, Finanzas..."
                />
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@dominio.com"
                />
              </FormGroup>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Guardar
          </Button>
          <Button color="secondary" onClick={cerrarInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal Actualizar */}
      <Modal isOpen={modalActualizar} toggle={cerrarActualizar}>
        <ModalHeader toggle={cerrarActualizar}>
          Editar empleado
        </ModalHeader>

        <ModalBody>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Número de empleado</label>
                <input
                  className="form-control"
                  readOnly
                  type="number"
                  value={form.numeroEmpleado}
                />
                <small className="text-muted">
                  (Se usa como ID y no se edita)
                </small>
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Año de inicio</label>
                <input
                  className="form-control"
                  name="anioInicio"
                  type="number"
                  value={form.anioInicio}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="col-12">
              <FormGroup>
                <label>Nombre de empleado</label>
                <input
                  className="form-control"
                  name="nombreEmpleado"
                  type="text"
                  value={form.nombreEmpleado}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Área de trabajo</label>
                <input
                  className="form-control"
                  name="areaTrabajo"
                  type="text"
                  value={form.areaTrabajo}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="col-12 col-md-6">
              <FormGroup>
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={editar}>
            Guardar cambios
          </Button>
          <Button color="secondary" onClick={cerrarActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};