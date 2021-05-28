import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo/logo.png';

export default function Footer() {
	return (
		<footer className='w-100 bg-footer'>
			<div className='container pt-2'>
				<div className='row my-4 justify-content-center'>
					<div className='col-md-4 text-white'>
						<img
							src={logo}
							alt='Marsil - Equipamentos para Cozinhas Profissionais'
							className='img-thumnail mx-auto d-block my-3'
						/>
					</div>

					<div className='col-md-4 text-white fs-5'>
						<h4>A Marsil</h4>
						<nav className='nav flex-column'>
							<Link className='nav-link' to='/'>
								Início
							</Link>
							<Link className='nav-link' to='/about'>
								A Marsil
							</Link>
							<Link className='nav-link' to='/customers'>
								Clientes
							</Link>
							<Link className='nav-link' to='/contact'>
								Contato
							</Link>
						</nav>
					</div>

					<div className='col-md-4 text-white fs-5'>
						<h4>Produtos</h4>
						<nav className='nav flex-column'>
							<Link className='nav-link' to='/products/cooker-master-line'>
								Cooker Master Line
							</Link>
							<Link className='nav-link' to='/products/cooker-linha-compacta'>
								Cooker Linha Compacta
							</Link>
							<Link className='nav-link' to='/products/refri-master-line'>
								Refri Master Line
							</Link>
							<Link className='nav-link' to='/products/distribuicao'>
								Distribuição
							</Link>
							<Link className='nav-link' to='/products/bar-master-line'>
								Bar Master Line
							</Link>
							<Link className='nav-link' to='/products/mobiliario'>
								Mobiliário Master Line
							</Link>
						</nav>
					</div>
				</div>

				<div className='row'>
					<div className='col text-white text-center'>
						<p>
							© 2021{' '}
							<span className='fw-bold'>
								Marsil - Equipamentos para Cozinhas Profissionais
							</span>
							. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
