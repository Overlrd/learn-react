import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App(){
  const [Visible, setvisible] = useState(false)
  return ( 
  <div>
        <Alert visible={Visible} onclose={()=>{setvisible(false), console.log('not visible')}}>
          I'm an alert hehehe ! 
        </Alert>
        <Button text="Click my ass !" onClick={()=>{setvisible(true)}}></Button>
  </div>
  );
}



export default App