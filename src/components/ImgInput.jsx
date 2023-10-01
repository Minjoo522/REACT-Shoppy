import React from 'react';

export default function ImgInput({ onImageChange }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageData = event.target.result;
        onImageChange(imageData);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input type='file' accept='image/*' onChange={handleImageChange} />
    </>
  );
}
