import React, { ReactNode, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

type ItemProps = {
	children: ReactNode;
	width?: string;
};

export const CarouselItem = ({ children, width }: ItemProps) => {
	return (
		<div className='carousel-item' style={{ width }}>
			{children}
		</div>
	);
};

type Props = {
	children: ReactNode;
};

export const Carousel = ({ children }: Props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 3000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	return (
		<div
			{...handlers}
			className='carousel'
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{React.Children.map(children, (child: any) => React.cloneElement(child, { width: '100%' }))}
			</div>
			<div className='indicators'>
				<button
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					<Arrow style={{ rotate: '180deg' }} />
				</button>
				<button
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					<Arrow />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
