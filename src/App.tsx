import './App.css';
import Button from './components/Button'; //Button is aa functional component


function App() {
  return (
    <div className="App">
      <h1>TypeScript with react</h1>
      <Button text='Click btn' />
      <Button text='another way'/>
    </div>
  );
}

export default App;