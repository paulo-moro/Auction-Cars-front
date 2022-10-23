import { useState } from "react";
import { Modalprops } from "../../interface";
import { Container } from "./style";

function Modal({handleShow, handleHidden, statusModal}:Modalprops) {
    

    const modal = statusModal? "modal containerModal" : "modal containerModal hidden";

    /*Controle do estado do Modal (Show/Hidden)*/
    // const [inOn, setInOn]   = useState(false);
    

    /*Funções do Modal*/
    // const showModal = () => {
    //     console.log("ok : )")
    //     setInOn(true);
    //     return true
    //   };
    
    //   const hideModal = () => {
    //     setInOn(false);
    //     return false
    //   };

    /*Chamando o componente Modal*/
    // <Modal handleHidden={hideModal} handleShow={showModal} statusModal={inOn}/>

    
    return (
        <Container>
            <section className={modal}>
            <div className="modal">
                    <div className="modalHeader">
                        <h1>Header Title</h1>
                        <button className="removedModal" onClick={() => handleHidden()}>x</button>
                    </div>
                    <div className="modalBody">
                        <p>Estrutute o corpo do seu modal</p>
                    </div>
                </div>
            </section>
            <button onClick={() => handleShow()}>button</button>
        </Container>
    )
}

export default Modal
