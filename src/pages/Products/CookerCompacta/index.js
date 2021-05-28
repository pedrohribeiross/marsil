import React from 'react';

import CoverPhoto from '../../../components/CoverPhoto';
import CardProducts from '../../../components/CardProducts';
import { cookerLinhaCompacta } from '../catalog';

export default function CookerCompacta() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Cooker Linha Compacta' />
			{/* Cover Photo */}

			<CardProducts products={cookerLinhaCompacta} />
		</>
	);
}
