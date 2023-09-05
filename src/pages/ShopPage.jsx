import React from 'react'
import { ProductProvider } from '../context/ProductContext'
import { Breadcrumbs } from '../shared/components/UI/Breadcrumbs/Breadcrumbs'
import { Shop } from '../modules/Shop/Shop'
import { Border } from '../shared/components/UI/Spacing/Border'
import { Space } from '../shared/components/UI/Spacing/Space'
import { ProductQuickView } from '../components/ProductQuickView/ProductQuickView'

export const ShopPage = () => {
	return (
		<ProductProvider>
			<Breadcrumbs />
			<Shop />
			<Space size='l' />
			<Border />
			<ProductQuickView />
		</ProductProvider>
	)
}

// TODO: shop layout
