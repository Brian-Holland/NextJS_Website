import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(
		() => {
			const handleRouteChange = (url) => {
				gtag.pageview(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		},
		[ router.events ]
	);

	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
		</div>
	);
};

export default App;
