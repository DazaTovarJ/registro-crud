import React from "react";
import PropTypes from "prop-types";

function TableRow({ user, deleteData }) {
  const { id, nombre, apellido, correo, curso, tipo } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{correo}</td>
      <td>{curso}</td>
      <td>{tipo}</td>
      <td>
        <button type="button" onClick={() => deleteData(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.object.isRequired,
  deleteData: PropTypes.func,
};

export default TableRow;
