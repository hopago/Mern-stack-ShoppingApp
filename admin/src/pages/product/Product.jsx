import './product.css';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { publicRequest } from '../../requestMethods';


export default function Product() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [productStat,setProductStat] = useState([]);

  const product = useSelector(state=> state.product.products.find(product => product._id === productId));

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        
        const res = await publicRequest("orders/income?productId" + productId);

        const list = res.data.sort((a, b) => a._id - b._id);

        list.map(d =>
          setProductStat(prev => [
            ...prev,
            { name: MONTHS[d._id - 1], Sales: d.total },
          ]) 
        )

      } catch (err) {
        console.log(err);
      }
    }
    getStats();
  }, []);

  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className='productTitle'>Product</h1>
            <Link className='link' to="/newProduct">
              <button className="productAddButton">CREATE</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productStat} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img 
                      src={product.img}
                      alt="" 
                      className="productInfoImg" 
                    />
                    <span className="productName">{product.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">ID:</span>
                      <span className="productInfoValue">{product._id}</span>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">sales: </span>
                      <span className="productInfoValue">null</span>
                    </div>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                      <span className="productInfoKey">InStock:</span>
                      <span className="productInfoValue">{product.inStock.toString()}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label style={{color: "white"}}>Name</label>
                    <input type="text" placeholder={product.title} className='productBottomInfo' />
                    <label style={{color: "white"}}>Desc</label>
                    <textarea type="text" placeholder={product.desc} className='productBottomDesc' />
                    <label style={{color: "white"}}>Price</label>
                    <input type="text" placeholder={product.price} className='productBottomInfo' />
                    <label style={{color: "white"}}>InStock</label>
                    <select name="inStock" id="inStock" className='productBottomInStock'>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img 
                          src={product.img}
                          alt="" 
                          className="productUploadImg" 
                        />
                        <label htmlFor="file">
                            <Publish />
                        </label>
                        <input type="file" id='file' style={{display: "none"}} />
                    </div>
                    <button className="productButton">UPDATE</button>
                </div>
            </form>
        </div>
    </div>
  )
}
