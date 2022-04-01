// components
import Values from './components/Values';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';
// // Styling \\ \\
// Bootstrap
import Container from 'react-bootstrap/Container';
// Personal CSS
import './App.css';
// AppProvider
import { AppProvider } from './context/AppContext';

function App() {

	return (
		<AppProvider>
			<div className="App">
				<h1 style={{backgroundColor: 'green', padding: '15px'}}>$$$ Budget Planner $$$</h1>
				<header className='App-header'>
					<Container>
						<div>
							<Values className='mt-3' />
						</div>
						<div className='mt-3'>
							<Expenses className='mt-3' />
						</div>
						<div className='mt-3'>
							<AddExpense className='mt-3' />
						</div>
					</Container>
				</header>
			</div>
		</AppProvider>
	);
}

export default App;
