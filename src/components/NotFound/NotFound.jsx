import React from 'react'
import { Button } from '../../shared/components/UI/Buttons/Button/Button'
import s from './not-found.module.scss'

export const NotFound = () => {
	return (
		<div className={s.not_found}>
			<h1 className={s.title}>404</h1>
			<h2 className={s.sub_title}>Oops! Page not be found</h2>
			<p className={s.text}>
				Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily
				unavailable.
			</p>
			<Button type='submit' className={s.btn}>
				Back to home page
			</Button>
		</div>
	)
}
