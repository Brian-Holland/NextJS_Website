import Head from 'next/head';
import { Container, Card, CardDeck, Button, Row } from 'react-bootstrap';
import Link from 'next/link';

const ProjectPage = () => {
	return (
		<div>
			<Head>
				<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
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
			<Container>
				<section className="py-5 mt-5">
					<h2 className="text-center">My Work</h2>
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
						<Card.Title className="text-center pt-2">Contact Keeper</Card.Title>
						<Card.Img variant="top" src="imgs/contact.png" alt="contact keeper application screenshot" />
						<Card.Body>
							<Card.Text>
								Full stack MERN app allowing users to create accounts and login using validation and
								authentication, store contacts using full CRUD commands, search for contacts, and a
								utilizes a full REST API.
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://contactkeeper-react-app.herokuapp.com/" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/Contact-Keeper" passHref>
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
						<Card.Title className="text-center pt-2">GitHub Finder</Card.Title>
						<Card.Img
							variant="top"
							src="/imgs/githubfinder.png"
							alt="github finder application screenshot"
						/>
						<Card.Body>
							<Card.Text>
								React application allowing users to search for GitHub profiles by fetching info from the
								GitHub API, presents the search results in a custom way, and displays a custom version
								of a users' information.{' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://github-find-app.netlify.app" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/GitHub-Finder" passHref>
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
								the Google Cloud Platform's Cloud Functions to schedule daily tweets. Bot will alert
								user when pre-written tweet database is empty.
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
				<CardDeck>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Dad Jokes</Card.Title>
						<Card.Img variant="top" src="/imgs/dadjokes.jpg" alt="dad jokes application screenshot" />
						<Card.Body>
							<Card.Text>
								React application using Axios that pulls dad jokes from an external API and displays
								them for users. Users can up- or downvote jokes, changing their vote count and altering
								the visual display. {' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="https://react-dadjokes.netlify.app" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/React_Dad_Jokes" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Card Dealer</Card.Title>
						<Card.Img variant="top" src="/imgs/dealer.png" alt="react card dealer application screenshot" />
						<Card.Body>
							<Card.Text>
								React application using Axios with an external card API to create a shuffle a deck when
								the component mounts, draw cards, and display pulled cards on screen.{' '}
							</Card.Text>
							<div
								className="d-flex justify-content-around"
								aria-label="button links to live project and code repo"
							>
								<Link href="react-card-dealer.netlify.app" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Live</Button>
									</a>
								</Link>
								<Link href="https://github.com/Brian-Holland/React_Card_Dealer" passHref>
									<a target="_blank">
										<Button variant="outline-primary">Repo</Button>
									</a>
								</Link>
							</div>
						</Card.Body>
					</Card>
					<Card className="mb-4">
						<Card.Title className="text-center pt-2">Mobile Detailer Website</Card.Title>
						<Card.Img variant="top" src="/imgs/wax.jpg" alt="mobile detailing website screenshot" />
						<Card.Body>
							<Card.Text>
								Website created for a local mobile detailing service. Built using basic HTML, CSS, and
								Bootstrap for styling. Development site deployed on Netlify.{' '}
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
				</CardDeck>
			</Container>
		</div>
	);
};

export default ProjectPage;
