import { studente } from './Data'
import { StudentCard } from './StudentCard';
import './App.css'; 


function App() {
  return (
    
    <div className="app-container">
     
         {studente.map((s) => (
        <StudentCard key={s.id} studente={s} />
      ))}
    </div>
  );
}

export default App;