import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

export default function Custom404() {
	const router = useRouter();

	const nameOfPage = router.asPath.slice(1);

	return (
		<Container fluid>
			<section>
				<div class="stars" />
				<div class="twinkling" />

				<div style={{ position: 'relative' }}>
					<h4 className="text-center sentence">
						<Typewriter
							onInit={(typewriter) => {
								console.log(typewriter);
								typewriter
									.callFunction(() => {
										console.log('String typed out!');
									})
									.pauseFor(2300)
									.typeString(`${nameOfPage} was The Imposter`)
									.start();
							}}
						/>
					</h4>

					<div className="move">
						<h2 className="spin">404</h2>
					</div>
				</div>
			</section>
		</Container>
	);
}
