import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';

const ResumePage = () => {
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
					<h1 className="h2 text-center">My Resume</h1>
					<div className="bottom-line" />
					<p className="text-center my-3">Download my resume or view below</p>
					<div className="text-center">
						<Link href="BrianHollandResume.pdf" passHref download>
							<a target="_blank">
								<Button variant="outline-primary">Download Resume</Button>
							</a>
						</Link>
					</div>
				</section>

				<section id="resume-print" className="pb-2 px-3">
					<h2 className="h4">Brian Holland</h2>
					<p>
						Phone: 707-761-7595<br />
						Email: Brian.Holland.PR@gmail.com<br />
						Website:
						<Link href="https://www.brian-holland.com" passHref>
							<a target="_blank"> https://www.brian-holland.com</a>
						</Link>
						<br />
						Project Portfolio:
						<Link href="https://github.com/Brian-Holland" passHref>
							<a target="_blank"> https://github.com/Brian-Holland</a>
						</Link>
						<br />
					</p>
					<hr id="resume-hr" />
					<h3 className="h5">Projects</h3>
					<ul className="resume-ul">
						<li>
							<strong>
								<em>AppTracker</em>
							</strong>{' '}
							: Full-stack application using React, Node, Express, and MongoDB allowing users to create
							and login to an account to save all their job application information using full CRUD
							commands and a RESTful API. <br />
							<strong>Deployment</strong>:
							<Link href="https://apptracker-app.herokuapp.com/" passHref>
								<a target="_blank"> https://apptracker-app.herokuapp.com/</a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/AppTracker" passHref>
								<a target="_blank"> https://github.com/Brian-Holland/AppTracker</a>
							</Link>
							<br />
							<br />
						</li>
						<li>
							<strong>
								<em>Personal Portfolio</em>
							</strong>{' '}
							: Portfolio website created using NextJS, React, and React Bootstrap to display my personal
							portfolio of projects, as well a resume, about me section, social links, contact form, and a
							custom dynamic 404 error page.<br />
							<strong>Deployment</strong>:
							<Link href="https://www.brian-holland.com/ " passHref>
								<a target="_blank"> https://www.brian-holland.com/ </a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/NextJS_Website" passHref>
								<a target="_blank"> https://github.com/Brian-Holland/NextJS_Website</a>
							</Link>
							<br />
							<br />
						</li>
						<li>
							<strong>
								<em>Magic 8 Ball</em>
							</strong>{' '}
							: Classic Magic 8 Ball created using React. Users can ask a question and/or shake the ball
							to trigger a shaking animation and a slow fade in of one of the original 20 predictions
							inside the ball. <br />
							<strong>Deployment</strong>:
							<Link href="https://www.askthemagic8ball.com" passHref>
								<a target="_blank"> https://www.askthemagic8ball.com</a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/React_Magic_8_Ball_Hooks" passHref>
								<a target="_blank"> https://github.com/Brian-Holland/React_Magic_8_Ball_Hooks</a>
							</Link>
							<br />
						</li>
					</ul>
					<br />
					<h3 className="h5">Skills</h3>
					<ul className="resume-ul skill-ul">
						<li>JavaScript</li>
						<li>React/Redux</li>
						<li>Node</li>
						<li>MongoDB</li>
						<li>HTML</li>
						<li>CSS & SASS</li>
						<li>Python</li>
						<li>MySQL</li>
						<li>Git</li>
						<li>Documentation</li>
						<li>Deployment</li>
						<li>Accessibility</li>
					</ul>
					<br />
					<h3 className="h5">Work History</h3>
					<h4 className="h6">Aladdin Bail Bonds</h4>
					<ul className="job-ul">
						<li>Senior Underwriter</li>
						<li>March 2015 - March 2020</li>
					</ul>
					<p>
						Managed the office overnight, directed a small team of support staff daily as part of team of
						underwriters that consistently broke monthly and yearly sales records.
					</p>
					<br />
					<h4 className="h6">Brenden Theatres</h4>
					<ul className="job-ul">
						<li>Manager</li>
						<li>October 2008 - March 2015</li>
					</ul>
					<p>
						Managed a team of 30+ employees, responsible for day-to-day operations including customer
						service, staff training, promotion recommendations, nightly grosses, inventory control, and
						general theater operations.
					</p>
					<br />
					<h3 className="h5">Education</h3>
					<h4 className="h6">CSU Sacramento</h4>
					<p>
						<em>B.A. Communication Studies, Public Relations </em>
					</p>
				</section>
			</Container>
		</div>
	);
};

export default ResumePage;
