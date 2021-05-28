import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Customers from '../pages/Customers';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

import CookerMaster from '../pages/Products/CookerMaster';
import CookerCompacta from '../pages/Products/CookerCompacta';
import RefriMaster from '../pages/Products/RefriMaster';
import Distribuicao from '../pages/Products/Distribuicao';
import Mobiliario from '../pages/Products/Mobiliario';
import BarMaster from '../pages/Products/BarMasterLine';

export default function Routes() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				{/* Products */}
				<Route exact path='/products/cooker-master-line' component={CookerMaster} />
				<Route
					exact
					path='/products/cooker-linha-compacta'
					component={CookerCompacta}
				/>
				<Route exact path='/products/refri-master-line' component={RefriMaster} />
				<Route exact path='/products/distribuicao' component={Distribuicao} />
				<Route exact path='/products/bar-master-line' component={BarMaster} />
				<Route exact path='/products/mobiliario' component={Mobiliario} />
				{/* Products */}
				<Route exact path='/customers' component={Customers} />
				<Route exact path='/contact' component={Contact} />
				<Route path='/*' component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}
