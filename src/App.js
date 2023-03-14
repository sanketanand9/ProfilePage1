import pic2 from './images/pic1.png';
import info from './info';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = {
        key : 1,
        name: "UserName1",
        age: 22,
        mobile_no: "7991120085",
        email: "abc@gmail.com",
}

function App() {
   const {name,age,mobile_no,email} = data;
  const renderinfo = (info, num) => {
    return info.map((data, index) => {
      const { event,performer,amount } = data;
      return (
        <tr>
        <div className="events" key={index}>
         <h4>Event:{event}</h4>
         <h4>Performer:{performer}</h4>
         <h4>Amount Paid:{amount}</h4>
        
        </div>
        </tr>
      );
    });
  };
  return (
    <div className='page'>
      <div className="navbar-top">
        <div className="title">
            <h1>Profile</h1>
        </div>

       
        <ul>
            <li>
                <a href="#message">
                    <span className="icon-count">29</span>
                    <i className="fa fa-envelope fa-2x"></i>
                </a>
            </li>
            <li>
                <a href="#notification">
                    <span className="icon-count">59</span>
                    <i className="fa fa-bell fa-2x"></i>
                </a>
            </li>
            <li>
                <a href="#sign-out">
                    <i className="fa fa-sign-out-alt fa-2x"></i>
                </a>
            </li>
        </ul>
       
    </div>
   

   
    <div className="sidenav">
        <div className="profile">
            <img src={pic2} alt="" width="100" height="100" />

            <div className="name">
                {data.name}
            </div>
            <div className="job">
                {data.job}
            </div>
        </div>

        <div className="sidenav-url">
            <div className="url">
                <a href="#profile" className="active">Profile</a>
                <hr align="center" />
            </div>
            <div className="url">
                <a href="#settings">Settings</a>
                <hr align="center" />
            </div>
        </div>
    </div>
    

    
    <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
            <div className="card-body">
            <FontAwesomeIcon icon="fa fa-pen fa-xs edit" />
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{data.email}</td>
                        </tr>
                        <tr>
                            <td>Job</td>
                            <td>:</td>
                            <td>Web Developer</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>:</td>
                            <td>{data.mobile_no}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h2>Events Enrolled</h2>
        <div className="card1">
            {/* <div className="card-body1"> */}
            <table>
            <tablebody>
            {renderinfo(info,3)}
            </tablebody>
            </table>
            {/* </div> */}
        </div>
    </div>
  
    </div>
  );
}

export default App;
