import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const HomePage = () => {
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
				<meta property="og:image" content="/imgs/screenshot.png" />
				<meta property="og:url" content="https://www.brian-holland.com" />
				<title>Brian Holland | Software Engineer</title>
			</Head>
			<section id="main-land">
				<Container className="mt-5">
					<Row>
						<Col className="d-flex-column" style={{ paddingTop: '12%', paddingLeft: '15%' }}>
							<h2 id="typed">
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
							</h2>
							<p className="text-secondary">Full Stack Engineer / JavaScript Specialist</p>
							<Link href="/projects">
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
