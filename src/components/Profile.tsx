import profile from '../assets/profile-pic.jpg';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
	const { t } = useTranslation();

	return (
		<div className='profile'>
			<div className='pic'>
				<img src={profile} alt='profile pic' />
			</div>
			<div className='info'>
				<div className='title'>{t('profile.intro')}</div>
				<div className='text'>{t('profile.text')}</div>
				<div className='industry'>{t('profile.industry')}</div>
				<ul>
					<li>{t('profile.healthcare')}</li>
					<li>{t('profile.solutions')}</li>
					<li>{t('profile.enterprise')}</li>
					<li>{t('profile.logistics')}</li>
					<li>{t('profile.home')}</li>
					<li>{t('profile.safety')}</li>
				</ul>
			</div>
		</div>
	);
};
