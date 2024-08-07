import React from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { ButtonCart } from '../../../shared/components/UI/Buttons/ButtonCart/ButtonCart'
import { Text } from '../../../shared/components/UI/Text/Text'
import { ReactComponent as PlusSVG } from '../../../assets/svg/plus.svg'
import { ReactComponent as CompareSVG } from '../../../assets/svg/compare.svg'
import s from './add-compare-item.module.scss'

export const AddCompareItem = ({ category }) => {
	const navigate = useNavigate()

	const handleAddCompareItem = () => {
		navigate(`/shop?basicCategory=${category}&${process.env.REACT_APP_SHOP_DEFULT_QUERY}`)
	}

	const handleShowRelatedItem = () => {
		console.log('Open modal')
	}

	return (
		<div className={s.actions}>
			<ButtonCart className={s.button} type='button' onClick={() => handleAddCompareItem()}>
				<Text span weight='semi' className={s.button_text}>
					<PlusSVG className={s.svg} />
					Add product
				</Text>
			</ButtonCart>
			<ButtonCart className={cn(s.button, s.button_text_compare)} type='button' onClick={() => handleShowRelatedItem()}>
				<Text span weight='semi' className={s.button_text}>
					<CompareSVG className={cn(s.svg, s.svg_related)} />
					Show related
				</Text>
			</ButtonCart>
		</div>
	)
}
