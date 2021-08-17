import React, { useEffect, useRef, useState } from "react";

const ObserverAnimation = ({ children, animation, customClasses }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setVisible(true);
        });
      },
      { threshold: 0.5 }
    );
    const ref = domRef.current;
    observer.observe(ref);

    return () => observer.unobserve(ref);
  }, []);

  return (
    <div
      className={`${animation} ${isVisible ? "is-visible" : ""} ${
        customClasses ? customClasses : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default ObserverAnimation;
