import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
			<section className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<div className='card border-danger'>
							<h4 className='card-header bg-danger text-white'>Página Não Encontrada</h4>
							<div className='card-body'>
								<h1 className='display-1 fw-bold text-danger card-title'>404</h1>
								<p className='card-text'>A página que você procura não existe!!</p>
								<Link className='btn btn-danger' to='/'>
									Página Inicial
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
