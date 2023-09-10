import './newuser.css';


export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">신규 고객</h1>
        <form className='newUserForm'>
            <div className="newUserItem">
                <label>고객명</label>
                <input type="text" placeholder='성함' />
            </div>
            <div className="newUserItem">
                <label>아이디</label>
                <input type="text" placeholder='아이디' />
            </div>
            <div className="newUserItem">
                <label>휴대폰 번호</label>
                <input type="text" placeholder='휴대폰 번호' />
            </div>
            <div className="newUserItem">
                <label>이메일</label>
                <input type="email" placeholder='이메일' />
            </div>
            <div className="newUserItem">
                <label>주소지</label>
                <input type="text" placeholder='주소지' />
            </div>
            <div className="newUserItem">
                <div className="newUserGender">
                  <label>성별</label>
                  <input type="radio" name='gender' id='Male' value='male' />
                  <label htmlFor='Male'>남성</label>
                  <input type="radio" name='gender' id='Female' value='female' />
                  <label htmlFor='Female'>여성</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>프리미엄</label>
                <select className='newUserSelect' name='active' id='active'>
                    <option value="등록">등록</option>
                    <option value="거부">거부</option>
                </select>
            </div>
            <div className="nuBtnWrapper">
              <button className="newUserButton">생성</button>
            </div>
        </form>
    </div>
  )
}
