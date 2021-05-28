import React from 'react';

import CoverPhoto from '../../../components/CoverPhoto';
import CardProducts from '../../../components/CardProducts';
import { cookerMasterLine } from '../catalog';

export default function CookerMaster() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Cooker Master Line' />
			{/* Cover Photo */}

			<CardProducts products={cookerMasterLine} />
		</>
	);
}
