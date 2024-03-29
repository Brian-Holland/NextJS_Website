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
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Software engineer portfolio website for Brian Holland of the San Francisco Bay Area including a resume, project listing, contact information, and more."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.brian-holland.com" />
				<meta property="og:title" content="Brian Holland | Software Engineer" />
				<meta
					property="og:description"
					content="Brian Holland's software engineering portfolio website including a resume, projects, contact info, and custom 404 error page."
				/>
				<meta property="og:image" content="https://www.brian-holland.com/screenshot.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.brian-holland.com" />
				<meta property="twitter:title" content="Brian Holland | Software Engineer" />
				<meta
					property="twitter:description"
					content="Brian Holland's software engineering portfolio website including a resume, projects, contact info, and custom 404 error page."
				/>
				<meta property="twitter:image" content="https://www.brian-holland.com/screenshot.png" />
				<meta property="twitter:image:alt" content="Screenshot of website homepage" />
				<title>Brian Holland | 404</title>
			</Head>
			<Container fluid>
				<section>
					<div className="stars" />
					<div className="twinkling" />

					<div style={{ position: 'relative' }}>
						<h1 className="h4 text-center sentence">
							<Typewriter
								onInit={(typewriter) => {
									console.log(typewriter);
									typewriter
										.callFunction(() => {
											console.log('String typed out!');
										})
										.pauseFor(2300)
										.typeString(
											nameOfPage.toLowerCase() === 'domm'
												? `${nameOfPage} was not The Impostor.`
												: `${nameOfPage} was The Impostor.`
										)
										.start();
								}}
							/>
						</h1>

						<div className="move">
							<h2 className="spin">404</h2>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
}
