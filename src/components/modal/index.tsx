import { useState } from "react";

function Modal() {

    const [inOn, setInOn]   = useState(false);
    const [modal, setModal] = useState("containerModal hidden");


    const showModal = () => {
        if( inOn === false ) {
            setInOn(true);
            return setModal("containerModal")
        } else {
            setInOn(false);
            return setModal("containerModal hidden")
        }
    }

    const removeModal = () => {
        setInOn(false);
        return setModal("containerModal hidden")
    }


    
    return (
        <section>
            <section className={modal}>
                <div className="modal">
                    <div className="modalHeader">
                        <h1>Header Title</h1>
                        <button className="removedModal" onClick={() => removeModal()}>x</button>
                    </div>
                    <div className="modalBody">
                        <p>Estrutute o corpo do seu modal</p>
                    </div>
                </div>
            </section>
            <button onClick={() => showModal()}>+</button>
        </section>
    )
}

export default Modal
