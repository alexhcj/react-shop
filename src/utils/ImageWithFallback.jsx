import React, { useEffect, useState } from 'react'
import { getSizedImgUrl } from '.'

export function ImageWithFallback({ src, fallback, className, alt, imgSize, onlySrc }) {
	const [imgSrc, setImgSrc] = useState(getSizedImgUrl(src, imgSize))
	const defaultImgSrc = `${process.env.REACT_APP_WEB_PUBLIC_URL}/assets/images/default`

	useEffect(() => {
		!onlySrc ? setImgSrc(getSizedImgUrl(src, imgSize)) : setImgSrc(src)
	}, [src])

	const onError = () => setImgSrc(getSizedImgUrl(defaultImgSrc, imgSize))

	return <img className={className} src={imgSrc ? imgSrc : fallback} onError={onError} alt={alt} />
}
