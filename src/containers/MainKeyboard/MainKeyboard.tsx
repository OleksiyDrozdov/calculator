import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { inject, observer } from 'mobx-react';
import { Button } from '../../components/Button/Button';
import { CalculatorStore } from '../../stores/CalculatorStore';
import { default as MainKeyboardStyles } from './MainKeyboard.module.scss';

interface MainKeyboardProps {
	calculatorStore?: CalculatorStore;
}

const style = bemCssModules(MainKeyboardStyles);

const MainKeyboard: React.FC<MainKeyboardProps> = ({ calculatorStore }) => {
	if (!calculatorStore) {
		return null;
	}

	return (
		<div className={style()}>
			<Button content="AC" isTop onClick={calculatorStore.clear} />
			<Button content="±" isTop onClick={calculatorStore.invertNumber} />
			<Button content="%" isTop onClick={calculatorStore.percent} />
			<Button content="÷" isRight onClick={calculatorStore.divide} />
			<Button content="mc" onClick={calculatorStore.memoryClear} />
			<Button content="mr" onClick={calculatorStore.memoryRead} />
			<Button content="m+" onClick={calculatorStore.memoryAdd} />
			<Button content="m-" isRight onClick={calculatorStore.memoryMinus} />
			<Button content="7" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="8" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="9" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="×" isRight onClick={calculatorStore.multiplication} />
			<Button content="4" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="5" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="6" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="-" isRight onClick={calculatorStore.substraction} />
			<Button content="1" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="2" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="3" onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="+" isRight onClick={calculatorStore.addition} />
			<Button content="0" isZero onClick={event => calculatorStore.concatenateNumber(event)} />
			<Button content="," onClick={calculatorStore.addComma} />
			<Button content="=" isRight onClick={calculatorStore.equal} />
		</div>
	);
};

const MainKeyboardConsumer = inject('calculatorStore')(observer(MainKeyboard));

export { MainKeyboardConsumer as MainKeyboard };