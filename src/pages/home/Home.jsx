import './home.css';
import cardImg from '../../images/card-img.png';
import welecome from '../../images/welcome-icon.svg';
import icon1 from '../../images/home-cardIcon-1.svg';
import icon2 from '../../images/home-cardIcon-2.svg';
import icon3 from '../../images/home-cardIcon-3.svg';
import icon4 from '../../images/home-cardIcon-4.svg';
import icon5 from '../../images/home-cardIcon-5.svg';
import icon6 from '../../images/home-cardIcon-6.svg';
import { FiArrowUpLeft } from "react-icons/fi";
import Chart from '../../components/chart/Chart';
import MoveReport from '../../components/moveReport/MoveReport';
import Chart2 from '../../components/chart2/Chart2';
import Chart3 from '../../components/chart3/Chart3';

const Home = () => {
  return (
    <div className='home  mt-3'>
      <h5>لوحة التحكم</h5>
      <div className="row mt-4 align-items-center">
    <div className="col-lg-4 col-md-12 col-12">
        <div className="home-card d-flex gap-3 rounded-2 text-white ">
            <img src={cardImg} alt="card-img" />
            <div>
                <h6>مرحبا مصطفي أحمد  <img src={welecome} alt="welcome-img" /></h6>
                <p>
                    وريم أبسيوم (Lorem Ipsum) هو ببساطة نص شكلي بمعني أن الغاية
                </p>
            <button>عرض الصفحة الشخصية</button>
            </div>
        </div>
        
    </div>
    <div className="col-lg-8 col-md-12 col-12">
        <div className="left-cards container">
         <div className='left-card d-flex gap-3 ' >
       <img src={icon1} alt="card-icon" />
       <div >
        <h5>500</h5>
        <h6 className='text-muted'>الموظفين</h6>
        <div className='i1'>
        50%+
        <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
         <div className='left-card d-flex gap-3 ' >
       <img src={icon2} alt="card-icon" />
       <div >
        <h5>300</h5>
        <h6 className='text-muted'>المركبات</h6>
        <div className='i2'>
        50%+
       <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
          <div className='left-card d-flex gap-3' >
       <img src={icon3} alt="card-icon" />
       <div >
        <h5>5,000</h5>
        <h6 className='text-muted'>المحروقات</h6>
        <div className='i3'>
        50%+
        <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
          <div className='left-card d-flex gap-3' >
       <img src={icon4} alt="card-icon" />
       <div >
        <h5>1000</h5>
        <h6 className='text-muted'>طلبات الصيانة</h6>
        <div className='i4'>
        50%+
        <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
          <div className='left-card d-flex gap-3' >
       <img src={icon5} alt="card-icon" />
       <div >
        <h5>1000</h5>
        <h6 className='text-muted'>طلبات المحروقات</h6>
        <div className='i4'>
        50%+
         <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
          <div className='left-card d-flex gap-3' >
       <img src={icon6} alt="card-icon" />
       <div >
        <h5>300</h5>
        <h6 className='text-muted'>المركبات في الصيانة</h6>
        <div className='i5'>
        50%+
        <FiArrowUpLeft  className='fw-bold'/>
        </div>
       </div>
       
         </div>
         
          
        
         
         
         
         
         
        </div>
    </div>
      </div>
      <div className="row mt-5 ">
       <div className="col-lg-8 col-md-12 col-12">
        <div className="chart">
          <Chart/>
        </div>
       </div>
       <div className="col-lg-4 col-md-12 col-12">
        <MoveReport/>
       </div>
      </div>
      <div className="row mt-5 container">
      <div className="col-lg-6 col-md-12 col-12">
      <Chart2/>
      </div>
      <div className="col-lg-6 col-md-12 col-12 ">
        <Chart3/>
      </div>
      </div>
    </div>
  );
}

export default Home;
