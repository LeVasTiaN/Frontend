import React, { useState } from 'react';

function Image() {
    const initialImage = "https://feerie.com.ua/sites/default/files/styles/for_blog/public/2019-03/s1200%20%2835%29.jpeg?itok=Hz5WaTO6";
    
    const [images, setImages] = useState([{id: Date.now(), src: initialImage }]);
    const [imgWidth, setImgWidth] = useState(400);

    const handleAdd = () => {
        document.getElementById('uploadImage').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newImage = {
                id: Date.now(),
                src: URL.createObjectURL(file)
            };
            setImages([...images, newImage]);
        }
    };

    const handleResize = (direction) => {
        if (direction === 1) setImgWidth(prev => prev + 10);
        else setImgWidth(prev => Math.max(50, prev - 10));
    };

    const handleDelete = () => {
        if (images.length > 0) {
            setImages(images.slice(0, -1));
        }
    };

    return (
        <div>
            <div className="images">
                {images.map(img => (
                    <img 
                        key={img.id}
                        src={img.src} 
                        alt="Gallery Item" 
                        style={{ width: `${imgWidth}px` }} 
                    />
                ))}
            </div>

            <div className="buttons">
                <input type="file" id="uploadImage" accept="image/*" onChange={handleFileChange}/>
                <button onClick={handleAdd}>Add</button>
                <button onClick={() => handleResize(1)}>Increase</button>
                <button onClick={() => handleResize(0)}>Decrease</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Image;