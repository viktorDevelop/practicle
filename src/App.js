import React from "react";
import Modal from "./components/Modal";
function App() {

  const [open,setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={()=> setOpen(true)} className="open-modal-btn"> Открыть окно</button>
      <Modal open={open} setOpen={setOpen}  >
          <h3> this is modal </h3>
          
      </Modal>

    </div>
    
  );
}

export default App;
