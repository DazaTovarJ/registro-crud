import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState(null);

  const createData = data => {
    data.id = Date.now();

    setUsers([...users, data]);
  };
  const updateData = data => {};

  return (
    <div>
      <h1>Aplicación de Registro de Usuarios</h1>
      <Form
        createData={createData}
        updateData={updateData}
        dataToUpdate={dataToUpdate}
        setData={setDataToUpdate}
      />
      <Table data={users} />
    </div>
  );
}

export default App;
