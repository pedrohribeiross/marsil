import React from 'react';

import CardProducts from '../../../components/CardProducts';
import CoverPhoto from '../../../components/CoverPhoto';
import { refriMasterLine } from '../catalog';

export default function RefriMaster() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Refri Master Line' />
			{/* Cover Photo */}

			<CardProducts products={refriMasterLine} />
		</>
	);
}
