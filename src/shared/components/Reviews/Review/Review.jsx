import { ImageWithFallback } from '../../../../utils/ImageWithFallback'
import { Text } from '../../UI/Text/Text'
import { convertISODate } from '../../../../utils'
import { Rating } from '../../Rating/Rating'
import s from './review.module.scss'

export const Review = ({
	review: {
		user: { firstName, avatarId },
		text,
		createdAt,
		rating,
	},
}) => {
	const avatarUrl = `${process.env.REACT_APP_API_URL}/files/avatar/${avatarId}`

	return (
		<div className={s.review}>
			<ImageWithFallback className={s.avatar} onlySrc src={avatarUrl} imgSize='avatar' />
			<div className={s.content}>
				<div className={s.info}>
					<div className={s.meta}>
						<Text className={s.author}>
							{firstName ? firstName : 'Anonymous'}
							{' - '}
						</Text>
						<Text className={s.date} span>
							{convertISODate(createdAt, 'full')}
						</Text>
					</div>
					<Rating rating={rating} />
				</div>
				{text && <Text className={s.text}>{text}</Text>}
			</div>
		</div>
	)
}
