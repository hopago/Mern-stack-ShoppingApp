import './productlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteProducts, getProducts } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductList() {
  
  const dispatch = useDispatch();

  const products = useSelector(state => state.product.products);

  useEffect(() => {

    getProducts(dispatch);

  }, [dispatch]);

  const handleDelete = (id) => {

    deleteProducts(id, dispatch)
    
  };

  const userColumns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'title',
      headerName: 'Name',
      width: 125,
      renderCell: (params) => {
        return (
            <div className='productListUser'>
                <img 
                  className='productListImg'
                  src={params.row.img} 
                  alt='' 
                />
                {params.row.name}
            </div>
        )
      }
    },
    {
      field: 'inStock',
      headerName: 'InStock',
      width: 100,
    },
    {
      field: 'price',
      headerName: 'Price ($)',
      width: 200,
    },
    {
        filed: "action",
        headerName: "Manage",
        width: 200,
        renderCell: (params) => {
            return (
                <>
                  <Link className='link' to={`/product/${params.row._id}`}>
                    <button 
                      className="productListEdit"
                    >
                        Edit
                    </button>
                  </Link>
                  <DeleteOutline 
                    className='productListDelete' 
                    onClick={() => handleDelete(params.row._id)} 
                  />
                </>
            )
        }
    }
  ];

  return (
    <div className="productList">
        <DataGrid 
          rows={products} 
          columns={userColumns} 
          getRowId={row => row._id}
          pageSizeOptions={5} 
          checkboxSelection 
          style={{color: "white"}}
          disableRowSelectionOnClick
        />
    </div>
  )
}
