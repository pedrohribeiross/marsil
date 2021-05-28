import React from 'react';
import { Link } from 'react-router-dom';

import cover from '../../assets/img/slider/slider3.jpg';
import cookerMasterLine from '../../assets/img/service/slide1.png';
import cookerLinhaCompacta from '../../assets/img/service/slide2.png';
import refriMasterLine from '../../assets/img/service/slide3.png';
import distribuicao from '../../assets/img/service/slide4.png';
import mobiliario from '../../assets/img/service/slide5.png';
import imageAbout from '../../assets/img/background/video-cta.jpg';

export default function Home() {
	return (
		<>
			{/* Cover Photo */}
			<section className='bg-image'>
				<img src={cover} alt='' className='img-fluid' />

				<div className='mask' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
					<div className=' container d-flex align-items-center h-100'>
						<div className='col-6 fs-5'>
							<h1 className='d-none d-md-block display-1 lh-1 fw-bolder'>
								Equipamentos para Cozinhas Profissionais
							</h1>
							<p className='d-none d-lg-block'>
								Equipamentos desenvolvidos para apoiar e garantir eficiência e qualidade.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Cover Photo */}

			{/* Carousel */}
			<section className='container'>
				<h1 className='text-danger  text-center my-3'>
					EQUIPAMENTOS PARA COZINHAS PROFISSIONAIS
				</h1>

				<section
					className='carousel slide carousel-fade carousel-dark my-5'
					id='myCarousel'
					data-bs-ride='carousel'
				>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<div className='w-75 mx-auto'>
								<div className='card mb-3 card-height justify-content-center'>
									<div className='row g-0'>
										<div className='col-md-6'>
											<img src={cookerMasterLine} alt='' className='card-img-top' />
										</div>
										<div className='col-md-6'>
											<div className='card-body'>
												<h4 className='card-title text-danger'>Cooker Master Line</h4>
												<p className='d-none d-md-block card-text'>
													FOGÃO A GÁS COM QUEIMADORES SIMPLES / DUPLOS
												</p>
												<Link to='/products/cooker-master-line' className='btn btn-outline-danger'>
													Veja mais
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='carousel-item'>
							<div className='w-75 mx-auto'>
								<div className='card mb-3 card-height justify-content-center'>
									<div className='row g-0'>
										<div className='col-md-6'>
											<img src={cookerLinhaCompacta} alt='' className='card-img-top' />
										</div>
										<div className='col-md-6'>
											<div className='card-body'>
												<h4 className='card-title text-danger'>Cooker Linha Compacta</h4>
												<p className='d-none d-md-block card-text'>
													FOGÃO A GÁS COM QUEIMADORES SIMPLES / DUPLOS.
												</p>
												<Link to='/products/cooker-linha-compacta' className='btn btn-outline-danger'>
													Veja mais
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='carousel-item'>
							<div className='w-75 mx-auto'>
								<div className='card mb-3 card-height justify-content-center'>
									<div className='row g-0'>
										<div className='col-md-6'>
											<img src={refriMasterLine} alt='' className='card-img-top' />
										</div>
										<div className='col-md-6'>
											<div className='card-body'>
												<h4 className='card-title text-danger'>Refri Master Line</h4>
												<p className='d-none d-md-block card-text'>
													REFRIGERADORES / FREEZERES MASTER LINE HORIZONTAIS.
												</p>
												<Link to='/products/refri-master-line' className='btn btn-outline-danger'>
													Veja mais
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='carousel-item'>
							<div className='w-75 mx-auto'>
								<div className='card mb-3 card-height justify-content-center'>
									<div className='row g-0'>
										<div className='col-md-6'>
											<img src={distribuicao} alt='' className='card-img-top' />
										</div>
										<div className='col-md-6'>
											<div className='card-body'>
												<h4 className='card-title text-danger'>Distribuição</h4>
												<p className='d-none d-md-block card-text'>
													MÓDULO DISTRIBUIÇÃO NEUTRO / AQUECIDO / REFRIGERADO.
												</p>
												<Link to='/products/distribuicao' className='btn btn-outline-danger'>
													Veja mais
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='carousel-item'>
							<div className='w-75 mx-auto'>
								<div className='card mb-3 card-height justify-content-center'>
									<div className='row g-0'>
										<div className='col-md-6'>
											<img src={mobiliario} alt='' className='card-img-top' />
										</div>
										<div className='col-md-6'>
											<div className='card-body'>
												<h4 className='card-title text-danger'>Mobiliário Master Line</h4>
												<p className='d-none d-md-block card-text'>MESA LISA.</p>
												<Link to='/products/mobiliario' className='btn btn-outline-danger'>
													Veja mais
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='prev'
					>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#myCarousel'
						data-bs-slide='next'
					>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</section>
			</section>
			{/* Carousel */}

			{/* Card About */}
			<section className='container'>
				<div className='row my-5'>
					<div className='col-md-6 my-auto'>
						<h2 className='text-danger'>Sobre nós</h2>
						<h3 className='my-3'>Inovação através de tecnologia e design</h3>
						<p className='fs-5'>
							Equipada com maquinário de ponta, a Marsil fabrica equipamentos para Indústrias,
							Hotéis, Fast-Foods, Restaurantes comerciais, Hospitais, entre outros.
						</p>
						<Link to='/contact' className='btn btn-danger btn-lg'>
							Fale Conosco
						</Link>
					</div>

					<div className='col-md-6 d-none d-md-block '>
						<div className='pb-3 border-bottom border-end border-5 border-danger'>
							<img src={imageAbout} alt='' className='img-fluid shadow-lg' />
						</div>
					</div>
				</div>
			</section>
			{/* Card About */}
		</>
	);
}
