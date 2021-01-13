import Head from 'next/head';
import { Container, Card, CardDeck, Button, Row } from 'react-bootstrap';
import Link from 'next/link';

const ProjectPage = () => {
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
			<Container>
				<section className="py-5 mt-5">
					<h1 className="h2 text-center">My Work</h1>
					<div className="bottom-line" />
					<p className="text-center my-3">
						Check out a few of my projects below.
						<br />
						<br />
						My full GitHub portfolio can be found{' '}
						<Link href="https://github.com/Brian-Holland" passHref>
							<a target="_blank">here</a>
						</Link>
						.
					</p>
				</section>

				<CardDeck>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">AppTracker</Card.Title>
						<Card.Img variant="top" src="imgs/apptracker.png" alt="apptracker application screenshot" />
						<Card.Body>
							<Card.Text>
								Full stack application allowing users to keep track of job applications. React Context
								API used for state management. RESTful API using Node, Express, and MongoDB for CRUD
								operations. Custom middleware and JSON Web Tokens for authentication as well as
								passwords hashed for encryption.
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://apptracker-app.herokuapp.com/" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/AppTracker" passHref>
									<a target="_blank">
										<Button className variant="outline-primary">
											Repo
										</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">IT Log MERN App</Card.Title>
						<Card.Img variant="top" src="/imgs/it-log-mern.png" alt="it log app screenshot" />
						<Card.Body>
							<Card.Text>
								RESTful API built to allow a user full CRUD operations over IT logs and technicians.
								Built using Node, Express, and MongoDB and connected to a React/Redux front end. Custom
								database model schemas. Tested and published with Postman API documentation. Also allows
								search queries on IT logs. Deployed on Heroku. {' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://it-log-mern-app.herokuapp.com/ " passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/it_logger_backend" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>

					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Portfolio Website</Card.Title>
						<Card.Img variant="top" src="/imgs/personalweb.png" alt="portfolio website screenshot" />
						<Card.Body>
							<Card.Text>
								Personal portfolio website built with NextJS, React, and React Bootstrap. Bootswatch
								also used for additional styling. Contains a custom dynamic 404 error page, which uses
								the path name to display the dynamic message. Also contains a contact form integrated
								with Netlify. {' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://www.brian-holland.com" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/NextJS_Website" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</CardDeck>

				<CardDeck>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Mobile Detailer Website</Card.Title>
						<Card.Img variant="top" src="/imgs/wax.jpg" alt="mobile detailing website screenshot" />
						<Card.Body>
							<Card.Text>
								Static website created for a local mobile detailing service. Consulted with client and
								built using basic HTML, CSS, and Bootstrap for styling. Development site deployed on
								Netlify.{' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://waxandshine.netlify.app/" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/waxandshine_websiter" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Magic 8 Ball</Card.Title>
						<Card.Img variant="top" src="/imgs/8ball.png" alt="magic 8 ball app screenshot" />
						<Card.Body>
							<Card.Text>
								Classic Magic 8 Ball recreated by using React to handle state management and CSS
								animations that are triggered by state-based logic. Allows users to ask a question in
								the input, trigger a shaking animation by "shaking" the ball, and fades in one of the
								original 20 answers. Deployed on Netlify. {' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://askthemagic8ball.com" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/React_Magic_8_Ball_Hooks" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Twitter Post Bot</Card.Title>
						<Card.Img
							src="/imgs/twitterbot.png"
							variant="bottom"
							alt="twitter bot application screenshot"
						/>
						<Card.Body>
							<Card.Text>
								Daily Twitter posting bot app created with JavaScript and Google Sheets that utilizes
								the Google Cloud Platform's Cloud Functions to schedule daily tweets. Bot alerts user
								when tweet database is empty.
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://twitter.com/dev_quote_bot" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/Twitter_Post_Bot" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</CardDeck>
			</Container>
		</div>
	);
};

export default ProjectPage;
