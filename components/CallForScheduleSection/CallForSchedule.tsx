import React from "react";
import style from "./callforschedule.module.css";

const CallForSchedule = () => {
  return (
    <div data-testid="callForSchedule" className={style.wrapper}>
      <p>
        {" "}
        Uma jornada transformadora rumo ao bem-estar emocional começa com
        terapia
      </p>
      <button className={style.button}>agendar minha consulta</button>
    </div>
  );
};

export default CallForSchedule;
