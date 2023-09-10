import { useState } from 'react';
import './newproduct.css';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { addProducts } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';


export default function NewProduct() {

    const [product,setProduct] = useState({});
    const [file,setFile] = useState(null);
    const [cat,setCat] = useState([]);
    const [color,setColor] = useState([]);
    const [size,setSize] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProduct(prev => {
            return {...prev, [e.target.name]: e.target.value};
        })
    };

    const handleArray = (e) => {

        switch (e.target.name) {
            case 'category':
                setCat(e.target.value.split(","));
                console.log(cat);
                break;
            case 'color':
                setColor(e.target.value.split(","));
                console.log(color);
                break;
            case 'size':
                setSize(e.target.value.split(","));
                console.log(size);
                break;
            default:
                console.log(e.target.value);
                break;
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const StorageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(StorageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running")
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const uploadProduct = { ...product, img: downloadURL, categories: cat, size, color }
                    addProducts(uploadProduct, dispatch);
                });
            }
        )

    };

  return (
    <div className="newProduct">
        <h1 className="newProductTitle">Add Product</h1>
        <form className='newProductForm' onSubmit={handleSubmit}>
            <div className="newProductItem">
                <label>Product Image</label>
                <label id='imageLabel' htmlFor='file'>Choose Img</label>
                <input type='file' id='file' style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/>
            </div>
            <div className="newProductItem">
                <label>Product Title</label>
                <input name='title' type="text" placeholder='Title...' onChange={handleChange} />
            </div>
            <div className="newProductItem">
                <label>Product Description</label>
                <textarea name='desc' type="text" placeholder='Description...' onChange={handleChange} />
            </div>
            <div className="newProductItem">
                <label>Product Price</label>
                <input name='price' type="number" placeholder='Price...' onChange={handleChange} />
            </div>
            <div className="newProductItem">
                <label>Product Category</label>
                <input type="text" placeholder='Category...' name='category' onChange={(e) => handleArray(e)} />
            </div>
            <div className="newProductItem">
                <label>Product Color</label>
                <input type="text" placeholder='Color...' name='color' onChange={(e) => handleArray(e)} />
            </div>
            <div className="newProductItem">
                <label>Product Size</label>
                <input type="text" placeholder='Size...' name='size' onChange={(e) => handleArray(e)} />
            </div>
            <div className="newProductItem">
                <label>InStock</label>
                <select name='inStock' className='newProductSelect' id='active'>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="nuBtnWrapper">
              <button type='submit' className="newProductButton">Create</button>
            </div>
        </form>
    </div>
  )
}
