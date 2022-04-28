import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(null);

  const createData = data => {
    data.id = Date.now();

    setUsers([...users, data]);
    setMessage({
      type: "success",
      msg: "Datos insertados satisfactoriamente",
    });
  };
  const deleteData = id => {
    let sureToDelete = window.confirm(
      `¿Está seguro de que desea eliminar el usuario con id ${id}?`,
    );

    if (sureToDelete) {
      let updatedData = users.filter(user => user.id !== id);

      setUsers(updatedData);
      setMessage({
        type: "success",
        msg: "Datos eliminados satisfactoriamente",
      });
    } else {
      setMessage({
        type: "error",
        msg: "No se pudo eliminar el dato",
      });
    }

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div>
      <h1>Aplicación de Registro de Usuarios</h1>
      {message && <Message {...message} />}
      <Form
        createData={createData}
        updateData={deleteData}
        setMessage={setMessage}
      />
      <Table data={users} deleteData={deleteData} />
    </div>
  );
}

export default App;
