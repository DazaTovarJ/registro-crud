import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";

function Table({ data, deleteData }) {
  let renderData = null;
  if (data.length === 0) {
    renderData = <p>No hay datos para mostrar. Crea un registro</p>;
  } else {
    renderData = (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Curso</th>
            <th>Tipo de usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <TableRow key={user.id} user={user} deleteData={deleteData} />
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <h2>Información de usuario</h2>
      {renderData}
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteData: PropTypes.func,
};

export default Table;
