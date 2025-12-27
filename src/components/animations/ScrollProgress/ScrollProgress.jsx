import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [percent, setPercent] = useState(0);

    // Velocity tracking for the "stretch" effect
    const scrollVelocity = useVelocity(scrollYProgress);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate stretch based on velocity
    // We take the absolute value of velocity and map it to a scaleY
    const stretch = useTransform(scrollVelocity, [-1, 0, 1], [3, 1, 3]);
    const yBase = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            setPercent(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="scrollProgressWrapper" aria-hidden="true">
            <div className="scrollThread" />

            <motion.div
                className="beadContainer"
                style={{ top: yBase }}
            >
                <motion.div
                    className="scrollBead"
                    style={{ scaleY: stretch }}
                />

                <div className="scrollValue">
                    {percent}%
                </div>
            </motion.div>
        </div>
    );
};

export default ScrollProgress;
