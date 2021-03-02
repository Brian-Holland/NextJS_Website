import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import NavBar from '../components/NavBar';

const App = ({ Component, pageProps }) => {
	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
		</div>
	);
};

export default App;
