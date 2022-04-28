import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  const createData = data => {};

  return (
    <div>
      <h1>Aplicación de Registro de Usuarios</h1>
      <Form />
      <Table data={data} />
    </div>
  );
}

export default App;
