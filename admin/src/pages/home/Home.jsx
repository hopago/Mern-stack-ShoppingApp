import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/topbar/featuredinfo/FeaturedInfo';
import './home.css';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';


export default function Home() {

  const [userStats,setUserStats] = useState([]);

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
        const res = await userRequest.get("/users/stats");
        res.data.map(data => setUserStats(prev =>
          [...prev, 
            {name: MONTHS[data._id - 1], "Active User": data.total}
          ]
        ))
      } catch (err) {
        console.log(err);
      }

    };

    getStats();

  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="New Customer" grid dataKey="Active User" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
