import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<Head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
				<title>Brian Holland | Software Engineer</title>
			</Head>
			<section id="main-land">
				<Container className="mt-5">
					<Row>
						<Col className="d-flex-column" style={{ paddingTop: '12%', paddingLeft: '15%' }}>
							<h1 id="typed" className="h2">
								Hello, <br />
								I'm <span className="text-em">B</span>rian, the
								<br />
								<Typewriter
									options={{
										strings: [ 'Full Stack Engineer', 'JavaScript Specialist', 'Problem Solver' ],
										autoStart: true,
										loop: true
									}}
								/>
							</h1>
							<p className="text-secondary">Full Stack Engineer / JavaScript Specialist</p>
							<Link href="/projects" passHref>
								<a>
									<Button variant="outline-primary">Projects</Button>
								</a>
							</Link>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default HomePage;
