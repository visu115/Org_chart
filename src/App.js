import './App.css';
import OrganizationalChart from './org/orgChart1';
import employees from './org/data';

function App() {

  return (
    <div className="App">
      <OrganizationalChart data={employees} />
    </div>
  );
}

export default App;
