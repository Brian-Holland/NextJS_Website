import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

const ContactPage = () => {
	return (
		<section className="py-5 mt-5">
			<Container>
				<h2 className="text-center">Contact Me</h2>
				<div className="bottom-line" />
				<p className="text-center my-3">
					You can use the form below to contact me.
					<br />
					<br />
				</p>
				<Form name="contact v1" method="POST" data-netlify="true" onSubmit="submit">
					<input type="hidden" name="form-name" value="contact v1" />
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
							placeholer="Write you message here."
							name="message"
						/>
					</Form.Group>
					<Button type="submit" variant="outline-primary">
						Submit Message
					</Button>
				</Form>
			</Container>
		</section>
	);
};

export default ContactPage;
