import React from "react";
import style from "./about.module.css";
import foto from "./foto-about.png";

const About = () => {
  return (
    <div data-testid="about" className={style.wrapper}>
      <div className={style.heading}>
        <h1 data-testid="title"> Quem é a Raquel Silveira? </h1>
        <span></span>
      </div>
      <p>
        Olá! Sou a Raquel Silveira, uma psicóloga com 10 anos de experiência
        ajudando pessoas a encontrarem o equilíbrio emocional. Minha abordagem
        principal é a cognitivo-comportamental, acreditando que nossos
        pensamentos e comportamentos desempenham um papel fundamental em nossa
        saúde mental. Busco criar um ambiente seguro e acolhedor, onde juntos
        podemos explorar seus desafios e desenvolver estratégias eficazes para
        alcançar o bem-estar emocional.
      </p>
      <img src={foto.src} alt="foto da psicóloga Raquel Silveira" />
    </div>
  );
};

export default About;
