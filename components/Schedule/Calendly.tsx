import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import style from "./calendly.module.css";
import Link from "next/link";
import confirmed from "./confirmed-svgrepo-com.svg";

const Calendly = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  function isCalendlyEvent(e: any) {
    return (
      e.origin === "https://calendly.com" &&
      e.data.event &&
      e.data.event.indexOf("calendly.") === 0
    );
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("message", function (e) {
        if (isCalendlyEvent(e)) {
          /* Example to get the name of the event */
          console.log("Event name:", e.data.event);

          /* Example to get the payload of the event */
          console.log("Event details:", e.data.payload);

          if (e.data.event == "calendly.event_scheduled") {
            console.log("confirmado!");
            // return router.push("/confirmed");
            setIsConfirmed(true);
          }
        }
      });
    }
  }, []);

  return (
    <>
      <div
        className="calendly-inline-widget calendario"
        data-testid="calendar"
        data-url="https://calendly.com/raquelsilveira/primeira-sessao?&hide_gdpr_banner=1"
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      {isConfirmed && (
        <div className={style.confirmed}>
          <img src={confirmed.src} alt="" />
          <h1>Sua sessão foi agendada com sucesso!</h1>{" "}
          <h3> Um e-mail foi enviado com os detalhes do seu agendamento</h3>
          <small>
            {" "}
            Verifique sua pasta de spam se o e-mail não chegar em alguns minutos
          </small>
          <Link className={style.button} href="/home">
            {" "}
            Voltar para o site
          </Link>
        </div>
      )}
    </>
  );
};

export default Calendly;
