import './user.css';
import { PermIdentity, CalendarToday, MailOutline, LocationSearching, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className='userTitle'>고객 정보</h1>
            <Link to="/newUser">
              <button className="userAddButton">고객 등록</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                      src="https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                      alt="" 
                      className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">홍지유</span>
                        <div className="userShowUserTitle">무직</div>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">상세 정보</span>
                    <div className="userShowInfo">
                      <PermIdentity className='userShowIcon' />
                      <span className="userShowInfoTitle">gduser97</span>
                    </div>
                    <span className="userShowTitle">연락처</span>
                    <div className="userShowInfo">
                      <CalendarToday className='userShowIcon' />
                      <span className="userShowInfoTitle">+82 10 4567 8910</span>
                    </div>
                    <div className="userShowInfo">
                      <MailOutline className='userShowIcon' />
                      <span className="userShowInfoTitle">gduser@gmail.com</span>
                    </div>
                    <span className="userShowTitle">주소지</span>
                    <div className="userShowInfo">
                      <LocationSearching className='userShowIcon' />
                      <span className="userShowInfoTitle">Gangnam | Seoul</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">
                    상세 정보 수정
                </span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>고객명</label>
                            <input type='text' placeholder='' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>아이디</label>
                            <input type='text' placeholder='' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>전화번호</label>
                            <input type='text' placeholder='' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>이메일</label>
                            <input type='email' placeholder='' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>주소지</label>
                            <input type='text' placeholder='' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                              className='userUpdateImg'
                              src="https://images.pexels.com/photos/4383761/pexels-photo-4383761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                              alt="" 
                            />
                            <label htmlFor='userUpdateFile'>
                              <Publish className='userUpdateIcon' />
                            </label>
                            <input type="file" id='userUpdateFile' style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">업데이트</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
