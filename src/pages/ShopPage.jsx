import React from 'react'
import { ProductProvider } from '../context/ProductContext'
import { Breadcrumbs } from '../shared/components/UI/Breadcrumbs/Breadcrumbs'
import { Shop } from '../modules/Shop/Shop'
import { Space } from '../shared/components/UI/Spacing/Space'
import { ProductQuickView } from '../components/ProductQuickView/ProductQuickView'
import { ScrollToTop } from '../shared/components/ScrollToTop/ScrollToTop'

export const ShopPage = () => {
	return (
		<ProductProvider>
			<ScrollToTop>
				<Breadcrumbs type='shop' />
				<Shop />
				<Space size='l' />
				<ProductQuickView />
			</ScrollToTop>
		</ProductProvider>
	)
}
