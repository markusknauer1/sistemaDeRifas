import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RaffleList from '../components/RaffleList';
import RaffleDetail from '../components/RaffleDetail';
import TicketPurchase from '../components/TicketPurchase';
import PurchaseConfirmation from '../components/PurchaseConfirmation';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RaffleList />} />
        <Route path="/raffle/:id" element={<RaffleDetail />} />
        <Route path="/purchase/:id" element={<TicketPurchase />} />
        <Route path="/confirmation/:id" element={<PurchaseConfirmation />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;