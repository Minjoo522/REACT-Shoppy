import React, { useState } from 'react';

export default function NewProducts() {
  const [imgFile, setImgFile] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [info, setInfo] = useState('');
  const [options, setOptions] = useState('');

  const handleFileChange = (e) => {
    setImgFile(e.target.value);
  };

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleOptionsChange = (e) => {
    setOptions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='file' name='file' id='file' value={imgFile} onChange={handleFileChange} />
      <input
        type='text'
        name='itemName'
        id='itemName'
        value={itemName}
        placeholder='제품명'
        onChange={handleItemNameChange}
      />
      <input type='number' name='price' id='price' value={price} placeholder='가격' onChange={handlePriceChange} />
      <input
        type='text'
        name='category'
        id='category'
        value={category}
        placeholder='카테고리'
        onChange={handleCategoryChange}
      />
      <input type='text' name='info' id='info' value={info} placeholder='제품 설명' onChange={handleInfoChange} />
      <input
        type='text'
        name='options'
        id='options'
        priceholder='옵션들(콤마(,)로 구분)'
        value={options}
        onChange={handleOptionsChange}
      />
      <button type='submit'>제품 등록</button>
    </form>
  );
}
