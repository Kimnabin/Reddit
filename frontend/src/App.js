import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Post/MakePost';
import Posts from './Components/Post/Post'


function App() {
  const [edit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? <EditPage setEdit={setEdit} /> 
      : !edit && !isOpenPost ? (
        <>
        <Header setEdit={setEdit} />
        <div className='post-container'>
          <Posts />
        </div>
        <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
        <Header setEdit={setEdit} />
        <MakePost setOpen={setOpen} />
        </>
      )}

      {/* display loading and error message */}
      {pending && <p className='loading'> loading... </p>}
      {!edit && error && (
        <p className='error'> Error when fetching data from server!!! </p>
      )}
    </div>
  );
}

export default App;
