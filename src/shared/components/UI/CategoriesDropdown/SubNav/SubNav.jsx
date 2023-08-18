import React from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import s from './sub-nav.module.scss'

export const SubNav = ({ subNavToggleCategory, setPopupToggle, subcategories: { items, category } }) => {
	const navigate = useNavigate()

	const onClickHandler = (e) => {
		e.stopPropagation()
		const subCategory = e.target.id
		const name = e.target.dataset.name

		const query = {
			subCategory,
			limit: '6',
			offset: '0',
			sort: 'popularity',
			order: 'desc',
		}

		navigate(`/shop?${new URLSearchParams(query)}`, { state: { category: name } })
		setPopupToggle(false)
	}

	return (
		<nav className={cn(s.nav_sub, subNavToggleCategory === category && s.active)} onClick={onClickHandler}>
			{items.map((sub) => (
				<ul className={s.nav_sub_item} key={sub.category}>
					<h5 className={s.nav_sub_title}>{sub.name}</h5>
					{sub.categories
						.sort((a, b) => (b.name[0] < a.name[0] ? 1 : -1))
						.map((sub_category) => (
							<li
								className={s.nav_sub_link}
								key={sub_category.subCategory}
								id={sub_category.subCategory}
								data-name={sub_category.name}
							>
								{sub_category.name}
							</li>
						))}
				</ul>
			))}
		</nav>
	)
}