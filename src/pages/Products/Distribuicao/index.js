import React from 'react';
import CardProducts from '../../../components/CardProducts';
import CoverPhoto from '../../../components/CoverPhoto';
import { distribuicao } from '../catalog';

export default function Distribuicao() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Distribuição' />
			{/* Cover Photo */}

			<CardProducts products={distribuicao} />
		</>
	);
}
