import { ReactComponent as GraphicEn } from '../assets/graphic-en.svg';
import { ReactComponent as GraphicDe } from '../assets/graphic-de.svg';
import { useTranslation } from 'react-i18next';

export const Solution = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className='solution'>
			{i18n.language === 'en' ? (
				<GraphicEn style={{ flex: 1, margin: '0 auto', width: '100%' }} />
			) : (
				<GraphicDe style={{ flex: 1, margin: '0 auto', width: '100%' }} />
			)}
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
