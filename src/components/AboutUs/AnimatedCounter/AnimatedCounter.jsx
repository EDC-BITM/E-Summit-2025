import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import React, { useRef } from "react";

const AnimatedCounter = ({ from, to, animatedOption, className, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.textContent = `${from}${children}`;
      return;
    }

    element.textContent = `${from}${children}`;
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animatedOption,
      onUpdate(value) {
        element.textContent = `${value.toFixed(0)}${children}`;
      },
    });
    return () => controls.stop();
  }, [ref, inView, from, to]);

  return (
    <span ref={ref} className={className}>
      {from}
      {children}
    </span>
  );
};

export default AnimatedCounter;
