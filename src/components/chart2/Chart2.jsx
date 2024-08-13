import './chart2.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';

const Chart2 = () => {
  return (
    <div className='chart2 p-3'>
     <div className='d-flex justify-content-between align-items-center mb-4 px-3'>
        <h6>الطلبات</h6>
        <div className='d-flex gap-3 justify-content-around align-items-center'>
          <FaCalendarAlt className='chart-icon'/>
          <span>اليوم</span>
          <GoTriangleDown className='chart-icon'/>
        </div>
        </div>
      <div className="chart2-content">
        <table>
             <tr>
            <th>اسم الطالب</th>
            <th>الأدارة</th>
            <th>التاريخ</th>
            <th>الحالة</th>
        </tr>
         <tr>
            <td> طلب سياره</td>
            <td>الموارد البشريه</td>
            <td>20-01-20223</td>
            <td>تم الموافقة</td>
        </tr>
        <tr>
            <td> طلب صيانه</td>
            <td>الموارد البشريه</td>
            <td>20-01-20223</td>
            <td>تم الرفض</td>
        </tr>
        <tr>
            <td> طلب محروقات</td>
            <td>الموارد البشريه</td>
            <td>20-01-20223</td>
            <td>تم الموافقة</td>
        </tr>
        </table>
      </div>
    </div>
  );
}

export default Chart2;
