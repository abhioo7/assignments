import "./header.css";

export default function Header(Admin) {
  let isAdmin;
  for (let prop in Admin) {
    if (Admin.hasOwnProperty(prop)) {
        if(prop == 'Admin' && Admin[prop] == 1)
        {
          isAdmin = 1;
        }
    }
}
console.log(isAdmin);
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">{isAdmin ? 'Admin Logged In' : ' '}</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      {isAdmin ? <></>  : <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />}
    </div>
  );
}
