import React from 'react'
import '../styles/App.css';

const App = () => {
  const[state,setState] = useState('Marco');  
  const[changeVal,setChangeVal] = useState(false);
  const[val,setVal] = useState('Polo');
  return (
    <div id="main">
      <h1 id="marco-polo">{state}</h1>
      <button id="marco-polo-toggler" onClick={function(){
        setChangeVal(!changeVal);
        if(!changeVal){
          setState('Polo')
          setVal('Marco')
        }else{
          setState('Marco')
          setVal('Polo')
        }
      }}>{val}</button>
    </div>
  )
}


export default App;
