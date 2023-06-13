import React from "react";
import style from "./reasons.module.css";

const Reasons = () => {
  return (
    <div data-testid="reasons" className={style.wrapper}>
      <div className={style.heading}>
        <h1 data-testid="title">Por que fazer psicoterapia?</h1>
        <span></span>
        <h3>
          Criamos um espaço seguro e livre de julgamentos onde você pode
          expressar abertamente seus pensamentos e sentimentos.
        </h3>
      </div>

      <div className={style.reasons}>
        <div className={style.card}>
          <h3>Redução dos Sintomas</h3>
          <p>
            Se você está sofrendo de ansiedade, depressão, estresse, traumas ou
            outras questões de saúde mental, a psicoterapia pode ajudar a
            reduzir os sintomas associados a esses problemas
          </p>
        </div>

        <div className={style.card}>
          <h3>Melhorias nos Relacionamentos</h3>
          <p>
            Você aprenderá habilidades de comunicação eficazes, compreenderá
            melhor as dinâmicas relacionais e desenvolverá maior empatia e
            compreensão.
          </p>
        </div>

        <div className={style.card}>
          <h3>Promoção do Bem-Estar Geral</h3>
          <p>
            Você pode desenvolver estratégias para melhorar sua qualidade de
            vida, promover um equilíbrio saudável entre trabalho e vida pessoal,
            cultivar relacionamentos positivos e buscar a realização pessoal.
          </p>
        </div>

        <div className={style.card}>
          <h3>Aumento da Resiliência</h3>
          <p>
            Você aprenderá a lidar melhor com situações desafiadoras, a superar
            obstáculos e a enfrentar mudanças com mais confiança.
          </p>
        </div>

        <div className={style.card}>
          <h3>Autoconhecimento</h3>
          <p>
            A psicoterapia oferece um espaço seguro para explorar seus
            pensamentos, emoções e comportamentos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
