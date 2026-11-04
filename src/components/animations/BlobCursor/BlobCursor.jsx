/*
  jsrepo 1.28.2
  Installed from https://reactbits.dev/default/
  1-23-2025
*/

import { useTrail, animated } from "@react-spring/web";
import { useRef, useEffect, useCallback, useState } from "react";

import "./BlobCursor.scss";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function BlobCursor({
  blobType = "circle",
  fillColor = "rgba(255, 255, 255, 0.7)", }) {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const ref = useRef();

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  // Blobs stay hidden until the pointer is inside, otherwise they sit parked in the top-left corner
  const [isActive, setIsActive] = useState(false);

  const handleMove = (e) => {
    const { left, top } = updatePosition();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    const target = [x - left, y - top];
    if (!isActive) {
      api.set({ xy: target });
      setIsActive(true);
    }
    api.start({ xy: target });
  };

  const handleLeave = () => setIsActive(false);

  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updatePosition]);

  return (
    <div className="bubbleContainer">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>
      <div
        ref={ref}
        className={`blobCursorContainer${isActive ? ' isActive' : ''}`}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
            }}
          />
        ))}
      </div>
    </div>
  );
}
