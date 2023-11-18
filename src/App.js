import { useEffect } from 'react';
import './App.css';
import HomePage from './HomePage';
import ListReservation from './component/ListReservation';
function App() {
  useEffect(() => {
    fetch('http://localhost:8080/api/reservation/reservations', {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + btoa('user:resto'),
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // Traitement des données
})
.catch(error => console.error('Error retrieving reservations:', error));
 })
  return (
    <div className="App">
      <h1>Mon Application React</h1>
      {/* Vous pouvez ajouter d'autres composants ou du contenu ici */}
      <HomePage/>
      <ListReservation/>
    </div>
  );
}

export default App;
