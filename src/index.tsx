import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

//General Styles
import './styles.css';

//Components
import App from './components/App';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
