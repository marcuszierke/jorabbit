import { useTranslation } from 'react-i18next';
import Siemens from '../assets/siemens.png';
import Jungheinrich from '../assets/jungheinrich.png';
import Krones from '../assets/krones.png';
import Biotronik from '../assets/biotronik.png';
import Satorius from '../assets/sartorius.png';
import Draeger from '../assets/draeger.png';
import BakerHughes from '../assets/baker-hughes.png';
import Seca from '../assets/seca.png';
import BuschJaeger from '../assets/busch-jaeger.png';
import Fresenius from '../assets/fresenius.png';
import Sap from '../assets/sap.png';
import Dlr from '../assets/dlr.png';

const icons = {
	Siemens,
	Jungheinrich,
	Krones,
	Biotronik,
	Satorius,
	Draeger,
	BakerHughes,
	Seca,
	BuschJaeger,
	Fresenius,
	Sap,
	Dlr,
};

export const References = () => {
	const { t } = useTranslation();

	return (
		<div className='references'>
			<div className='link'>{t('references.link')}</div>
			<div className='icons'>
				{Object.keys(icons).map((icon) => (
					/// @ts-ignore
					<img src={icons[icon]} alt={`${icon}-icon`} key={icon} />
				))}
			</div>
		</div>
	);
};
