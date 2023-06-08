import React, { useEffect } from "react";
import Script from "next/script";

const Calendly = () => {
  function isCalendlyEvent(e) {
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
        }
      });
    }
  }, []);

  return (
    <>
      <div
        className="calendly-inline-widget calendario"
        data-url="https://calendly.com/matheusdamiao/pre-briefing?hide_event_type_details=1&hide_gdpr_banner=1"
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
    </>
  );
};

export default Calendly;
