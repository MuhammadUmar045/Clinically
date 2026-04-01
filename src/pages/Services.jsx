import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';
import { services } from '../data/Services';
import './Services.css';

const specialties = ['الكل', 'عام', 'أسنان', 'مخبر', 'جلدية', 'أطفال', 'قلبية'];
const priceRanges = [
  { label: 'أقل من 200 ر.س', min: 0, max: 200 },
  { label: '200 – 300 ر.س', min: 200, max: 300 },
  { label: '350 – 500 ر.س', min: 350, max: 500 },
  { label: 'أكثر من 500 ر.س', min: 500, max: Infinity },
];

function Services() {
  const navigate = useNavigate();
  const [activeSpec, setActiveSpec] = useState('الكل');
  const [sortBy, setSortBy] = useState('الأعلى تقييماً');
  const [priceFilter, setPriceFilter] = useState([]);

  const togglePrice = (label) => {
    setPriceFilter(prev =>
      prev.includes(label) ? prev.filter(p => p !== label) : [...prev, label]
    );
  };

  let filtered = services.filter(s => activeSpec === 'الكل' || s.specialty === activeSpec);

  if (priceFilter.length > 0) {
    filtered = filtered.filter(s =>
      priceFilter.some(label => {
        const range = priceRanges.find(r => r.label === label);
        return range && s.price >= range.min && s.price < range.max;
      })
    );
  }

  if (sortBy === 'الأعلى تقييماً') filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === 'الأقل سعراً') filtered = [...filtered].sort((a, b) => a.price - b.price);

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="breadcrumb">الرئيسية › خدماتنا الطبية</div>
        <h1>خدماتنا الطبية</h1>
        <p>اختر الخدمة المناسبة لك واحجز موعدك بسهولة</p>
      </div>

      <div className="services-layout container">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <span>⚙ التصفية</span>
          </div>

          <div className="filter-group">
            <h4>التخصص</h4>
            <ul className="spec-list">
              {specialties.map(s => (
                <li
                  key={s}
                  className={activeSpec === s ? 'active' : ''}
                  onClick={() => setActiveSpec(s)}
                >{s}</li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h4>نطاق السعر (ريال)</h4>
            {priceRanges.map(r => (
              <label key={r.label} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={priceFilter.includes(r.label)}
                  onChange={() => togglePrice(r.label)}
                />
                {r.label}
              </label>
            ))}
          </div>

          <div className="filter-result">
            <span>عدد النتائج: {filtered.length} خدمة</span>
          </div>
        </aside>

        {/* Main */}
        <div className="services-main">
          <div className="sort-bar">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
              <option>الأعلى تقييماً</option>
              <option>الأقل سعراً</option>
            </select>
            <span className="sort-label">⇅ ترتيب حسب</span>
          </div>

          <div className="services-cards-grid">
            {filtered.map(s => (
              <div key={s.id} className="svc-card">
                <div className="svc-img-wrap">
                  <img src={s.image} alt={s.title} />
                  <span className="svc-badge">{s.specialty}</span>
                </div>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="svc-meta">
                    <span><Star size={13} fill="#f59e0b" color="#f59e0b" /> {s.rating}</span>
                    <span><Clock size={13} /> {s.duration} دقيقة</span>
                    <span><Users size={13} /> {s.bookings} حجز</span>
                  </div>
                  <div className="svc-footer">
                    <div>
                      <div style={{ fontSize: 12, color: '#6b7280' }}>ابتداء من</div>
                      <div className="svc-price">{s.price} <span>ر.س</span></div>
                    </div>
                    <button className="svc-btn" onClick={() => navigate(`/services/${s.id}`)}>عرض التفاصيل</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;