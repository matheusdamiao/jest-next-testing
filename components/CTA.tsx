import React, { useState } from "react";

const CTA = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <div data-testid="modal">Agendamento</div>}
      <button onClick={() => setModal(!modal)}>Agende sua consulta</button>
    </>
  );
};

export default CTA;
