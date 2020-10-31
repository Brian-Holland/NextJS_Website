import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

export default function Custom404() {
	const router = useRouter();

	const nameOfPage = router.asPath.slice(1).replace(/%20/g, ' ');

	return (
		<div>
			<Head>
				<title>Brian Holland | Software Engineer</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Software engineer portfolio website for Brian Holland of the San Francisco Bay Area including a resume, project listing, contact information, and more."
				/>
				<meta property="og:title" content="Brian Holland | Software Engineer" />
				<meta property="og:image" content="screenshot.png" />
				<meta property="og:url" content="https://www.brian-holland.com" />
				<title>Brian Holland | Software Engineer</title>
			</Head>
			<Container fluid>
				<section>
					<div className="stars" />
					<div className="twinkling" />

					<div style={{ position: 'relative' }}>
						<h4 className="text-center sentence">
							<Typewriter
								onInit={(typewriter) => {
									console.log(typewriter);
									typewriter
										.callFunction(() => {
											console.log('String typed out!');
										})
										.pauseFor(2300)
										.typeString(`${nameOfPage} was The Imposter`)
										.start();
								}}
							/>
						</h4>

						<div className="move">
							<h2 className="spin">404</h2>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
}
