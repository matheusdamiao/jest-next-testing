import Calendly from "@/components/Schedule/Calendly";
import React from "react";

const Agenda = () => {
  return (
    <div>
      <h3 data-testid="title">Escolha o melhor dia e horário para você</h3>
      <Calendly />
    </div>
  );
};

export default Agenda;
