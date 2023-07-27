import React, { useState } from 'react'
import { ReactComponent as MagnifierSVG } from '../../../../../assets/svg/magnifier.svg'
import cn from 'classnames'
import s from './button.module.scss'

export const Button = ({
	type = 'submit' | 'subscribe' | 'search' | 'text' | 'form' | 'post',
	htmlType = 'button' | 'submit',
	onClick,
	disabled,
	className,
	children
}) => {
	const [focus, setFocus] = useState(false)

	const onFocus = () => {
		setFocus(true)
	}

	const onBlur = () => {
		setFocus(false)
	}

	return (
		<button
			type={htmlType}
			className={cn(s.btn, type && s[type], focus && s.focus, className)}
			onClick={onClick}
			onFocus={onFocus}
			onBlur={onBlur}
			disabled={disabled}
		>
			{children}
			{type === 'search' && <MagnifierSVG />}
		</button>
	)
}
