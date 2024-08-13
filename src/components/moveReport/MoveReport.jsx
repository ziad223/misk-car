import './moveReport.css';
import icon from '../../images/move-icon.svg';
const MoveReport = () => {
  return (
    <div className='move-report container'>
       <div className='move-report-one'>
        <h6>تقرير الحركة</h6>
       </div>
       <div className="move-report-part">
         <div>
            <img src={icon} alt="move-icon" />
            <span>المركبات</span>
         </div>
          <h6>2000</h6>
       </div>
        <div className="move-report-part">
         <div>
            <img src={icon} alt="move-icon" />
            <span>المركبات المسلمة</span>
         </div>
          <h6>2000</h6>
       </div>
        <div className="move-report-part">
         <div>
            <img src={icon} alt="move-icon" />
            <span>مركبات الصيانة</span>
         </div>
          <h6>2000</h6>
       </div>

    </div>
  );
}

export default MoveReport;
