import './App.css';
import Button from './components/Button'; //Button is aa functional component
import Button2 from './components/Button2';
import MyForm from './components/Form';


function App() {
  return (
    <>
    <div className="App">
      <h1>TypeScript with react</h1>
      <Button text='Click btn' onClick={() => console.log("Button 1 clicked!")} />
      <Button text='another way' onClick={() => alert("Button 2 Clicked!")}/>

      {/* onclick optional example */}
      <Button text='btn 3 optional onclick'/>

      {/* multiple types and boolean  */}
      <Button text='btn 4' isClickable = {true} text2= {25} onClick={() => alert('btn 4 clicked!')}/> 

      <Button text='btn 5'/>
    </div>

      {/* rendering button2 component here  */}
      <div>
        {/* <Button2 text='comp 2'  isClickable = {true}/> */}
        {/* string button  */}
        <Button2 text='strBtn'  isClickable = {false}/>
      </div>

    {/* handling form using TS  */}
    <div>
        <MyForm />
    </div>
    </>
  );
}

export default App;