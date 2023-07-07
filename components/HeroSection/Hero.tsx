import React, { useState } from "react";
import style from "./hero.module.css";
import logoDesktop from "./logo-desktop.png";
import logoMobile from "./logo-mobile.svg";
import fotoBg from "./foto-bg-hero.png";
import CTA from "../CTA/CTA";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-testid="heroSection" id="faq" className={style.wrapper}>
      <nav data-testid="nav" className={style.nav}>
        <div className={style.logoDesktop}>
          <img src={logoDesktop.src} alt="" />
        </div>
        <div className={style.logoMobile}>
          <img src={logoMobile.src} alt="" />
        </div>
        <ul className={style.links}>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>{" "}
          <li>
            <a href="#psicoterapia">Psicoterapia</a>
          </li>{" "}
          <li>
            <a href="#duvidas">Dúvidas</a>
          </li>{" "}
          <li>
            <a href="/agenda">Agendar Consulta</a>
          </li>
        </ul>
        <div className={style.menuHamburger} onClick={(e) => toggleMenu(e)}>
          <span
            className={`${isOpen ? style.lineOpen : style.lineClosed}`}
          ></span>
          <span
            className={`${isOpen ? style.lineOpen : style.lineClosed}`}
          ></span>
          <span
            className={`${isOpen ? style.lineOpen : style.lineClosed}`}
          ></span>
        </div>
      </nav>
      {isOpen ? (
        <div className={style.menuMobile}>
          {" "}
          <ul>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#about">Sobre mim</a>
            </li>{" "}
            <li>
              <a href="#psicoterapia">Psicoterapia</a>
            </li>{" "}
            <li>
              <a href="#faq">Dúvidas</a>
            </li>{" "}
            <li>
              <a href="/agenda">Agendar Consulta</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className={style.menuMobileClosed}></div>
      )}

      <div className={style.heading}>
        <div className={style.text}>
          <h1>Encontre seu equilibrio emocional</h1>
          <p>
            Enfrentar os desafios da vida pode ser esmagador. Estamos aqui para
            oferecer o apoio e a orientação que você precisa pra viver com
            bem-estar.
          </p>
          <CTA />
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
