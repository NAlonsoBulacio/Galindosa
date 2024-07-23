import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [counts, setCounts] = useState([10000, 1000, 100, 100, 1000, 100]);

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const inViews = [inView1, inView2, inView3, inView4, inView5, inView6];
    const maxCounts = [10320, 2339, 114, 169, 3602, 318];
    const incrementCounts = [5, 10, 1, 1, 10, 1];
    const intervals = [];

    inViews.forEach((inView, index) => {
      if (inView) {
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < maxCounts[index]) {
              newCounts[index] = Math.min(newCounts[index] + incrementCounts[index], maxCounts[index]);
            } else {
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 10);
      }
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

  const items = [
    { label: "Lotes", count: counts[0], ref: ref1 },
    { label: "Cocheras", count: counts[1], ref: ref2 },
    { label: "Casas", count: counts[2], ref: ref3 },
    { label: "Oficinas", count: counts[3], ref: ref4 },
    { label: "Departamentos", count: counts[4], ref: ref5 },
    { label: "Locales comerciales", count: counts[5], ref: ref6 },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
        Galindo SA en números
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Con el compromiso de siempre entregamos:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center notranslate">
        {items.map((item, index) => (
          <div key={index} ref={item.ref} className=" p-6 rounded-lg ">
            <p className="text-5xl lg:text-8xl font-bold text-gray-800">
              {item.count.toLocaleString()}
            </p>
            <p className="mt-2 text-2xl text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
      <hr className="w-3/5 border-[1px] border-yellow-500 my-3" />
      <p className="poppins-regular text-gray-800 text-balance w-full text-center">Desde hace más de 40 años buscamos desafíos que nos permitan aprender y ser mejores. Hoy seguimos trabajando con la misma pasión con la que nuestro fundador decidió hacer sus sueños realidad.</p>
    </div>
  );
};

export default Counter;
