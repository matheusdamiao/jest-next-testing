import React from "react";
import style from "./services.module.css";

const Services = () => {
  return (
    <div data-testid="services" id="services" className={style.wrapper}>
      <div className={style.heading}>
        <h1 data-testid="title">Serviços Oferecidos</h1>
        <span></span>
        <h3>
          Nossa variedade de serviços abrange uma ampla gama de necessidades de
          saúde mental, garantindo que você receba cuidados abrangentes em um só
          lugar
        </h3>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <h3 data-testid="caqrd">Terapia Individual</h3>
          <p>
            Nossas sessões de terapia individual oferecem um ambiente de apoio
            para você explorar seus pensamentos, emoções e comportamentos
          </p>
        </div>
        <div className={style.card}>
          <h3>Terapia de Casal</h3>
          <p>
            Se o seu relacionamento está passando por uma fase difícil, nossas
            sessões de terapia de casal podem ajudar vocês a superarem
            conflitos, melhorarem a comunicação e construírem uma conexão mais
            profunda.
          </p>
        </div>
        <div className={style.card}>
          <h3>Terapia Familiar</h3>
          <p>
            Compreendemos a importância dos laços familiares fortes. Nossas
            sessões de terapia familiar são projetadas para aprimorar a
            comunicação, resolver conflitos e promover a compreensão entre os
            membros da família.
          </p>
        </div>
        <div className={style.card}>
          <h3>Gerenciamento de Estresse</h3>
          <p>
            No mundo acelerado de hoje, o estresse tornou-se um companheiro
            indesejado. Nossas técnicas de gerenciamento do estresse capacitam
            você a lidar melhor com os estressores, desenvolver resiliência e
            melhorar seu bem-estar geral.
          </p>
        </div>
        <div className={style.card}>
          <h3>Recuperação de Traumas</h3>
          <p>
            Experiências traumáticas podem deixar cicatrizes emocionais
            duradouras. Oferecemos um espaço seguro e acolhedor para que
            sobreviventes de traumas possam se curar e retomar o controle de
            suas vidasntos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
