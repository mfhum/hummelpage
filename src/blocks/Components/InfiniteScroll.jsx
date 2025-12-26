import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import './InfiniteScroll.scss';

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
	width = "30rem",
	maxHeight = "100%",
	negativeMargin = "-0.5em",
	items = [],
	itemMinHeight = 150,
	isTilted = false,
	tiltDirection = "left",
	autoplay = false,
	autoplaySpeed = 0.5,
	autoplayDirection = "down",
	pauseOnHover = false,
}) {
	const wrapperRef = useRef(null);
	const containerRef = useRef(null);

	const getTiltTransform = () => {
		if (!isTilted) return "none";
		return tiltDirection === "left"
			? "rotateX(10deg) rotateZ(-10deg) skewX(10deg)"
			: "rotateX(10deg) rotateZ(10deg) skewX(-10deg)";
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		if (items.length === 0) return;

		const divItems = gsap.utils.toArray(container.children);
		if (!divItems.length) return;

		const firstItem = divItems[0];
		const itemStyle = getComputedStyle(firstItem);
		const itemHeight = firstItem.offsetHeight;
		const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
		const totalItemHeight = itemHeight + itemMarginTop;
		const totalHeight = (itemHeight * items.length) + (itemMarginTop * (items.length - 1));

		const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

		divItems.forEach((child, i) => {
			const y = i * totalItemHeight;
			gsap.set(child, { y });
		});

		const observer = Observer.create({
			target: container,
			type: "wheel,touch,pointer",
			preventDefault: true,
			onPress: ({ target }) => {
				target.style.cursor = "grabbing";
			},
			onRelease: ({ target }) => {
				target.style.cursor = "grab";
			},
			onChange: ({ deltaY, isDragging, event }) => {
				const d = event.type === "wheel" ? -deltaY : deltaY;
				const distance = isDragging ? d * 5 : d * 10;
				divItems.forEach((child) => {
					gsap.to(child, {
						duration: 1, // Increase duration for smoother scrolling
						ease: "power2.out", // Use a smoother easing function
						y: `+=${distance}`,
						modifiers: {
							y: gsap.utils.unitize(wrapFn)
						}
					});
				});
			}
		});

		let rafId;
		if (autoplay) {
			const directionFactor = autoplayDirection === "down" ? 1 : -1;
			const speedPerFrame = autoplaySpeed * directionFactor;

			const tick = () => {
				divItems.forEach((child) => {
					gsap.set(child, {
						y: `+=${speedPerFrame}`,
						modifiers: {
							y: gsap.utils.unitize(wrapFn)
						}
					});
				});
				rafId = requestAnimationFrame(tick);
			};

			rafId = requestAnimationFrame(tick);

			if (pauseOnHover) {
				const stopTicker = () => rafId && cancelAnimationFrame(rafId);
				const startTicker = () => (rafId = requestAnimationFrame(tick));

				container.addEventListener("mouseenter", stopTicker);
				container.addEventListener("mouseleave", startTicker);

				return () => {
					observer.kill();
					stopTicker();
					container.removeEventListener("mouseenter", stopTicker);
					container.removeEventListener("mouseleave", startTicker);
				};
			} else {
				return () => {
					observer.kill();
					rafId && cancelAnimationFrame(rafId);
				};
			}
		}

		return () => {
			observer.kill();
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [
		items,
		autoplay,
		autoplaySpeed,
		autoplayDirection,
		pauseOnHover,
		isTilted,
		tiltDirection,
		negativeMargin
	]);

	return (
		<>
			<style>
				{`
        .infiniteScrollWrapper {
          max-height: ${maxHeight};
        }

        .infiniteScrollContainer {
          width: ${width};
        }

        .infiniteScrollItem {
          height: ${itemMinHeight}px;
          margin-top: ${negativeMargin};
        }
        `}
			</style>

			<div className="infiniteScrollWrapper" ref={wrapperRef}>
				<div
					className="infiniteScrollContainer"
					ref={containerRef}
					style={{
						transform: getTiltTransform(),
					}}
				>
					{items.map((item, i) => (
						<div
							className='infiniteScrollItem'
							key={i}
						>
							{item.content}
						</div>
					))}
				</div>
			</div>
		</>
	);
}