import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="breadcrumb">الرئيسية › تواصل معنا</div>
        <h1>تواصل معنا</h1>
        <p>نحن هنا للإجابة على استفساراتك ومساعدتك في الحصول على أفضل رعاية صحية</p>
      </div>

      {/* Info Cards */}
      <div className="container">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon"><Phone size={22} /></div>
            <h4>الهاتف</h4>
            <p>+966 50 123 4567</p>
            <p>+966 11 234 5678</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><Mail size={22} /></div>
            <h4>البريد الإلكتروني</h4>
            <p>info@clinic.sa</p>
            <p>support@clinic.sa</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><MapPin size={22} /></div>
            <h4>العنوان</h4>
            <p>الرياض حي العليا</p>
            <p>شارع الملك فهد، مبنى 123</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><Clock size={22} /></div>
            <h4>ساعات العمل</h4>
            <p>السبت – الخميس: 9:00 ص – 10:00 م</p>
            <p>الجمعة: 4:00 م – 10:00 م</p>
          </div>
        </div>

        {/* Map + Form */}
        <div className="contact-main">
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>

          <div className="contact-form-card">
            <h2>أرسل لنا رسالة</h2>
            <p>سنرد عليك في أقرب وقت ممكن</p>

            <div className="form-group">
              <label>الاسم الكامل *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="أدخل اسمك الكامل" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>البريد الإلكتروني *</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" />
              </div>
              <div className="form-group">
                <label>رقم الجوال *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+966 50 123 4567" />
              </div>
            </div>

            <div className="form-group">
              <label>الموضوع *</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="موضوع الرسالة" />
            </div>

            <div className="form-group">
              <label>الرسالة *</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="اكتب رسالتك هنا..." rows={5} />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              ✉ إرسال الرسالة
            </button>
          </div>
        </div>

        {/* Emergency */}
        <div className="emergency-banner">
          <h2>هل تحتاج إلى استشارة عاجلة؟</h2>
          <p>اتصل بنا الآن على الرقم الموحد</p>
          <div className="emergency-number">+966 50 123 4567</div>
          <p className="emergency-note">متاح 24/7 للحالات الطارئة</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;