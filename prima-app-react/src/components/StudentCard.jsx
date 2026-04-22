import './StudentCard.css';

export function StudentCard({ studente }) {
 
  const handleDelete = () => {
    console.log(`Elimino lo studente ${studente.nome}`);
  };

  return (
    <div className="user-card" id={`card-${studente.id}`}>
      <div className="avatar-container">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${studente.seed}`} 
          alt="Avatar" 
        />
      </div>
      <div className="user-info">
        <h2>{studente.nome}</h2>
        <p>Classe: <strong>{studente.classe}</strong></p>
        <button className="btn-delete" onClick={handleDelete}>
          Elimina
        </button>
      </div>
    </div>
  );
}