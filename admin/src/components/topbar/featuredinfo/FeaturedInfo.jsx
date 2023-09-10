import { useState } from 'react';
import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect } from 'react';
import { userRequest } from '../../../requestMethods';


export default function FeaturedInfo() {

    const [income,setIncome] = useState([]);
    const [perc,setPerc] = useState(0);

    useEffect(() => {

        const getIncome = async () => {

            try {
                
                const res = await userRequest.get("orders/income");

                setIncome(res.data);
                setPerc((res.data[1].total * 100) / res.data[0].total - 100);

            } catch (err) {
                console.log(err);
            }

        };

        getIncome();

    }, []);



  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ {income[1]?.total}</span>
                <span className="featuredMoneyRate">
                    %{perc && Math.floor(perc)} { perc && perc < 0 ?
                        <ArrowDownward className='featuredIcon negative' />
                        : <ArrowUpward className='featuredIcon' />
                }
                </span>
            </div>
            <span className="featuredSub">
                Compare with last month
            </span>
        </div>
        {/* 도합 판매량 */}
        <div className="featuredItem">
            <span className="featuredTitle">판매</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className="featuredSub">
                지난달과 비교
            </span>
        </div>
        {/* 생산 비용 */}
        <div className="featuredItem">
            <span className="featuredTitle">비용</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,415</span>
                <span className="featuredMoneyRate">
                    +91.4 <ArrowUpward className='featuredIcon positive' />
                </span>
            </div>
            <span className="featuredSub">
                지난달과 비교
            </span>
        </div>
    </div>
  )
}
