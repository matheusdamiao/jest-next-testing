import React from "react";
import style from "./contact.module.css";
import CTA from "../CTA/CTA";

const Contact = () => {
  return (
    <div data-testid="contact" className={style.wrapper}>
      <div className={style.heading}>
        <h1>Entre em contato</h1>
        <span></span>
        <h3>
          Agende sua consulta agora e dê o primeiro passo em direção a uma
          jornada de autodescoberta e crescimento emocional.
        </h3>
      </div>
      <CTA />
    </div>
  );
};

export default Contact;
