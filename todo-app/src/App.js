import ToDo from './todo'
import Inprogress from './Inprogress'
import Completed from './completed'

function App() {
  return (
    <div className="App">
      <h1 className='main'>PROJECTS</h1>
      <ToDo />
      <Inprogress />
      <Completed />
    </div>
  );
}

export default App;
