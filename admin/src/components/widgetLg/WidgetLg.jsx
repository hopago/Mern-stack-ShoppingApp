import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import './widgetlg.css';
import { useState } from 'react';
import { format } from 'timeago.js';


export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={`widgetLgButton ${type}`}>{type}</button>
    };

    const [orders,setOrders] = useState([]);

    useEffect(() => {
  
      const getOrders = async () => {
        try {
          const res = await userRequest.get("orders");
          setOrders(res.data);
        } catch (err) {
          console.log(err);
        }
      };
  
      getOrders();
  
    }, []);

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">최근 거래</h3>
        <table className="widgetLgTable">
            <tbody>
            <tr className="widgetLgTr">
                <th className="widgetLgTh">고객</th>
                <th className="widgetLgTh">날짜</th>
                <th className="widgetLgTh">거래금액</th>
                <th className="widgetLgTh">상태</th>
            </tr>
            {
            orders ?
            orders.map(o =>(
            <tr className="widgetLgTr" key={o._id}>
                <td className="widgetLgUser">
                    <img
                      src="https://images.pexels.com/photos/4383760/pexels-photo-4383760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="" 
                      className="widgetLgImg" 
                    />
                    <span className="widgetLgName">{o.userId}</span>
                </td>
                <td className="widgetLgDate">{format(o.createdAt)}</td>
                <td className="widgetLgAmount">$ {o.amount}</td>
                <td className="widgetLgStatus"><Button type={o.status} /></td>
            </tr>
            ))
            :
            (
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    There are no new orders!
                  </td>
                </tr>
            )
            }
            </tbody>
        </table>
    </div>
  )
}
