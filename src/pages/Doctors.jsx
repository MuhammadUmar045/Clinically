import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { doctors } from '../data/Doctors';
import './Doctors.css';

const specialties = ['الكل', 'عام', 'أسنان', 'جلدية', 'أطفال', 'قلبية'];
const types = ['أخصائي', 'استشاري'];
const priceRanges = [
  { label: 'أقل من 200 ر.س', min: 0, max: 200 },
  { label: '200 – 300 ر.س', min: 200, max: 300 },
  { label: '350 – 500 ر.س', min: 350, max: 500 },
  { label: 'أكثر من 500 ر.س', min: 500, max: Infinity },
];

function Doctors() {
  const [activeSpec, setActiveSpec] = useState('الكل');
  const [typeFilter, setTypeFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const toggleType = t => setTypeFilter(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  const togglePrice = l => setPriceFilter(prev => prev.includes(l) ? prev.filter(x => x !== l) : [...prev, l]);

  let filtered = doctors.filter(d => activeSpec === 'الكل' || d.specialty === activeSpec);
  if (typeFilter.length) filtered = filtered.filter(d => typeFilter.includes(d.type));
  if (priceFilter.length) {
    filtered = filtered.filter(d =>
      priceFilter.some(label => {
        const r = priceRanges.find(r => r.label === label);
        return r && d.price >= r.min && d.price < r.max;
      })
    );
  }

  return (
    <div className="doctors-page">
      <div className="page-header">
        <div className="breadcrumb">الرئيسية › الخدمات › أطباؤنا</div>
        <h1>جميع الأطباء</h1>
        <p>اختر الطبيب المناسب لك واحجز موعدك بسهولة</p>
      </div>

      <div className="doctors-layout container">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-header">⚙ الفلتر</div>

          <div className="filter-group">
            <h4>نوع الطبيب</h4>
            {types.map(t => (
              <label key={t} className="checkbox-label">
                <input type="checkbox" checked={typeFilter.includes(t)} onChange={() => toggleType(t)} />
                {t}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>نطاق السعر (ريال)</h4>
            {priceRanges.map(r => (
              <label key={r.label} className="checkbox-label">
                <input type="checkbox" checked={priceFilter.includes(r.label)} onChange={() => togglePrice(r.label)} />
                {r.label}
              </label>
            ))}
          </div>

          <div className="filter-result">عدد النتائج: {filtered.length} طبيب</div>
          {(typeFilter.length > 0 || priceFilter.length > 0) && (
            <button className="clear-btn" onClick={() => { setTypeFilter([]); setPriceFilter([]); }}>
              إعادة تعيين الفلاتر
            </button>
          )}
        </aside>

        {/* Grid */}
        <div>
          <div className="spec-tabs">
            {specialties.map(s => (
              <button
                key={s}
                className={`spec-tab ${activeSpec === s ? 'active' : ''}`}
                onClick={() => setActiveSpec(s)}
              >{s}</button>
            ))}
          </div>

          <div className="doctors-grid">
            {filtered.map(doc => (
              <div key={doc.id} className="doc-card">
                <div className="doc-img-wrap">
                  <img src={doc.image} alt={doc.name} />
                  <span className="doc-badge" style={{ background: doc.badgeColor }}>{doc.badge}</span>
                  <span className="doc-type-tag">{doc.specialty}</span>
                </div>
                <div className="doc-body">
                  <h3>{doc.name}</h3>
                  <p>{doc.description}</p>
                  <div className="doc-meta">
                    <span><Star size={13} fill="#f59e0b" color="#f59e0b" /> {doc.rating}</span>
                    <span>{doc.reviews} تقييم</span>
                  </div>
                  <div className="doc-footer">
                    <span className="doc-price">{doc.price} <small>ريال</small></span>
                    <button className="doc-btn">احجز الآن</button>
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

export default Doctors;