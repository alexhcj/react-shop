import React from 'react'
import { BestSellers } from './BestSellers/BestSellers'
import { NewProducts } from './NewProducts/NewProducts'
import { DealsWeek } from './DealsWeek/DealsWeek'
import { Space } from '../../shared/components/UI/Spacing/Space'
import { BannerOffer } from '../../modules/Shop/Sidebar/BannerOffer/BannerOffer'
import s from './offers.module.scss'

export const Offers = () => {
	return (
		<div className={s.section}>
			<Space space={70} />
			<div className="container">
				<div className={s.wrapper}>
					<div className={s.left}>
						<DealsWeek />
						<BannerOffer imgSize='special' />
					</div>
					<div className={s.right}>
						<BestSellers />
						<Space space={30} />
						<NewProducts />
					</div>
				</div>
			</div>
			<Space space={70} />
		</div>
	)
}
