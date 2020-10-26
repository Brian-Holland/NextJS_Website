import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
	return (
		<header>
			<Container>
				<Navbar id="navadjusted" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<Link href="/" passHref>
								<Nav.Link className="px-md-4 tw">Home</Nav.Link>
							</Link>
							<Link href="/about" passHref>
								<Nav.Link className="px-md-4 tw">About</Nav.Link>
							</Link>
							<Link href="/projects" passHref>
								<Nav.Link className="px-md-4 tw">Projects</Nav.Link>
							</Link>
							<Link href="/resume" passHref>
								<Nav.Link className="px-md-4 tw">Resume</Nav.Link>
							</Link>
							<Link href="/contact" passHref>
								<Nav.Link className="px-md-4 tw">Contact</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
