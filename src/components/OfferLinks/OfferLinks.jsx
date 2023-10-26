import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOfferLinks } from '../../hooks/services/useOfferLinks'
import { Preloader } from '../../shared/components/common/Preloader/Preloader'
import { ImageWithFallback } from '../../utils/ImageWithFallback'
import { enumToCamelCase, stringToSlug } from '../../utils'
import s from './offer-links.module.scss'

export const OfferLinks = () => {
	const { links, loading } = useOfferLinks('offer-link')
	const navigate = useNavigate()

	const handleOfferClick = ({ page, categoryType, categoryValue }) => {
		navigate(
			`/${page}?${enumToCamelCase(categoryType)}=${enumToCamelCase(categoryValue)}&${
				process.env.REACT_APP_SHOP_DEFULT_QUERY
			}`,
		)
	}

	return (
		<div className='container'>
			<ul className={s.block}>
				{loading && <Preloader width={35} height={35} />}
				{!loading &&
					links.map(({ img, title, link }) => {
						const offerUrl = `${process.env.REACT_APP_API_PUBLIC_URL}/images/offers/offer-links/${img}`

						return (
							<li key={stringToSlug(title)} onClick={(e) => handleOfferClick(link)}>
								<button type='button' className={s.offer}>
									<ImageWithFallback onlySrc imgSize='offer-link' src={offerUrl} alt={title} className={s.img} />
								</button>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
