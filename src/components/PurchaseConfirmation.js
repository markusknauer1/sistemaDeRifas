import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PurchaseConfirmation() {
  const { id } = useParams();
  const query = useQuery();
  const navigate = useNavigate();
  const quantity = query.get('quantity');

  const handlePurchase = () => {
    navigate(`/`);
  };

  return (
    <div className='cardRif'>
      <h1>Confirmação de Compra</h1>
      <p>Rifa: {id}</p>
      <p>Quantidade de Bilhetes: {quantity}</p>
      <p>Obrigado pela sua compra!</p>
      <button onClick={handlePurchase}>voltar ao inicio</button>
    </div>
  );
}

export default PurchaseConfirmation;
