import React, { useState } from 'react';
import ImgInput from '../components/ImgInput';
import { uploadImage } from '../service/uploader';

export default function NewProducts() {
  const [imgFile, setImgFile] = useState(null);
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [info, setInfo] = useState('');
  const [options, setOptions] = useState('');

  const handleImageChange = (imageData) => {
    setImgFile(imageData);
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
    uploadImage(imgFile).then((url) => {
      console.log(url);
    });
  };

  return (
    <main className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-2xl mb-8'>신제품 등록</h2>
      <form className='flex flex-col gap-4 w-6/12 drop-shadow-md' onSubmit={handleSubmit}>
        {imgFile && <img src={imgFile} alt='선택된 이미지 사진' />}
        <ImgInput onImageChange={handleImageChange} />
        <input
          type='text'
          name='itemName'
          id='itemName'
          value={itemName}
          placeholder='제품명'
          onChange={handleItemNameChange}
        />
        <input type='text' name='price' id='price' value={price} placeholder='가격' onChange={handlePriceChange} />
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
          placeholder='옵션들(콤마(,)로 구분)'
          value={options}
          onChange={handleOptionsChange}
        />
        <button type='submit' className='px-4 py-1.5 bg-brand text-white rounded w-fit m-auto mt-4 text-xl font-bold'>
          제품 등록
        </button>
      </form>
    </main>
  );
}
