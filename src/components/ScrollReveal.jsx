import { motion as Motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  zoom: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};

const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.8 }) => {
  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}>
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
