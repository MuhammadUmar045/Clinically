import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Calendar, FileText, CreditCard, Shield, Award, Users } from 'lucide-react';
import { services } from '../data/Services';
import './Home.css';

const specialties = [
  { name: 'عام', icon: '🩺', color: '#10b981', count: '12 طبيب' },
  { name: 'أسنان', icon: '🦷', color: '#3b82f6', count: '8 أطباء' },
  { name: 'قلبية', icon: '❤️', color: '#ef4444', count: '6 أطباء' },
  { name: 'جلدية', icon: '✨', color: '#8b5cf6', count: '9 أطباء' },
  { name: 'أطفال', icon: '👶', color: '#f59e0b', count: '7 أطباء' },
  { name: 'مختبر', icon: '🧪', color: '#6366f1', count: '4 خدمات' },
];

const steps = [
  { num: '01', title: 'اختر الخدمة', desc: 'تصفح من بين عشرات الخدمات الطبية المتاحة', icon: <FileText size={22} /> },
  { num: '02', title: 'حدد الموعد', desc: 'اختر الوقت والتاريخ الذي يناسبك', icon: <Calendar size={22} /> },
  { num: '03', title: 'أدخل البيانات', desc: 'أدخل معلوماتك الشخصية بسهولة', icon: <FileText size={22} /> },
  { num: '04', title: 'تأكيد الحجز', desc: 'استلم تأكيد الحجز على بريدك الإلكتروني', icon: <CreditCard size={22} /> },
];

const reasons = [
  { icon: <Award size={28} />, title: 'جودة موثوقة', desc: 'جميع أطبائنا معتمدون ومرخصون', color: '#f59e0b' },
  { icon: <Users size={28} />, title: 'فريق متنوع', desc: 'أطباء من مختلف التخصصات', color: '#8b5cf6' },
  { icon: <Clock size={28} />, title: 'حجز سريع', desc: 'احجز موعدك في أقل من دقيقتين', color: '#3b82f6' },
  { icon: <Shield size={28} />, title: 'آمن وموثوق', desc: 'بياناتك محمية بالكامل', color: '#10b981' },
];

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>رعاية صحية متميزة<br />في انتظارك</h1>
          <p>احجز مع أفضل الأطباء والمتخصصين في جميع العيادات الطبية</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">+ احجز الآن</Link>
            <Link to="/doctors" className="btn-outline">تصفح الأطباء</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">500+</span><span>مريض راضٍ</span></div>
            <div className="stat"><span className="stat-num">14+</span><span>طبيب متخصص</span></div>
            <div className="stat"><span className="stat-num">6+</span><span>خدمة طبية</span></div>
          </div>
        </div>
        <div className="hero-images">
          <div className="hero-img-grid">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=160&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=160&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=160&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=300&fit=crop" alt="" className="hero-main-img" />
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">التخصصات الطبية</h2>
          <p className="section-sub">اختر من بين أفضل التخصصات لدينا</p>
          <div className="specialties-grid">
            {specialties.map(s => (
              <Link to="/services" key={s.name} className="specialty-card">
                <div className="specialty-icon" style={{ background: s.color + '20' }}>
                  <span style={{ fontSize: 28 }}>{s.icon}</span>
                </div>
                <span className="specialty-name">{s.name}</span>
                <span className="specialty-count">{s.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">كيف تحجز موعدك؟</h2>
          <p className="section-sub">احجز موعدك في 4 خطوات بسيطة</p>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">خدماتنا الطبية</h2>
          <p className="section-sub">مجموعة متنوعة من الخدمات الطبية للعائلة</p>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.id} className="service-card">
                <div className="service-img-wrap">
                  <img src={s.image} alt={s.title} />
                  <span className="service-badge">{s.specialty}</span>
                </div>
                <div className="service-info">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="service-meta">
                    <span><Star size={13} fill="#f59e0b" color="#f59e0b" /> {s.rating}</span>
                    <span><Clock size={13} /> {s.duration} دقيقة</span>
                  </div>
                  <div className="service-footer">
                    <span className="service-price">ابتداء من <strong>{s.price} ر.س</strong></span>
                    <Link to="/services" className="service-btn">عرض التفاصيل</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/services" className="btn-primary">عرض جميع الخدمات</Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">لماذا تختارنا؟</h2>
          <p className="section-sub">نقدم لك أفضل تجربة طبية ممكنة</p>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div className="reason-icon" style={{ background: r.color + '20', color: r.color }}>
                  {r.icon}
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>جاهز لبدء رحلتك الصحية؟</h2>
        <p>احجز موعدك الآن وابدأ رحلتك نحو حياة أفضل</p>
        <Link to="/services" className="btn-white">ابدأ الآن ←</Link>
      </section>
    </div>
  );
}

export default Home;