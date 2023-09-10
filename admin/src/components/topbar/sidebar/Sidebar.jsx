import './sidebar.css';
import {   
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon' />
                        메인
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        분석
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        판매
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                      <li className="sidebarListItem">
                          <PermIdentity className='sidebarIcon' />
                          유저
                      </li>
                    </Link>
                    <Link to="/products" className='link'>
                      <li className="sidebarListItem">
                          <Storefront className='sidebarIcon' />
                          상품
                      </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        거래
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon' />
                        메일
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        피드백
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon' />
                        메시지
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        관리
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        분석
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon' />
                        리포트
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
