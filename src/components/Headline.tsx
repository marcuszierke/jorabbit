import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};
export const Headline = ({ children }: Props) => (
	<div className='headline'>
		<h2>{children}</h2>
	</div>
);
