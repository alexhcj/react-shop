import { useEffect, useRef, useState } from 'react'
import s from './shopsort.module.css'

const sortParams = [
	{ id: 1, sort: 'popularity', order: 'desc', text: 'Sort by popularity' },
	{ id: 2, sort: 'added', order: 'desc', text: 'Sort by newness' },
	{ id: 3, sort: 'price', order: 'desc', text: 'Sort by price: high to low' },
	{ id: 4, sort: 'price', order: 'asc', text: 'Sort by price: low to high' },
	{ id: 5, sort: 'name', order: 'asc', text: 'Sort by alphabet: A - Z' },
	{ id: 6, sort: 'name', order: 'desc', text: 'Sort by alphabet: Z - A' },
]

export const ShopSort = ({ sortHandler }) => {
	const [sort, setSort] = useState(sortParams[0])
	const [activeSortId, setActiveSortId] = useState(sort.id)
	const [listToggle, setListToggle] = useState(false)
	const currentSortRef = useRef(null)
	
	const selectSort = (e) => {
		const current = e.target.id - 1
		const params = {
			sort: sortParams[current].sort,
			order: sortParams[current].order,
		}

		setSort(sortParams[current])
		sortHandler(params)
	}

	useEffect(() => {
		document.addEventListener('keydown', escKeyHandler)
		document.addEventListener('click', clickOutsideHandler)

		return () => {
			document.removeEventListener('keydown', escKeyHandler)
			document.removeEventListener('click', clickOutsideHandler)
		}
	}, [])

	const escKeyHandler = (e) => {
		if (e.key === 'Escape') {
			setListToggle(false)
		}
	}

	const clickOutsideHandler = (e) => {
		if (currentSortRef.current && !currentSortRef.current.contains(e.target)) {
			setListToggle(false)
		}
	}

	const clickHandler = () => {
		setListToggle(!listToggle)
	}

	const highlightSortItem = (e) => {
		let current = e.target.id - 1
		// mouseover get out from list
		if (current === -1) {
			return
		}

		setActiveSortId(sortParams[current].id)
	}

	// help highlightSortItem when mouse get out list
	const resetHightlight = () => {
		setActiveSortId(sort.id)
	}

	return (
		<div className={s.block}>
			<span
				className={`${s.sort} ${listToggle ? `${s.transform}` : ''} `}
				onClick={clickHandler}
				ref={currentSortRef}
			>
				{sort.text}
			</span>
			<ul
				className={`${s.list} ${listToggle ? `${s.active}` : ''} `}
				onMouseOver={highlightSortItem}
				onMouseLeave={resetHightlight}
			>
				{sortParams.map((param) => {
					let { id, text } = param

					return (
						<li
							className={`${s.item} ${sort.id === id ? `${s.current}` : ''} ${
								activeSortId === id ? `${s.hightlight}` : ''
							}`}
							key={id}
							id={id}
							onClick={(e) => selectSort(e)}
						>
							{text}
						</li>
					)
				})}
			</ul>
			<span className={s.results}>Showing 1–9 of 21 results</span>
		</div>
	)
}
