
import './App.css';
import Foot from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>React Context API, Theme Context</h1>
      <Form/>
      <Foot/>
    </div>
  );
}

export default App;
