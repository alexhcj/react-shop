import React from 'react'
import PreloaderSVG  from '../../../../assets/svg/preloader.svg'
import s from './preloader.module.css'

export const Preloader = ({ width = 30, height = 30, fill = '#40a944' }) => {
	return (
		<div className={s.preloader}>
			<img src={PreloaderSVG} alt=""/>
		</div>
	)
}