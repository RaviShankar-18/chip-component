import React, { useState, useRef, useEffect } from 'react';

const ImageFilterComponent = () => {
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [sepia, setSepia] = useState(0);
  const [filteredImage, setFilteredImage] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    applyFilters();
  }, [brightness, contrast, sepia]);

  const applyFilters = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Apply brightness
    ctx.globalAlpha = brightness;

    // Apply contrast
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = (data[i] - 128) * contrast + 128;
      data[i + 1] = (data[i + 1] - 128) * contrast + 128;
      data[i + 2] = (data[i + 2] - 128) * contrast + 128;
    }
    ctx.putImageData(imageData, 0, 0);

    // Apply sepia
    ctx.fillStyle = `rgba(112, 66, 20, ${sepia})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setFilteredImage(canvas.toDataURL());
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filteredImage;
    link.download = 'filtered_image.png';
    link.click();
  };

  return (
    <div>
      <label htmlFor="brightness">Brightness:</label>
      <input
        type="range"
        id="brightness"
        min="0"
        max="2"
        step="0.1"
        value={brightness}
        onChange={(e) => setBrightness(parseFloat(e.target.value))}
      />

      <label htmlFor="contrast">Contrast:</label>
      <input
        type="range"
        id="contrast"
        min="0"
        max="2"
        step="0.1"
        value={contrast}
        onChange={(e) => setContrast(parseFloat(e.target.value))}
      />

      <label htmlFor="sepia">Sepia:</label>
      <input
        type="range"
        id="sepia"
        min="0"
        max="1"
        step="0.1"
        value={sepia}
        onChange={(e) => setSepia(parseFloat(e.target.value))}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = () => (imageRef.current.src = reader.result);
          reader.readAsDataURL(e.target.files[0]);
        }}
      />

      {filteredImage && <img src={filteredImage} alt="Filtered" ref={imageRef} />}

      <button onClick={handleDownload}>Download Filtered Image</button>
    </div>
  );
};

export default ImageFilterComponent;
