import React, { useRef, useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { CalculatorStore } from '../../stores/CalculatorStore';
import { default as DisplayStyles } from './Display.module.scss';
import { inject, observer } from 'mobx-react';
import { FaBatteryHalf, FaSignal } from "react-icons/fa";

interface DisplayProps {
	calculatorStore?: CalculatorStore;
}

const style = bemCssModules(DisplayStyles);

const Display: React.FC<DisplayProps> = ({ calculatorStore }) => {
	const displayRef = useRef<HTMLDivElement>(null);
	const [time, setTime] = useState(new Date());

	useEffect(
		() => {
			if (displayRef.current && calculatorStore) {
				calculatorStore.displayElement = displayRef.current;
			}
		},
		[displayRef, calculatorStore]
	);

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
	}, [new Date().getMinutes()]);

	return (
		<div className={style()}>
			<div>
				<time>{time
					.getHours()
					.toString()
					.padStart(2, "0")}:{
						time
							.getMinutes()
							.toString()
							.padStart(2, "0")
					}
				</time>
				<h4>
					<FaSignal />
					<span>5G</span>
					<FaBatteryHalf />
				</h4>
			</div>
			<p ref={displayRef}>0</p>
		</div >
	);
};

const DisplayConsumer = inject('calculatorStore')(observer(Display));

export { DisplayConsumer as Display };