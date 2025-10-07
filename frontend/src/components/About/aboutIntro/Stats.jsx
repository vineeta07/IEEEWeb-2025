import React, { useEffect, useState } from "react";

function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const statsRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={statsRef}
      className="text-white py-6 sm:py-10 mb-10 px-4 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-20"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          {visible ? <Counter target={40} duration={2000} /> : 0}+
        </h1>
        <p className="text-blue-400 mt-2 text-base sm:text-lg font-semibold">
          YEAR OF EXISTENCE
        </p>
      </div>

      <div className="text-center sm:border-l sm:border-gray-700 sm:pl-8 lg:pl-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          {visible ? <Counter target={2500} duration={2500} /> : 0}+
        </h1>
        <p className="text-blue-400 mt-2 text-base sm:text-lg font-semibold">
          IEEE DTU ALUMNI
        </p>
      </div>
    </div>
  );
}