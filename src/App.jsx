import React, { useState } from 'react';
import ProductListView from './features/products/ProductListView';
import ProductForm from './features/products/ProductForm';

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
    setIsEdit(true);
  };

  const resetForm = () => {
    setProductToEdit(null);
    setIsEdit(false);
  }

  return (
    <div>
      <ProductForm productToEdit={productToEdit} isEdit={isEdit} resetForm={resetForm} />
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
    </div>
  );
};

export default App;
