import { useState } from 'react';
import './widgetsm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';


export default function WidgetSm() {

  const [users,setUsers] = useState([]);

  useEffect(() => {

    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

  }, []);

  return (
    <div className="widgetSm">
        <div className="widgetSm">
            <span className="widgetSmTitle">User</span>
            <ul className="widgetSmList">
            {users.map(u => (
                <li className="widgetSmListItem">
                    <img 
                      src={u.img 
                        ? u.img
                        : "https://images.pexels.com/photos/10310526/pexels-photo-10310526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="" 
                      className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{u.username}</span>
                        <span className="widgetSmUserTitle">{u.isAdmin ? "Admin" : "Customer"}</span>
                    </div>
                    <div className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        상세 보기
                    </div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
