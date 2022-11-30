import { useTranslation } from 'react-i18next';

type Props = {
	img: string;
};

export const FullscreenImage = ({ img }: Props) => {
	const { t } = useTranslation();

	return (
		<div className='fullscreen'>
			<img src={img} alt={t('fullscreen.alt')} />
		</div>
	);
};
