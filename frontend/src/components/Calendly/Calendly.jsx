import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useInView } from "react-intersection-observer";
const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {},
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      id="calendly"
      className="w-full flex flex-wrap justify-center py-20 px-4"
    >
      <div className="w-full flex justify-center items-center">
        <h1
          ref={ref3}
          className={`${
            inView3
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-5"
          } hidden lg:block text-center font-plus-500 lg:text-4xl text-gray-200`}
        >
          Agendá una <span className="text-yellow-300">visita</span> o{" "}
          <span className="text-yellow-300">llamada</span> con nosotros
        </h1>
        <h1
          ref={ref1}
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } lg:hidden block text-center font-plus-500 text-3xl pb-8 text-gray-200`}
        >
          Agendá una <span className="text-yellow-300">visita</span> o<br />{" "}
          <span className="text-yellow-300">llamada</span> con nosotros
        </h1>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center">
        <div
          ref={ref2}
          className={`${
            inView2
              ? "h-[775px] lg:h-[658px] opacity-100 transition-opacity duration-1000"
              : "opacity-0"
          } w-full`}
          // Establece una altura mínima para el contenedor
        >
            <InlineWidget
              url="https://calendly.com/nicoalonso99-na/30min"
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: "00a2ff",
                textColor: "4d5055",
              }}
              styles={{
                height: "100%",
              }}
            />
        </div>
      </div>
    </div>
  );
};

export default Calendly;
