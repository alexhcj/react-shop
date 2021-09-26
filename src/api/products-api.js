import { instance } from '.'

export const productsAPI = {
	getProducts({ search = '', sort = 'popularity', tag = '', order = 'desc', page = 1, limit = 10 , category='', name_ne=''}) {
		return instance
			.get(
				`products?name_like=${search}&_sort=${sort}&category_like=${category}&tags_like=${tag}&_order=${order}&_page=${page}&_limit=${limit}&name_ne=${name_ne}`
			)
			.then((res) => {
				return {
					data: res.data,
					total: res.headers['x-total-count'],
				}
			})
	},
	getProduct(id=1){
        return instance.get(`products?id=${id}`).then((res)=>res.data)
    },
}
