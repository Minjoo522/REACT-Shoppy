import React, { useState } from 'react';
import { uploadImage } from '../service/uploader';
import { addNewProduct } from '../service/firebase';

export default function NewProducts() {
  const [file, setFIle] = useState();
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFIle(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url).then(() => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <main className='w-full flex flex-col items-center'>
      <h2 className='font-bold text-2xl mb-8'>신제품 등록</h2>
      {success && <p>✅ {success}</p>}
      <form className='flex flex-col gap-4 w-6/12 drop-shadow-md' onSubmit={handleSubmit}>
        {file && <img src={URL.createObjectURL(file)} alt='선택된 이미지 사진' />}
        <input type='file' accept='image/*' name='file' id='file' required onChange={handleChange} />
        <input
          type='text'
          name='itemName'
          id='itemName'
          value={product.itemName ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          id='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          id='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='info'
          id='info'
          value={product.info ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          id='options'
          placeholder='옵션들(콤마(,)로 구분)'
          value={product.options ?? ''}
          required
          onChange={handleChange}
        />
        <button
          type='submit'
          disabled={isUploading}
          className='px-4 py-1.5 bg-brand text-white rounded w-fit m-auto mt-4 text-xl font-bold'>
          {isUploading ? '업로드 중...' : '제품 등록하기'}
        </button>
      </form>
    </main>
  );
}
