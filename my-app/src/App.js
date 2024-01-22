import style from './App.module.css';
import React from 'react';
import { useState } from 'react';

/* Функция проверки строчек, setOperand1 и setOperand2 не могут
	начинаться с "0"  */

function validation(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '0') {
			count = count + 1;
		} else {
			break;
		}
	}
	return str.substring(count, str.length);
}

export const App = () => {
	const [operand, setOperand] = useState('');
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const operation = ['+', '-'];

	/* Кнопки с цифрами */

	function btnClickNumber(item) {
		setIsResult(false);
		if (operand) {
			setOperand2(validation(operand2 + item));
		} else {
			setOperand1(validation(operand1 + item));
		}
	}

	/* Кнопка оператора */

	function btnClickAction(item) {
		setIsResult(false);
		setOperand(item);
	}

	/* Кнопка равенства */

	function BtnEqual() {
		if (operand2) {
			setIsResult(true);
			if (operand === '+') {
				setOperand1(Number(operand1) + Number(operand2));
			} else if (operand === '-') {
				setOperand1(Number(operand1) - Number(operand2));
			}
			setOperand('');
			setOperand2('');
		}
	}
	/* Кнопки сброса */
	function reset() {
		setIsResult(false);
		setOperand('');
		setOperand1('');
		setOperand2('');
	}

	return (
		<section className={style.App}>
			<div className={style.calculatorConteiner}>
				<div className={isResult ? style.inputBlockIsResult : style.inputBlock}>
					<p className={style.transactionText}>
						{operand1 + operand + operand2}
					</p>
				</div>
				{/* Кнопки c числами */}
				<div className={style.containerBtn}>
					{/* Добавляем кнопки */}
					{NUMS.map((item) => (
						<button
							key={item}
							onClick={() => btnClickNumber(item)}
							className={style.btn}
						>
							{item}
						</button>
					))}
				</div>
				{/* Кнопки c операциями */}
				<div className={style.containerBtn}>
					{/* Добавляем кнопки */}
					{operation.map((item) => (
						<button
							onClick={() => btnClickAction(item)}
							key={item}
							className={style.btn}
						>
							{item}
						</button>
					))}
					<button onClick={reset} className={style.operationBtn}>
						C
					</button>
				</div>
				<button onClick={BtnEqual} className={style.btnEquals}>
					<p className={style.pBtnEquals}>=</p>
				</button>
			</div>
		</section>
	);
};
