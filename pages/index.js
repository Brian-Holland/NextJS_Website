import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const HomePage = () => {
	return (
		<section id="main-land">
			<Container className="mt-5">
				<Row>
					<Col className="d-flex-column" style={{ paddingTop: '12%', paddingLeft: '15%' }}>
						<h2>
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
	);
};

export default HomePage;
