import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([])

  const addTodo = (event) => {
    event.preventDefault();

      if (title === ''|| description === '') {
        alert("Input fields cannot be empty")
      }else{
        setTodo([...todo, {
          title,
          description,
          id: Date.now()
        }])
      }
    setTitle('') 
    setDescription('') 
  }

  const deleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]); 
  }

  const editTodo = (index) => {
    const updatedValue = prompt('Enter updated value');
    if (updatedValue === '') {
      alert('Updated value is empty');
      return;
    }
    todo[index].title = updatedValue;
    setTodo([...todo]); 
  }

  return (
    <>
      <h1 style={{marginTop:'-9px'}}>To-Do App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="title"
          placeholder='Enter Title of your Task'
          style={{ height: '30px', width: '350px', border: '2px solid white', borderRadius: '10px', textAlign: 'center' }}
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        /><br /><br />
        <input
          type="text"
          name="description"
          placeholder='Enter your Task Description'
          style={{ height: '30px', width: '500px', border: '2px solid white', borderRadius: '10px', textAlign: 'center' }}
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        /><br /><br />
        <button type="submit" style={{ backgroundColor: '#1E90FF', color: 'black' }} id="submit">Submit</button>
      </form>

      <div>
        {todo.length > 0 ? todo.map((item, index) => {
          return (
            <div style={{
              backgroundColor:'white',
              color:'black',
              margin: '10px',
              marginTop:'40px',
              padding: '20px',
              border: '2px solid black',
              borderRadius: '20px'
            }} key={item.id}>
              <h2>Task:</h2>
              <p><b>Title:</b> {item.title}</p>
              <p><b>Description:</b> {item.description}</p>
              <button onClick={() => deleteTodo(index)} style={{marginRight:'10px', width:'100px', backgroundColor:'#333333'}} >Delete</button>
              <button onClick={() => editTodo(index)} style={{width:'100px', backgroundColor:'green'}}>Edit</button>
            </div>
          )
        }) : <h2>No Tasks for now!</h2>}
      </div>
    </>
  )
}

export default App