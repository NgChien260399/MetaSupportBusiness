import HomePage from './pages/HomePage/HomePage';
import FormBusinessPage from './pages/FormBusinessPage/FormBusinessPage';
import { Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form-business" element={<FormBusinessPage />} />
    </Routes>
    </>
  );
}

export default App;
