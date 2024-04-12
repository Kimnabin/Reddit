import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import { useSelector } from 'react-redux';

function App() {
  const [edit, setEdit] = useState(false)
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {pending && <p className='loading'> loading... </p>}
      {!edit && error && (
        <p className='error'> Error when fetching data from server!!! </p>
      )}
    </div>
  );
}

export default App;
