import { useState } from "react";
import "./app.css";
import Form from "./components/form";
const App = () => {


  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="btn-open"><button className="btn-add" onClick={() => {
        setOpenModal(true)
      }}>Add</button></div>
      {openModal && <Form closeModal={setOpenModal} />}
    </>
  );
};

export default App;
