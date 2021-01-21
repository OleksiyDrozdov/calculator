import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

type TCalculatorFunction = () => void;
type TConcatenateFunction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface ButtonProps {
	content: string;
	isRight?: boolean;
	isZero?: boolean;
	isTop?: boolean;
	onClick: TCalculatorFunction | TConcatenateFunction;
}

const style = bemCssModules(ButtonStyles);

export const Button: React.FC<ButtonProps> = props => {
	const modifiers = {
		'is-right': props.isRight,
		'is-zero': props.isZero,
		'is-top': props.isTop
	};

	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		props.onClick(event);
	}

	return (
		<button
			className={style(modifiers)}
			onClick={onClickHandler}
		>
			{props.content}
		</button>
	);
};
