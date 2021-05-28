import React from 'react';
import ModalProducts from '../ModalProducts';

export default function CardProducts({ products }) {
	return (
		<>
			<section className='container'>
				<div className='row row-cols-1 row-cols-md-3 g-4 my-5'>
					{products.map((product, index) => (
						<div className='col'>
							<div className='card'>
								<div className='card-header'>
									<h6 className='card-title text-center text-danger m-0'>{product.title}</h6>
								</div>
								<div className='d-flex align-items-center' style={{ height: '20rem' }}>
									<img
										src={product.image}
										alt=''
										className='card-img-top mh-100'
										style={{ objectFit: 'contain' }}
									/>
								</div>
								<button
									type='button'
									className='btn btn-danger fw-bold'
									data-bs-toggle='modal'
									data-bs-target={`#colapseCard${index}`}
								>
									+ Detalhes
								</button>

								<ModalProducts
									id={`colapseCard${index}`}
									title={product.title}
									features={product.features}
									accessories={product.accessories}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
