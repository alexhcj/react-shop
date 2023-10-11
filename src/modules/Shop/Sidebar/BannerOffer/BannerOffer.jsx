import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { ImageWithFallback } from '../../../../utils/ImageWithFallback'
import { useBannerOffer } from '../../../../hooks/services/useBannerOffer'
import { Preloader } from '../../../../shared/components/common/Preloader/Preloader'
import s from './banner-offer.module.scss'

export const BannerOffer = ({ imgSize, className }) => {
	const {
		offer: { type, description },
		loading,
	} = useBannerOffer(imgSize)

	const img = !loading && type && `${process.env.REACT_APP_API_PUBLIC_URL}/images/offers/${type.toLowerCase()}`

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<NavLink to='/' className={cn(s.link, className)}>
					<ImageWithFallback src={img} imgSize={imgSize} alt={description} />
				</NavLink>
			)}
		</>
	)
}
