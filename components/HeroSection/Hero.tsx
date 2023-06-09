import React from "react";
import style from "./hero.module.css";
import logoDesktop from "./logo-desktop.png";
import logoMobile from "./logo-mobile.png";
import fotoBg from "./foto-bg-hero.png";

const Hero = () => {
  return (
    <div data-testid="heroSection" className={style.wrapper}>
      <nav data-testid="nav" className={style.nav}>
        <div className={style.logoDesktop}>
          <img src={logoDesktop.src} alt="" />
        </div>
        <div className={style.logoMobile}>
          <img src={logoMobile.src} alt="" />
        </div>
        <ul className={style.links}>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>{" "}
          <li>
            <a href="">Psicoterapia</a>
          </li>{" "}
          <li>
            <a href="">Dúvidas</a>
          </li>{" "}
          <li>
            <a href="">Agendar Consulta</a>
          </li>
        </ul>
        <div className={style.menuHamburger}>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </nav>

      <div className={style.heading}>
        <div className={style.text}>
          <h1>Encontre seu equilibrio emocional</h1>
          <p>
            Enfrentar os desafios da vida pode ser esmagador. Estamos aqui para
            oferecer o apoio e a orientação que você precisa pra viver com
            bem-estar.
          </p>
          <button> agendar minha consulta </button>
        </div>
        <div className={style.image}>
          <img
            data-testid="bg-img"
            src={fotoBg.src}
            alt="Psicóloga Raquel Silveira sorrindo com um copo de café na mão e um caderno na outra"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
