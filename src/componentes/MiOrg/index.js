import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable, funcionActualiza] = useState(valorInicial)
  console.log(props);
  // const [monstrar, actualizarMostrar] = useState(true);
  // const manejarClick = () => {
  //   console.log("Monstar/Ocultar elemento", !monstrar);
  //   actualizarMostrar(!monstrar);
  // };

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
