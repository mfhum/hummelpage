/*
	jsrepo 1.28.2
	Installed from https://reactbits.dev/default/
	1-23-2025
*/

import { forwardRef, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./VariableProximity.scss";

function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0, dirty: false });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top, dirty: true };
      } else {
        positionRef.current = { x, y, dirty: true };
      }
    };

    const handleMouseMove = (ev) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "uniqueText",
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr
          .split(",")
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          }),
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case "exponential":
        return norm ** 2;
      case "gaussian":
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default:
        return norm;
    }
  };

  const isVisibleRef = useRef(false);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef]);

  // Measuring every letter forces layout, so only do it when the pointer moved while the text is on screen
  useAnimationFrame(() => {
    if (!containerRef?.current || !isVisibleRef.current || !mousePositionRef.current.dirty) return;
    mousePositionRef.current.dirty = false;
    const containerRect = containerRef.current.getBoundingClientRect();

    // Read all rects before writing styles to avoid layout thrashing
    const rects = letterRefs.current.map((letterRef) => letterRef?.getBoundingClientRect());

    letterRefs.current.forEach((letterRef, index) => {
      const rect = rects[index];
      if (!letterRef || !rect) return;

      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY,
      );

      if (distance >= radius) {
        if (interpolatedSettingsRef.current[index] !== fromFontVariationSettings) {
          interpolatedSettingsRef.current[index] = fromFontVariationSettings;
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
        }
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue =
            fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const words = label.split(" ");
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`}
      onClick={onClick}
      style={{ display: "inline", ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{
                  display: "inline-block",
                  fontVariationSettings:
                    interpolatedSettingsRef.current[currentLetterIndex],
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
      <span className="srOnly">{label}</span>
    </span>
  );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
