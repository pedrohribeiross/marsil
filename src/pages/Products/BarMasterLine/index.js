import React from 'react';

import CoverPhoto from '../../../components/CoverPhoto';
import CardProducts from '../../../components/CardProducts';
import { barMasterLine } from '../catalog';

export default function BarMasterLine() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Bar Master Line' />
			{/* Cover Photo */}

			<CardProducts products={barMasterLine} />
		</>
	);
}
