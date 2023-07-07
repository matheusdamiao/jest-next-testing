import React, { useState } from "react";
import style from "./faq.module.css";

const FAQ = () => {
  const [isSelected, setIsSelected] = useState("");

  const data = [
    {
      title: "Terapia online funciona?",
      id: "0",
      answer:
        "Sim, a psicoterapia online tem sido amplamente estudada e comprovada como uma abordagem eficaz para fornecer suporte psicológico e tratamento para uma ampla variedade de questões de saúde mental. Pesquisas científicas têm demonstrado consistentemente que a psicoterapia online pode ser tão eficaz quanto a terapia presencial em muitos casos.",
    },
    {
      title: "Como funciona o agendamento das consultas?",
      id: "1",
      answer:
        "Basta clicar no botão 'agendar sua consulta', escolher o melhor horário e data para você, e clicar em agendar. Você irá receber um e-mail de confirmação e com o link da sessão agendada! ",
    },
    {
      title: "Qual a frequência e duração das sessões?",
      id: "2",
      answer:
        "A frequência depende de cada caso, mas em geral os pacientes fazem uma sessão por semana, com duração de 1h",
    },
    {
      title: "Qual a sua abordagem de psicoterapia?",
      id: "3",
      answer:
        "Trabalho com uma abordagem mista, que envolve aspectos da psicologia cognitivo-comportamental e da esquizoanálise",
    },
  ];

  const openAnswer = (fa: any) => {
    setIsSelected(fa.answer);
    if (isSelected !== "") {
      setIsSelected("");
    }
  };

  return (
    <div className={style.wrapper} data-testid="faq" id="duvidas">
      <div className={style.heading}>
        <h1 data-testid="title">Perguntas frequentes</h1>
        <span></span>
      </div>

      <div>
        {data.map((fa) => {
          return (
            <div
              data-testid="question"
              className={style.question}
              key={fa.id}
              onClick={() => openAnswer(fa)}
            >
              <div className={style.block}>
                <h1>{fa.title}</h1>
                <div>
                  {isSelected === fa.answer ? (
                    <span id={style.opened}></span>
                  ) : (
                    <span id={style.closed}></span>
                  )}
                </div>
              </div>
              {isSelected === fa.answer && (
                <p data-testid="answer"> {fa.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
