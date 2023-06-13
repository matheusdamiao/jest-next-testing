import React from "react";
import style from "./quotation.module.css";

const Quotation = () => {
  return (
    <q data-testid="quotation" className={style.wrapper}>
      A psicoterapia é uma jornada de reconciliação com a própria história
    </q>
  );
};

export default Quotation;
