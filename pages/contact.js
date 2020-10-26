import { Container } from 'react-bootstrap';

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
				<form name="contact" method="POST">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="firstname" id="firstname" />
						<label htmlFor="yourname">Your Name:</label> <br />
						<input type="text" name="name" id="yourname" />
					</p>
					<p>
						<label htmlFor="youremail">Your Email:</label> <br />
						<input type="email" name="email" id="youremail" />
					</p>
					<p>
						<label htmlFor="yourmessage">Message:</label> <br />
						<textarea name="message" id="yourmessage" />
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</Container>
		</section>
	);
};

export default ContactPage;
