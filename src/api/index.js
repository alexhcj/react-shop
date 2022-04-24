import axios from 'axios'

export const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})

export { sliderAPI } from './slider-api'
export { offerLinksAPI as offersAPI } from './offerlinks-api'
export { postsAPI } from './posts-api'
export { saleAPI } from './sale-api'
export { dealWeekAPI as dealweekAPI } from './dealweek-api'
export { specialofferAPI } from './specialoffer-api'
export { products as productsAPI } from './products'
export { categoriesAPI } from './categories-api'
export { shopProductsAPI } from './shopproducts-api'
export { shopbannerAPI } from './shopbanner-api'
export { blogCategoriesAPI } from './blogcategories-api'
