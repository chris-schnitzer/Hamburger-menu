import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
	return(
		<>
			<Header />
			<Outlet />
		</>
	)
}