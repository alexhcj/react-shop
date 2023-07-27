import React, { useState } from 'react'
import ReactSlider from 'react-slider'
import { useSearchParams } from 'react-router-dom'
import { ButtonFilter } from '../../../../shared/components/UI/Buttons/ButtonFilter/ButtonFilter'
import './react-slider.css'
import s from './price-range.module.scss'
import { getSearchParams } from '../../../../utils'

const min = 0
const max = 500

export const PriceRange = ({ meta }) => {
	const [params, setParams] = useSearchParams()
	const [price, setPrice] = useState([min, max])
	console.log(meta)

	const filterPriceHandler = () => {
		const query = getSearchParams(params)
		setParams({ ...query, minPrice: `${price[0]}`, maxPrice: `${price[1]}` })
	}

	return (
		<div className={s.box}>
			<ReactSlider
				className={s.slider}
				thumbClassName={s.thumb}
				onChange={setPrice}
				value={price}
				min={min}
				max={max}
			/>
			<div className={s.bottom}>
				<ButtonFilter onClick={filterPriceHandler} />
				<div className={s.thumbs}>
					${price[0]} - ${price[1]}
				</div>
			</div>
		</div>
	)
}
