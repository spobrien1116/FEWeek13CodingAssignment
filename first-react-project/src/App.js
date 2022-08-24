import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
