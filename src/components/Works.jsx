import { useState } from 'react';

function Works() {
  const images = [
    `${import.meta.env.BASE_URL}works/(52).jpg`,
    `${import.meta.env.BASE_URL}works/DSC00297.jpg`,
    `${import.meta.env.BASE_URL}works/CXR04014.jpg`,
    `${import.meta.env.BASE_URL}works/CXR07946.jpg`,
    `${import.meta.env.BASE_URL}works/CXR04199.jpg`,
    `${import.meta.env.BASE_URL}works/微信图片_20260618203506_1210_999.jpg`,
    `${import.meta.env.BASE_URL}works/CXR08533.jpg`,
    `${import.meta.env.BASE_URL}works/CXR04772.jpg`,
    `${import.meta.env.BASE_URL}works/R0001718.jpg`,
    `${import.meta.env.BASE_URL}works/CXR00093.jpg`,
    `${import.meta.env.BASE_URL}works/CXR02806.jpg`,
    `${import.meta.env.BASE_URL}works/CXR07323.jpg`,
    `${import.meta.env.BASE_URL}works/CXR04703.jpg`,
    `${import.meta.env.BASE_URL}works/1.jpg`,
    `${import.meta.env.BASE_URL}works/CXR00469.jpg`,
    `${import.meta.env.BASE_URL}works/CXR00968.jpg`,
    `${import.meta.env.BASE_URL}works/DSC02982.jpg`,
    `${import.meta.env.BASE_URL}works/CXR09489.jpg`,
    `${import.meta.env.BASE_URL}works/CXR08593_副本.jpg`,
    `${import.meta.env.BASE_URL}works/CXR06535.jpg`,
    `${import.meta.env.BASE_URL}works/CXR02034.jpg`,
    `${import.meta.env.BASE_URL}works/IMG_6907.jpg`,
    `${import.meta.env.BASE_URL}works/CXR08288.jpg`,
    `${import.meta.env.BASE_URL}works/CXR05130.jpg`,
    `${import.meta.env.BASE_URL}works/CXR06938.jpg`,
  ];

  const [loaded, setLoaded] = useState(new Set());

  const handleLoad = (idx) => {
    setLoaded((prev) => new Set(prev).add(idx));
  };

  return (
    <section id="works" className="section works-section">
      <div className="works-header">
        <h2 className="works-title">我的作品</h2>
      </div>

      <div className="works-masonry">
        {images.map((src, idx) => (
          <div className="works-item" key={idx}>
            <div className="works-item-img-wrap">
              <img
                src={src}
                alt=""
                loading="lazy"
                onLoad={() => handleLoad(idx)}
                style={{ opacity: loaded.has(idx) ? 1 : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;