import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo/logo.png';

export default function Header() {
	return (
		<header>
			<nav className='navbar navbar-expand-lg'>
				<div className='container'>
					<img
						src={logo}
						alt='Marsil - Equipamentos para Cozinhas Profissionais'
						className='navbar-brand'
					/>

					<div className='d-lg-flex d-none justify-content-center align-items-center'>
						<div className='navbar-border-icon'>
							<FontAwesomeIcon className='text-danger' icon={faPhoneAlt} size='2x' />
						</div>
						<div className='d-flex flex-column mx-2'>
							<h4 className='navbar-text text-danger mb-0'>Fone</h4>
							<span className='navbar-text text-secondary'>(11) 4187-0270</span>
						</div>
					</div>

					<div className='d-lg-flex d-none justify-content-center align-items-center'>
						<div className='navbar-border-icon'>
							<FontAwesomeIcon className='text-danger' icon={faBuilding} size='2x' />
						</div>
						<div className='d-flex flex-column mx-2'>
							<h4 className='navbar-text text-danger mb-0'>Localização</h4>
							<span className='navbar-text text-secondary'>
								Estrada do Pequiá, 193 – Vila Silviana – Carapicuiba/SP
							</span>
						</div>
					</div>
				</div>
			</nav>

			<nav className='navbar navbar-expand-lg bg-danger navbar-white'>
				<div className='container'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarToggler'
						aria-controls='navbarToggler'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='collapse navbar-collapse' id='navbarToggler'>
						<ul className='navbar-nav mx-auto py-2'>
							<li className='nav-item'>
								<Link className='nav-link fs-5 fw-bolder' to='/'>
									Início
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link fs-5 fw-bold' to='/about'>
									A Marsil
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									to='/products/cooker-master-line'
									className='nav-link dropdown-toggle fs-5 fw-bold'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Produtos
								</Link>
								<ul className='dropdown-menu bg-danger' aria-labelledby='navbarDropdown'>
									<li>
										<Link className='dropdown-item text-white' to='/products/cooker-master-line'>
											Cooker Master Line
										</Link>
									</li>
									<li>
										<Link className='dropdown-item text-white' to='/products/cooker-linha-compacta'>
											Cooker Linha Compacta
										</Link>
									</li>
									<li>
										<Link className='dropdown-item text-white' to='/products/refri-master-line'>
											Refri Master Line
										</Link>
									</li>
									<li>
										<Link className='dropdown-item text-white' to='/products/distribuicao'>
											Distribuição
										</Link>
									</li>
									<li>
										<Link className='dropdown-item text-white' to='/products/bar-master-line'>
											Bar Master Line
										</Link>
									</li>
									<li>
										<Link className='dropdown-item text-white' to='/products/mobiliario'>
											Mobiliário Master Line
										</Link>
									</li>
								</ul>
							</li>

							<li className='nav-item'>
								<Link className='nav-link fs-5 fw-bold' to='/customers'>
									Clientes
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link fs-5 fw-bold' to='/contact'>
									Contato
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
