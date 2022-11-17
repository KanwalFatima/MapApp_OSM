import React, {useState} from 'react';
import SearchBox from './SearchBox';
import Maps from './Maps';


function App(){
  const [selectPosition, setSelectPosition] = useState(null);

  return(
    <div 
    style={{
    display:'flex',
    flexDirection:'row',
    width:'100vw',
    height:'100vh'
    }}>

      <div style=
      {{ width:'50vw', height:'100vh'}}>
           <Maps selectPosition={selectPosition}/>
      </div>

      <div style={{ width:'50vw',border:'2px solid lightgreen'}}>
           <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>

      



    </div>
  );
}
export default App