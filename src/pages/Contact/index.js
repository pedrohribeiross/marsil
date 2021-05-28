import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneAlt,
	faBuilding,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import CoverPhoto from '../../components/CoverPhoto';

export default function Contact() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Contato' />
			{/* Cover Photo */}

			{/* Contact */}
			<section className='container'>
				<div className='row row-cols-1 row-cols-md-3 g-4 my-5'>
					<div className='col'>
						<div className='card bg-light text-center h-100'>
							<FontAwesomeIcon
								className='text-danger mx-auto my-3'
								icon={faBuilding}
								size='4x'
							/>
							<div className='card-body'>
								<h3 className='card-title text-danger'>Endereço</h3>
								<p className='card-text'>
									Estrada do Pequiá, 193 Vila Silviania – Carapicuiba – SP CEP 06381-090
								</p>
							</div>
						</div>
					</div>

					<div className='col'>
						<div className='card bg-light text-center h-100'>
							<FontAwesomeIcon
								className='text-danger mx-auto my-3'
								icon={faPhoneAlt}
								size='4x'
							/>
							<div className='card-body'>
								<h3 className='card-title text-danger'>Telefone</h3>
								<p className='card-text'>(11) 4187-0270</p>
							</div>
						</div>
					</div>

					<div className='col'>
						<div className='card bg-light text-center h-100'>
							<FontAwesomeIcon
								className='text-danger mx-auto my-3'
								icon={faEnvelope}
								size='4x'
							/>
							<div className='card-body'>
								<h3 className='card-title text-danger'>Email</h3>
								<p className='card-text'>marsil@acosmarsil.com.br</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Contact */}
		</>
	);
}
