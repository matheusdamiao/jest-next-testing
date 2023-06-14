import React from "react";
import style from "./cta.module.css";
import Link from "next/link";

const CTA = () => {
  return (
    <a href="/agenda" className={style.button} data-testid="CTA">
      {" "}
      agendar minha consulta
    </a>
  );
};

export default CTA;
