import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-bar">
        <div className="footer-bar-container">
          <span><Clock size={16} /> متاحون للحجز: السبت – الخميس ٨ ص – ٩ م</span>
          <button className="footer-bar-btn">
            <Phone size={14} /> احجز عبر الهاتف
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">C</div>
              <span>Clinicly</span>
            </div>
            <p>منصة حجز عيادات طبية متكاملة تجمع بين أفضل الأطباء والمرضى بطريقة سهلة وموثوقة.</p>
            <div className="footer-socials">
              <a href="#">▶</a>
              <a href="#">✕</a>
              <a href="#">in</a>
              <a href="#">📘</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul>
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/services">الخدمات الطبية</Link></li>
              <li><Link to="/doctors">أطباؤنا</Link></li>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/contact">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>الأحكام والسياسات</h4>
            <ul>
              <li><a href="#">سياسة الخصوصية</a></li>
              <li><a href="#">الشروط والأحكام</a></li>
              <li><a href="#">سياسة الإلغاء والاسترداد</a></li>
              <li><a href="#">موقع أمن ومحمي</a></li>
              <li><a href="#">معتمد من وزارة الصحة</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <ul>
              <li><Phone size={14} /> +966 50 123 4567</li>
              <li><Mail size={14} /> info@clinicly.sa</li>
              <li><MapPin size={14} /> الرياض، المملكة العربية السعودية، حي العليا، شارع التخصصي</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Clinicly 2026 · جميع الحقوق محفوظة لدى Yammah Solutions</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;