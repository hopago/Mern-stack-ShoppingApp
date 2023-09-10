import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom'


export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <Link to="/" className="link">
                  <span className="logo">Admin DB</span>
                </Link>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                    <span className="topIconBadge">2</span>
                </div>
                  <img src="https://images.pexels.com/photos/4520481/pexels-photo-4520481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                   alt="" 
                   className="topAvatar" 
                  />
            </div>
        </div>
    </div>
  )
}
