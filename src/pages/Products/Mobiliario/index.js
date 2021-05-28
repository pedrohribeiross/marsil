import React from 'react';

import CoverPhoto from '../../../components/CoverPhoto';
import CardProducts from '../../../components/CardProducts';
import { mobiliarioMasterLine } from '../catalog';

export default function Mobiliario() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Mobiliário Master Line' />
			{/* Cover Photo */}

			<CardProducts products={mobiliarioMasterLine} />
		</>
	);
}
