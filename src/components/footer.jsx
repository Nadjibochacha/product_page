import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div id='footer' className='bg-body-secondary'>
        <h6 className='text-uppercase'>
            <a href="http://">happy life</a>
        </h6>
        <div className="row justify-content-center mt-4">
            <div className="col-md-3">
                <h3>الشروط والسياسات</h3>
                <ul>
                    <li><a href="https://happylif.store/pages/terms-and-conditions">شروط الاستخدام</a></li>
                    <li><a href="https://happylif.store/pages/return-policy">سياسة الاستبدال والاسترجاع</a></li>
                    <li><a href="https://happylif.store/pages/confidentiality">سياسة الخصوصية</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3>عن المتجر</h3>
                <ul>
                    <li><a href="https://happylif.store/pages/about-us">عن المتجر</a></li>
                    <li><a href="https://happylif.store/pages/how-to-pay">طرق الدفع</a></li>
                    <li><a href="https://happylif.store/pages/shipping-delivery">الشحن و التوصيل</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3>اتصل بنا</h3>
                <ul>
                    <li><a href="https://happylif.store/pages/contact-us">اتصل بنا</a></li>
                    <li><a href="https://happylif.store/pages/faq">اﻷسئلة المكررة</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer