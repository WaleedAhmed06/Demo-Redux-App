import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditCustomer from '../screen/editCustomer';
import AddCustomer from '../screen/addCustomer';
import Dashboard from '../screen/dashboard';
import DelCustomer from '../screen/delCustomer';

export default function AppRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="edit/:id" element={<EditCustomer />} />
          <Route path="add" element={<AddCustomer />} />
          <Route path="delete/:id" element={<DelCustomer />} />
        </Routes>
      </Router>
    </>
  );
}
