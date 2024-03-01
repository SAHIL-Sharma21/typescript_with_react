import './App.css';
import Button from './components/Button'; //Button is aa functional component


function App() {
  return (
    <div className="App">
      <h1>TypeScript with react</h1>
      <Button text='Click btn' onClick={() => console.log("Button 1 clicked!")} />
      <Button text='another way' onClick={() => alert("Button 2 Clicked!")}/>
    </div>
  );
}

export default App;