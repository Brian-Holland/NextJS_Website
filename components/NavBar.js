import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';

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
							<div id="socials" className="d-flex mx-sm-5">
								<Link href="https://www.linkedin.com/in/brian-holland-software-developer/" passHref>
									<Nav.Link target="_blank" className="px-sm-3">
										<i className="fab fa-linkedin fa-2x" />
									</Nav.Link>
								</Link>
								<Link href="https://twitter.com/BrianHollandDev" passHref>
									<Nav.Link target="_blank" className="px-sm-3 mx-2">
										<i className="fab fa-twitter-square fa-2x" />
									</Nav.Link>
								</Link>
								<Link href="https://github.com/Brian-Holland" passHref>
									<Nav.Link target="_blank" className="px-sm-3">
										<i className="fab fa-github-square  fa-2x" />
									</Nav.Link>
								</Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default NavBar;
