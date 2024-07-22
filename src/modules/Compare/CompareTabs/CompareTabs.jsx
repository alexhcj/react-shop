import React from 'react'
import { CompareTabItem } from './CompareTabItem/CompareTabItem'
import { ReactComponent as TrashSVG } from '../../../assets/svg/trash.svg'
import s from './compare-tabs.module.scss'

export const CompareTabs = ({
	categories,
	activeCategory,
	setActiveCategory,
	removeListFromCompare,
	removeAllCompares,
	calcCategoryItems,
}) => {
	const handleRemoveFromListCompare = (e, category) => {
		e.stopPropagation()

		if (activeCategory === category) {
			setActiveCategory(categories[0])
			removeListFromCompare(category)
		}
	}

	const handleActiveCategory = (e) => {
		setActiveCategory(e.target.dataset.category)
	}

	return (
		<div className={s.box}>
			{/* TODO: refactor to Button */}
			<button className={s.btn_clear} onClick={() => removeAllCompares()}>
				<TrashSVG className={s.trash} />
				Remove all compares
			</button>
			<div className={s.header}>
				<ul className={s.list} onClick={handleActiveCategory}>
					{categories.map((category) => (
						<CompareTabItem
							key={category}
							category={category}
							activeCategory={activeCategory}
							totalCompares={calcCategoryItems(category)}
							handleRemoveFromListCompare={handleRemoveFromListCompare}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}
