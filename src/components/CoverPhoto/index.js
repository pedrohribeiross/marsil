import React from 'react';

export default function CoverPhoto(props) {
	const { title, subtitle } = props;

	return (
		<>
			{/* Cover Photo */}
			<section className='bg-image'>
				<div className='bg-cover'></div>

				<div className='mask' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
					<div className=' container d-flex justify-content-center align-items-center h-100'>
						<div className='col-6 fs-5 text-center'>
							<h1 className='display-5 fw-bolder'>{title}</h1>
							<p>{subtitle}</p>
						</div>
					</div>
				</div>
			</section>
			{/* Cover Photo */}
		</>
	);
}
