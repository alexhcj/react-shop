import ArrowSVG from '../../../../assets/svg/arrow.svg'
import s from './metapopup.module.css'

export const MetaPopup = ({ text = 'Meta text', data = [] }) => {
	return (
		<div className={s.list}>
			{text} <img src={ArrowSVG} alt=""/>
			<div className={s.popup}>
				{data.map((item, index) => (
					<a href='/src/pages' key={index} className={s.item}>
						{item.text}
					</a>
				))}
			</div>
		</div>
	)
}
