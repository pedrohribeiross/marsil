import React from 'react';

import CoverPhoto from '../../components/CoverPhoto';

import vivenda from '../../assets/img/customers/vivenda-camarao.jpg';
import usiminas from '../../assets/img/customers/usiminas.png';
import fogochao from '../../assets/img/customers/fogochao.jpg';
import nabrasa from '../../assets/img/customers/nabrasa.png';
import maremonti from '../../assets/img/customers/maremonti.jpg';
import bbk from '../../assets/img/customers/bbk.jpg';

export default function Customers() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='Clientes' subtitle='Nossos Clientes' />
			{/* Cover Photo */}

			{/* Cards */}
			<section className='container my-5'>
				<div className='row my-3'>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={vivenda} alt='' />
							<h5 className='card-header bg-transparent'>Vivenda do Camarão</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={usiminas} alt='' />
							<h5 className='card-header bg-transparent'>Usiminas</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={fogochao} alt='' />
							<h5 className='card-header bg-transparent'>Fogo de Chão</h5>
						</div>
					</div>
				</div>

				<div className='row my-3'>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={nabrasa} alt='' />
							<h5 className='card-header bg-transparent'>Nabrasa Steak</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={maremonti} alt='' />
							<h5 className='card-header bg-transparent'>Maremonti</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='card border-danger text-danger'>
							<img className='card-img-top' src={bbk} alt='' />
							<h5 className='card-header bg-transparent'>Bubblekill</h5>
						</div>
					</div>
				</div>
			</section>
			{/* Cards */}
		</>
	);
}
