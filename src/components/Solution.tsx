import graphic from '../assets/graphic.png';
import { useTranslation } from 'react-i18next';

export const Solution = () => {
	const { t } = useTranslation();

	return (
		<div className='solution'>
			<div className='graphic'>
				<img src={graphic} alt='graphic' />
			</div>
			<div className='info'>
				<div className='title'>{t('solution.title')}</div>
				<div className='text'>{t('solution.text')}</div>
				<ul>
					<li>{t('solution.strategy')}</li>
					<li>{t('solution.research')}</li>
					<li>{t('solution.design')}</li>
					<li>{t('solution.testing')}</li>
				</ul>
			</div>
		</div>
	);
};
