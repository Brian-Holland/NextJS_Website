import '../styles/bootstrap.min.css';
import '../styles/styles.css';

import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
		</div>
	);
}
