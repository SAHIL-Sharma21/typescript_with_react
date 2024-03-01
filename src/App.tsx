import './App.css';
import Button from './components/Button'; //Button is aa functional component


function App() {
  return (
    <div className="App">
      <h1>TypeScript with react</h1>
      <Button text='Click btn' onClick={() => console.log("Button 1 clicked!")} />
      <Button text='another way' onClick={() => alert("Button 2 Clicked!")}/>

      {/* onclick optional example */}
      <Button text='btn 3 optional onclick'/>

      {/* multiple types and boolean  */}
      <Button text='btn 4' isClickable = {true} text2= {25}/> 
    </div>
  );
}

export default App;