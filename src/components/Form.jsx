import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Message from "./Message";

function Form({ createData, updateData }) {
  const defaultData = {
    id: 0,
    nombre: "",
    apellido: "",
    correo: "",
    curso: "",
    tipo: "",
  };

  const [formData, setFormData] = useState(defaultData);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Agregar un nuevo usuario</legend>
          <input type="hidden" name="id" value={defaultData.id} />
          <Input
            name="nombre"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            handleChange={handleChange}
          />
          <Input
            name="apellido"
            label="Apellido"
            placeholder="Ingresa tu apellido"
            handleChange={handleChange}
          />
          <Input
            type="email"
            name="correo"
            label="Correo"
            placeholder="Ingresa tu correo"
            handleChange={handleChange}
          />
          <Input
            name="curso"
            label="Curso"
            placeholder="Ingresa tu curso"
            handleChange={handleChange}
          />
          <Input
            type="select"
            name="tipo"
            label="Tipo de usuario"
            handleChange={handleChange}
            data={["Profesor", "Estudiante"]}
          />
          <div>
            <button type="submit">Registrar</button>
          </div>
        </fieldset>
        {submitted && <Message />}
      </form>
    </div>
  );
}

Form.propTypes = {
  createData: PropTypes.func,
  updateData: PropTypes.func,
};

export default Form;
