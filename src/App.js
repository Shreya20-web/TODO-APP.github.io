import ToDo from './todo'
import Inprogress from './Inprogress'
import Completed from './completed'

function App() {
  return (
    <div className="App">
       <div className="app-top">
                    <input type="text" placeholder="Search.." name="search" className='search'/>
                    <h2 className='user'><i class="fas fa-user-alt user-img" />Hi User!</h2>
                    
            </div>
      <h1 className='main'>PROJECTS</h1>
      <ToDo />
      <Inprogress />
      <Completed />
    </div>
  );
}

export default App;
