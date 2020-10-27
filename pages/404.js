import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

export default function Custom404() {
	const router = useRouter();

	const nameOfPage = router.asPath.slice(1);

	return (
		<Container fluid>
			<section className="space">
				<div className="sentence">
					<h4 className="text-center mb-5">{nameOfPage} was The Imposter</h4>
				</div>
				<div className="move">
					<h2 className="spin">404</h2>
				</div>
			</section>
		</Container>
	);
}
