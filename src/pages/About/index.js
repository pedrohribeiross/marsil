import React from 'react';

import CoverPhoto from '../../components/CoverPhoto';

import about1 from '../../assets/img/slider/about-1.jpg';
import about2 from '../../assets/img/slider/slider1.jpg';
import about3 from '../../assets/img/slider/slider3.jpg';

export default function About() {
	return (
		<>
			{/* Cover Photo */}
			<CoverPhoto title='A Marsil' subtitle='Nossa História' />
			{/* Cover Photo */}

			{/* Articles */}
			<section className='container my-5'>
				<article className='row my-5'>
					<div className='d-none d-md-block col-md-6'>
						<img
							src={about1}
							alt=''
							className='img-fluid h-100'
							style={{ objectFit: 'cover', objectPosition: '-350px center' }}
						/>
					</div>
					<div className='col-md-6 fs-5'>
						<h2 className='text-danger'>Conheça um pouco sobre nós</h2>
						<h4>+20 Anos de Experiência no Ramo</h4>
						<p>
							A Marsil é uma empresa com mais de 20 anos de tradição e Know-how desenvolvendo
							equipamentos para Cozinhas Profissionais, inovando sempre em tecnologia e design
							para melhor atender às exigências de mercado. Equipada com tecnologia de ponta,
							a Marsil produz uma linha completa de equipamentos para a área de Food Service,
							Padarias, Fast-Foods, Restaurantes de Alta Gastronomia, Hospitais, Hotéis,
							atendendo as exigências dos mais renomados Chef’s. Em seu curriculum figura
							importantes obras para grandes marcas como: Usiminas, Vale do Rio Doce,
							Michellin, Hotel Ibis – RJ, Vivenda do Camarão – SP, Sky Asia, Livorno, Bom
							Grillé, Patroni Pizza, Oriente Express, La Pasta Gialla, entre outros. Empenhada
							em atender com excelência, a Marsil oferece serviços de montagens e instalações
							completas de seus equipamentos. Analisando criteriosamente as áreas para
							elaboração de projetos desde o layout até a finalização da obra, em parceria com
							os mais renomados arquitetos e projetistas do mercado.
						</p>
					</div>
				</article>

				<article className='row my-5'>
					<div className='col-md-6 fs-5'>
						<h2 className='text-danger'>Assistência Técnica</h2>
						<h4>Atendimento de Garantia</h4>
						<p>
							A garantia de 1 ano em toda a linha de produtos Marsil é coberta por nosso
							departamento por meio de atendimentos rápidos e eficientes, no prazo de 24
							horas, desempenhados pela melhor e mais eficiente equipe técnica do mercado,
							sendo este um dos nossos diferenciais. As cozinhas Marsil são instaladas em todo
							território nacional, supervisionadas por nosso departamento de engenharia e
							obras. Todos os equipamentos Marsil são entregues devidamente testados e
							regulados com toda a orientação técnica/operacional e com instruções de
							funcionamento.
						</p>
					</div>
					<div className='d-none d-md-block col-md-6'>
						<img
							src={about2}
							alt=''
							className='img-fluid h-100'
							style={{ objectFit: 'cover', objectPosition: '-350px center' }}
						/>
					</div>
				</article>

				<article className='row my-5'>
					<div className='d-none d-md-block col-md-6'>
						<img
							src={about3}
							alt=''
							className='img-fluid h-100'
							style={{ objectFit: 'cover', objectPosition: '-350px center' }}
						/>
					</div>
					<div className='col-md-6 fs-5'>
						<h2 className='text-danger'>Pós-venda Marsil</h2>
						<p>
							Temos nesse quesito nosso maior diferencial, pois a Marsil se coloca como
							parceira realmente, prestando toda a assessoria necessária junto aos mais
							diversos clientes no segmento de alimentação.
						</p>
					</div>
				</article>
			</section>
			{/* Articles */}
		</>
	);
}
