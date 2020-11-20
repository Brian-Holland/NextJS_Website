import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const ArbysPage = () => {
	return (
		<div>
			<Head>
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.brian-holland.com" />
				<meta property="twitter:title" content="Brian Holland | Software Engineer" />
				<meta property="twitter:image:alt" content="Arbys" />
			</Head>
			<Container className="text-center" fluid>
				<img className="fs-img" src="/imgs/2for5.jpg" alt="arbys menu" />
			</Container>
		</div>
	);
};

export default ArbysPage;
