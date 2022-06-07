
import './App.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import {useState} from "react"

function App() {
  const [stageCount , setStageCount] = useState(0);
  

  return (
    <div className="App">
     <LeftContainer stageCount={stageCount} setStageCount={setStageCount}/>
     <RightContainer stageCount={stageCount}/>
    </div>
  );
}

export default App;
