import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage.hook";
import {productsAPI} from "../../api/products";
import { ImageWithFallback } from '../../utils/ImageWithFallback'
import {GoodToCart} from "../../shared/components/GoodToCart/GoodToCart";
import {Border} from "../../shared/components/UI/Spacing/Border";
import {Space} from "../../shared/components/UI/Spacing/Space";
import {Text} from "../../shared/components/UI/Text/Text";
import {Rating} from "../../shared/components/Rating/Rating";
import {Price} from "../../components/Price/Price";
import {Tab, Tabs} from "../../shared/components/Tabs/Tabs";
import {Specification} from "../../shared/components/Specification/Specification";
import {Reviews} from "../../shared/components/Reviews/Reviews";
import {NewReview} from "../../shared/components/Reviews/NewReview";
import PreloaderSVG from "../../assets/svg/preloader.svg";
import s from './productdetails.module.scss'

export const ProductDetails = () => {
    const {slug} = useParams()
    const [product, setProduct] = useState([])
		const [cart, setCart] = useLocalStorage('cart', []);

	useEffect(() =>{
        const fetchData = async () => {
            try {
                const {product} = await productsAPI.findOne(slug)
                setProduct(product)
            } catch(e) {
                console.log(e)
            }
        }
        fetchData()

    }, [slug])

    const { name, img, price, description, category, rating, specifications, reviews } = product

	const findProductCart = cart.find(p => p.name === product.name)

	const addProductCart = (quantity) => {
		if (findProductCart) {
			return null
		}
		const product = {img, name, price: price.price, quantity, maxQuantity: specifications.quantity}
		setCart([...cart, product])
	}

    return (
        <div className="container">
            <div className={s.product}>
                <div className={s.img}>
                    {img ? <ImageWithFallback className={s.product_img} src={img} imgSize='xl' alt={name} /> :
											<img src={PreloaderSVG} alt="Preloader"/>	}
                </div>
                <div className={s.content}>
										<h4 className={s.name}>{name}</h4>
                    <Space size="ss" />
										<Rating rating={rating} />
                    <Space size="xss" />
										{price && <Price className={s.price} {...price} type='large' />}
                    <Space size="xs" />
                    <Text>{description}</Text>
                    <Space size="m" />
                    <Border />
                    <Space size="m" />
									{/* TODO: add quantity product state and possibility add more */}
									{/*{findProductCart && <div>{findProductCart.quantity} {`${name}s`} already in cart. Do you want more?</div>}*/}
                  {/*  <Space size="xs" />*/}
										{specifications && <GoodToCart maxQuantity={specifications.quantity} onClick={addProductCart} findProductCart={findProductCart} />}
										<Space size="m" />
                    <div className={s.category}>
                        <Text span weight="medium">Category:</Text>
												{/* TODO: add redirect to shop with category filter */}
												<NavLink to='/shop'>
													<Text className={s.tag} span>{category}</Text>
												</NavLink>
                    </div>
                </div>
            </div>
						<Space size="l" />
						{specifications && <div className={s.specifications}>
							<Tabs className={s.tabs}>
								<Tab id="spec" text="Specifications">
									<Specification {...specifications} />
								</Tab>
								<Tab id="rev" text={`Reviews (${reviews ? reviews.reviews.length : '0'})`}>
									{reviews ? <Reviews reviews={reviews.reviews} /> : <NewReview />}
								</Tab>
							</Tabs>
						</div>}
						<Space space={65} />
						{/*<RelatedProducts name={name} id={id} category={category} />*/}
        </div>
    )
}
