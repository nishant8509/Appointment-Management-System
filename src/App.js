import AllAppointment from './Component/AllAppointment';
import AddAppointment from './Component/AddAppointment';
import EditAppointment from './Component/EditAppointment';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import AdminDashboard from './Component/AdminDashboard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/all" element={<AllAppointment />} />
        <Route path="/add" element={<AddAppointment />} />
        <Route path="/edit/:id" element={<EditAppointment />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
