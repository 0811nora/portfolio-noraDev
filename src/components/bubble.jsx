"use client";
import * as React from "react";
import { motion as Motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function WanderingOrb({
  colorVar,
  size,
  initialTop,
  initialLeft,
  initialRight,
  initialBottom,
  range = 200,
  minDuration = 18,
  maxDuration = 28,
  opacity = 0.3,
}) {
  const ref = React.useRef(null);
  const currentX = React.useRef(0);
  const currentY = React.useRef(0);
  const timeoutRef = React.useRef(null);
  const rafRef = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    let startTime = null;
    let fromX = 0,
      fromY = 0;
    let toX = 0,
      toY = 0;
    let duration = 0;

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function pickNextTarget() {
      fromX = currentX.current;
      fromY = currentY.current;
      toX = (Math.random() - 0.5) * 2 * range;
      toY = (Math.random() - 0.5) * 2 * range;
      duration = randomBetween(minDuration, maxDuration) * 1000;
      startTime = null;
      rafRef.current = requestAnimationFrame(step);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);

      currentX.current = lerp(fromX, toX, eased);
      currentY.current = lerp(fromY, toY, eased);

      el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        timeoutRef.current = setTimeout(pickNextTarget, randomBetween(300, 800));
      }
    }

    timeoutRef.current = setTimeout(pickNextTarget, randomBetween(0, 2000));

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [range, minDuration, maxDuration]);

  const posStyle = {
    background: `radial-gradient(circle at center, rgba(var(${colorVar}),${opacity}) 0%, rgba(var(${colorVar}),0) 50%)`,
    willChange: "transform",
    ...(initialTop !== undefined && { top: initialTop }),
    ...(initialLeft !== undefined && { left: initialLeft }),
    ...(initialRight !== undefined && { right: initialRight }),
    ...(initialBottom !== undefined && { bottom: initialBottom }),
  };

  return <div ref={ref} className={`absolute rounded-full mix-blend-soft-light ${size}`} style={posStyle} />;
}

function BubbleBackground({
  ref,
  className,
  children,
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors = {
    first: "18,113,255",
    second: "221,74,255",
    third: "0,220,255",
    fourth: "200,50,50",
    fifth: "180,180,50",
    sixth: "140,100,255",
  },
  ...props
}) {
  const containerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => containerRef.current);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  const rectRef = React.useRef(null);
  const rafIdRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        rectRef.current = containerRef.current.getBoundingClientRect();
      }
    };
    updateRect();
    const el = containerRef.current;
    const ro = new ResizeObserver(updateRect);
    if (el) ro.observe(el);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  React.useEffect(() => {
    if (!interactive) return;
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = rectRef.current;
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      });
    };
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [interactive, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cn("relative size-full overflow-hidden bg-bg-main", className)}
      {...props}>
      <style>{`
        :root {
          --first-color: ${colors.first};
          --second-color: ${colors.second};
          --third-color: ${colors.third};
          --fourth-color: ${colors.fourth};
          --fifth-color: ${colors.fifth};
          --sixth-color: ${colors.sixth};
        }
      `}</style>

      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 h-0 w-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: "url(#goo) blur(40px)" }}>
        {/* 大球 — 左上 */}
        <WanderingOrb
          colorVar="--first-color"
          size="size-[60%]"
          initialTop="-10%"
          initialLeft="-10%"
          range={200}
          minDuration={5}
          maxDuration={6}
        />

        {/* 小球 — 右上 */}
        {/* <WanderingOrb
          colorVar="--second-color"
          size="size-[60%]"
          initialTop="8%"
          initialRight="8%"
          range={-150}
          minDuration={5}
          maxDuration={10}
        /> */}

        {/* 中球 — 左下 */}
        {/* <WanderingOrb
          colorVar="--third-color"
          size="size-[60%]"
          initialBottom="-5%"
          initialLeft="5%"
          range={130}
          minDuration={7}
          maxDuration={10}
        /> */}

        {/* 大球 — 右下 */}
        <WanderingOrb
          colorVar="--fourth-color"
          size="size-[58%]"
          initialBottom="10%"
          initialRight="-10%"
          range={250}
          minDuration={6}
          maxDuration={12}
        />

        {/* 小球 — 中央偏右 */}
        <WanderingOrb
          colorVar="--fifth-color"
          size="size-[60%]"
          initialTop="50%"
          initialLeft="50%"
          range={160}
          minDuration={4}
          maxDuration={8}
        />

        {/* 中球 — 中央偏左 */}
        <WanderingOrb
          colorVar="--sixth-color"
          size="size-[40%]"
          initialTop="20%"
          initialLeft="20%"
          range={300}
          minDuration={6}
          maxDuration={12}
        />

        {/* 互動球 — 滑鼠跟隨 */}
        {interactive && (
          <Motion.div
            className="absolute size-[28%] rounded-full opacity-70 mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at center, rgba(var(--first-color),0.3) 0%, rgba(var(--first-color),0) 50%)`,
              top: "40%",
              left: "40%",
              x: springX,
              y: springY,
              willChange: "transform",
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
}

export { BubbleBackground };
