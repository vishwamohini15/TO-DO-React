import { useState } from 'react';
import './App.css';

function App() {
  const[title, settitle]=useState("")
  const[discription, setdiscription]=useState("")
  const [maintask, setmaintask] = useState([])

function submithandler(e){
  e.preventDefault()
  
  setmaintask([...maintask, {title,discription}])
  console.log(maintask);
  console.log("fgtre");
  console.log(title);
  console.log(discription);
  setdiscription("")
  settitle("")
}

const deletehandler=(i)=>{
let copytask=[...maintask]
copytask.splice(i,1)
setmaintask(copytask)
}

let renderTask=<h2>NO Task Available</h2>
if (maintask.length>0) {
  renderTask=maintask.map((t,i)=>{
    return (
      <li  key={i} className='boxhuu'>
    <div  className='tastbox'>
      <h3>{t.title}</h3>
      <h5>{t.discription}</h5>
    </div>
    <button  onClick={deletehandler} className='dltbtn'>Delete</button>
    </li>
    );
    })
}

  return (
<>
<div  className='design'>
<h1>TO-DO-List</h1>
<form  onSubmit={submithandler}>
  <input type='text' placeholder='Enter your task' 
  value={title}
  onChange={(e)=>{
// console.log(e.target.value);
settitle(e.target.value)
  }}
  ></input>

  <input type='text' placeholder='Enter your description'
   value={discription}
   onChange={(e)=>{
 // console.log(e.target.value);
 setdiscription(e.target.value)
   }}
  ></input>

  <button className='btn'>button</button>

</form>
<hr></hr>
<div className='container'>
  <ul>
    {renderTask}
  </ul>
</div>

</div>
</>
  );
}

export default App;
