import Head from 'next/head';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

const ContactPage = () => {
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
			<section className="py-5 mt-5">
				<Container>
					<h2 className="text-center">Contact Me</h2>
					<div className="bottom-line" />
					<p className="text-center my-3">
						You can use the form below to contact me.
						<br />
						<br />
					</p>
					<Form
						name="contact v1"
						method="POST"
						data-netlify="true"
						onSubmit="submit"
						data-netlify-honeypot="bot-field"
					>
						<input type="hidden" name="form-name" value="contact v1" />
						<div hidden>
							<label>
								Don't fill this out (bot catching only)
								<input name="bot-field" />
							</label>
						</div>
						<Row>
							<Col md={4}>
								<Form.Group>
									<Form.Label>Name</Form.Label>
									<Form.Control
										required
										size="lg"
										type="text"
										placeholder="Enter your name"
										name="first-name"
									/>
								</Form.Group>
							</Col>
							<Col md={4}>
								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control
										required
										size="lg"
										type="email"
										placeholder="Enter your email"
										name="email"
									/>
								</Form.Group>
							</Col>
							<Col md={4}>
								<Form.Group>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										required
										size="lg"
										type="text"
										placeholder="Enter your phone number"
										name="phone"
									/>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group>
							<Form.Label>Message</Form.Label>
							<Form.Control
								required
								as="textarea"
								rows="4"
								placeholder="Write you message here"
								name="message"
							/>
						</Form.Group>
						<Button type="submit" variant="outline-primary">
							Submit Message
						</Button>
					</Form>
				</Container>
			</section>
		</div>
	);
};

export default ContactPage;
