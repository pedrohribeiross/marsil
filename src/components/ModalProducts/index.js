import React from 'react';

export default function ModalProducts({ id, title, features, accessories }) {
	return (
		<div
			className='modal fade'
			id={id}
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title text-danger' id='modalLabel'>
							{title}
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<h5 className='card-title'>Características</h5>
						<ul>
							{features.map((feature) => (
								<li className='card-text'>{feature}</li>
							))}
						</ul>
						{accessories && (
							<>
								<h6 className='card-title'>Acessórios</h6>
								<ul>
									{accessories.map((accessorie) => (
										<li className='card-text'>{accessorie}</li>
									))}
								</ul>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
