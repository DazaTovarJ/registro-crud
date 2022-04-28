import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const defaultData = {
  id: null,
  nombre: "",
  apellido: "",
  correo: "",
  curso: "",
  tipo: "",
};

function Form({ createData, updateData, setMessage }) {
  const [formData, setFormData] = useState(defaultData);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.nombre) {
      setMessage({ type: "error", msg: "El nombre es requerido" });
      return;
    }

    if (!formData.apellido) {
      setMessage({ type: "error", msg: "El apellido es requerido" });
      return;
    }

    if (!formData.correo) {
      setMessage({ type: "error", msg: "El correo es requerido" });
      return;
    }

    if (!formData.curso) {
      setMessage({ type: "error", msg: "El curso es requerido" });
      return;
    }

    if (!formData.tipo) {
      setMessage({ type: "error", msg: "El tipo de usuario es requerido" });
      return;
    }

    createData(formData);

    setTimeout(() => {
      handleReset();
    }, 5000);
  };

  const handleReset = () => {
    setFormData(defaultData);
    setMessage(null);
  };

  return (
    <div>
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Agregar un nuevo usuario</legend>
          <Input
            name="nombre"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            handleChange={handleChange}
          />
          <Input
            name="apellido"
            label="Apellido"
            placeholder="Ingresa tu apellido"
            value={formData.apellido}
            handleChange={handleChange}
          />
          <Input
            type="email"
            name="correo"
            label="Correo"
            placeholder="Ingresa tu correo"
            value={formData.correo}
            handleChange={handleChange}
          />
          <Input
            name="curso"
            label="Curso"
            placeholder="Ingresa tu curso"
            value={formData.curso}
            handleChange={handleChange}
          />
          <Input
            type="select"
            name="tipo"
            value={formData.tipo}
            label="Tipo de usuario"
            handleChange={handleChange}
            data={["Profesor", "Estudiante"]}
          />
          <div>
            <button type="submit">Registrar</button>
            <button type="reset" onClick={handleReset}>
              Limpiar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

Form.propTypes = {
  createData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export default Form;
