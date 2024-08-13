import './navbar.css'
import logo from '../../images/logo.svg';
import profile from '../../images/profile.jpg';
import usaImg from '../../images/usa.webp';
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  
  return (
<>
<nav class = 'd-flex justify-content-between align-items-center'>
<img src={logo} alt="logo-img" />
<div className="nav-right d-flex justify-content-center gap-4 align-items-center">
   <div className="profile-part">
    <img className='profile-img' src={profile} alt="" />
    <span></span>
   </div>
  <div className="notifications-part">
    <IoMdNotificationsOutline className='notfiy-icon' />
    <span>1</span>
  </div>
  <TbCategoryPlus className='category-icon'/>
  <BsMoonStars className='moon-icon'/>
  <img className='usa-flag' src={usaImg} alt="usa" />
</div>
</nav>



</>
  );
}

export default Navbar;
