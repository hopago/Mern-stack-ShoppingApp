import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function UserList() {

    const [data,setData] = useState(userRows);

    const handleDelete = (id) => {

        setData(data.filter(item => item.id !== id));
        
    };

    const userColumns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
          field: 'user',
          headerName: '고객명',
          width: 125,
          renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img 
                      className='userListImg'
                      src={params.row.avatar} 
                      alt='' 
                    />
                    {params.row.username}
                </div>
            )
          }
        },
        {
          field: 'email',
          headerName: '이메일',
          width: 200,
        },
        {
          field: 'status',
          headerName: '상태',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: '거래 대금',
          width: 200,
        },
        {
            filed: "action",
            headerName: "관리",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                      <Link to={`/user/${params.row.id}`}>
                        <button 
                          className="userListEdit"
                        >
                            수정
                        </button>
                      </Link>
                      <DeleteOutline 
                        className='userListDelete' 
                        onClick={() => handleDelete(params.row.id)} 
                      />
                    </>
                )
            }
        }
      ];

  return (
    <div className="userList">
        <DataGrid 
          rows={data} 
          columns={userColumns} 
          pageSizeOptions={5} 
          checkboxSelection 
          style={{color: "white"}}
          disableRowSelectionOnClick
        />
    </div>
  )
}
