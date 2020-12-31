import Head from 'next/head';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
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
				<section id="about-bio" className="py-5 mt-5">
					<h1 className="text-center h2">About Me</h1>
					<div className="bottom-line" />
					<div className="about-info my-5">
						<img className="bio-image rounded" src="/imgs/profile.jpg" alt="profile picture" />
						<div className="bio">
							<h2 className="text-center mb-3 h5">A Quick Background</h2>
							<p>
								My name is Brian Holland and I am a software engineer in the San Francisco bay area. I
								taught myself full stack engineering from the fundamentals to building full stack
								applications while battling my way back from disability. I love creating applications
								just as much as I enjoy the challenge of solving problems.
							</p>
							<p>
								My primary focus has been on JavaScript solutions on both the frontend and backend. Most
								of my projects have utilized the MERN stack (MongoDB, Express, React, Node), but I have
								also been exposed to Java, Python, and MySQL. I am constantly learning and looking
								forward to working with a team that strives to make an impact. I can learn any language
								or technology that is best fit for the job.
							</p>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default AboutPage;
