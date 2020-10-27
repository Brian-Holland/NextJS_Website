import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';

const ResumePage = () => {
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
				<meta property="og:image" content="imgs/favicon.jpg" />
				<meta property="og:url" content="https://www.brian-holland.com" />
				<title>Brian Holland | Software Engineer</title>
			</Head>
			<Container>
				<section className="py-5 mt-5">
					<h2 className="text-center">Resume</h2>
					<div className="bottom-line" />
					<p className="text-center my-3">Download my resume or view below</p>
					<div className="text-center">
						<Link href="BrianHollandResume.pdf" target="_blank" passHref download>
							<a>
								<Button variant="outline-primary">Download Resume</Button>
							</a>
						</Link>
					</div>
				</section>

				<section className="pb-2 px-5">
					<h4>Brian Holland</h4>
					<p>
						Phone: 707-761-7595<br />
						Email: Brian.Holland.PR@gmail.com<br />
						Website:
						<Link href="https://www.brian-holland.com" passHref>
							<a> https://www.brian-holland.com</a>
						</Link>
						<br />
						Project Portfolio:
						<Link href="https://github.com/Brian-Holland" passHref>
							<a> https://github.com/Brian-Holland</a>
						</Link>
						<br />
					</p>
					<hr id="resume-hr" />
					<h5>Projects</h5>
					<ul className="resume-ul">
						<li>
							<strong>
								<em>Contact Keeper</em>
							</strong>{' '}
							: Full-stack application using React, Node, Express, and MongoDB to allow users to create an
							account, validate and authenticate logins, and store and search custom created contacts
							using full CRUD commands.<br />
							<strong>Deployment</strong>:
							<Link href="https://contactkeeper-react-app.herokuapp.com/" passHref>
								<a> https://contactkeeper-react-app.herokuapp.com/</a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/Contact-Keeper" passHref>
								<a> https://github.com/Brian-Holland/Contact-Keeper</a>
							</Link>
							<br />
							<br />
						</li>
						<li>
							<strong>
								<em>GitHub Finder</em>
							</strong>{' '}
							: Responsive React application utilizing the GitHub API to search for GitHub user
							information and displays the API response in a custom profile component.<br />
							<strong>Deployment</strong>:
							<Link href="https://github-find-app.netlify.app" passHref>
								<a> https://github-find-app.netlify.app</a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/GitHub-Finder" passHref>
								<a> https://github.com/Brian-Holland/GitHub-Finder</a>
							</Link>
							<br />
							<br />
						</li>
						<li>
							<strong>
								<em>Twitter Post Bot</em>
							</strong>{' '}
							: JavaScript bot utilizing Cheerio to access the Twitter Developer API and pull a
							pre-written post from a Google Sheets document to post daily using Google Cloud Platform’s
							Cloud Scheduler.<br />
							<strong>Deployment</strong>:
							<Link href="https://twitter.com/Dev_Quote_Bot" passHref>
								<a> https://twitter.com/Dev_Quote_Bot</a>
							</Link>
							<br />
							<strong>Repo</strong>:
							<Link href="https://github.com/Brian-Holland/Twitter_Post_Bot" passHref>
								<a> https://github.com/Brian-Holland/Twitter_Post_Bot</a>
							</Link>
							<br />
						</li>
					</ul>
					<br />
					<h5>Skills</h5>
					<ul className="resume-ul skill-ul">
						<li>JavaScript</li>
						<li>React</li>
						<li>AJAX</li>
						<li>HTML</li>
						<li>CSS & SASS</li>
						<li>Express</li>
						<li>Node</li>
						<li>MongoDB</li>
						<li>Git/Github</li>
						<li>Documentation</li>
						<li>Deployment</li>
						<li>Accessibility</li>
					</ul>
					<br />
					<h5>Work History</h5>
					<h6>Aladdin Bail Bonds</h6>
					<ul className="job-ul">
						<li>Senior Underwriter</li>
						<li>March 2015 - March 2020</li>
					</ul>
					<p>
						Managed the office overnight, directed a small team of support staff daily as part of team of
						underwriters that consistently broke monthly and yearly sales records.
					</p>
					<br />
					<h6>Brenden Theatres</h6>
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
					<h5>Education</h5>
					<h6>CSU Sacramento</h6>
					<p>
						<em>B.A. Communication Studies, Public Relations </em>
					</p>
				</section>
			</Container>
		</div>
	);
};

export default ResumePage;
