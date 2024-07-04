import React, { useState } from 'react';
import ProductListView from './features/products/ProductListView';
import ProductForm from './features/products/ProductForm';

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
    setIsEdit(true);
  };

  return (
    <div>
      <ProductForm productToEdit={productToEdit} isEdit={isEdit} />
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
    </div>
  );
};

export default App;
