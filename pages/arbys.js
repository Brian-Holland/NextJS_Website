import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const ArbysPage = () => {
	return (
		<div>
			<Head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Software engineer portfolio website for Brian Holland of the San Francisco Bay Area including a resume, project listing, contact information, and more."
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.brian-holland.com" />
				<meta property="twitter:title" content="Brian Holland | Software Engineer" />
				<meta
					property="twitter:description"
					content="Brian Holland's software engineering portfolio website including a resume, projects, contact info, and custom 404 error page."
				/>
				<meta property="twitter:image" content="https://www.brian-holland.com/imgs/arbythumb.png" />
				<meta property="twitter:image:alt" content="Arby's" />

				<title>Brian Holland | Software Engineer</title>
			</Head>
			<Container className="text-center" fluid>
				<img className="fs-img" src="2for5.jpg" alt="arbys menu" />
			</Container>
		</div>
	);
};

export default ArbysPage;
