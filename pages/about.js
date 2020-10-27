import { Container } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<Container>
			<section id="about-bio" className="py-5 mt-5">
				<h2 className="text-center">About Me</h2>
				<div className="bottom-line mb-3" />
				<div className="about-info my-5">
					<img className="bio-image rounded" src="/imgs/profile.jpg" alt="profile picture" />
					<div className="bio">
						<h5 className="text-center mb-3">A Quick Background</h5>
						<p>
							My name is Brian Holland and I am a software engineer in the San Francisco bay area. I
							taught myself full stack engineering from the fundamentals to building applications while
							battling my way back from disability. I spent every bit of energy I had over the course of
							more than a year learning as much as I could to achieve my dream career.
						</p>
						<p>
							My primary focus has been on JavaScript solutions on both the frontend and backend. Most of
							my projects have utilized the MERN stack (MongoDB, Express, React, Node), but I have also
							been exposed to Java, Python, MySQL, and React Native. I am constantly learning and looking
							forward to working with a team that strives to make an impact. I can learn any language or
							technology that is best fit for the job.
						</p>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default AboutPage;
