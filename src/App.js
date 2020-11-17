
import Button from 'react-bootstrap/Button';

import ScrollableTabs  from './Components/ScrollableTabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ScrollableTabs></ScrollableTabs>
      </header>
    </div>
  );
}

function Wrapper(){
  


  console.log("render wrapper")
  return <Button>Click me</Button>;
}


export default App;
