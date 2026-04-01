import React from 'react';
import './About.css';

const values = [
  { icon: '❤️', title: 'الرعاية المتمرة', desc: 'نضع صحتك ورفاهيتك في مقدمة أولوياتنا' },
  { icon: '🏆', title: 'الجودة والتميز', desc: 'نلتزم بأعلى معايير الجودة في تقديم الخدمات' },
  { icon: '👥', title: 'فريق محترف', desc: 'أطباء وكوادر طبية ذوي خبرة ودقة عالية' },
  { icon: '💡', title: 'الابتكار والتطوير', desc: 'نواكب أحدث التقنيات الطبية لخدمائنا' },
];

const stats = [
  { num: '5000+', label: 'مريض راضٍ' },
  { num: '50+', label: 'طبيب متخصص' },
  { num: '10+', label: 'سنوات خبرة' },
  { num: '20+', label: 'خدمة طبية' },
];

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="breadcrumb">الرئيسية › من نحن</div>
        <h1>من نحن</h1>
        <p>نحن مجموعة من العيادات الطبية المتخصصة التي تسعى لتقديم أفضل رعاية صحية متكاملة</p>
      </div>

      {/* Story */}
      <section className="about-story section">
        <div className="container about-story-grid">
          <div className="story-text">
            <h2>قصتنا <span className="underline-gold"></span></h2>
            <p>تأسست Clinicly بهدف تقديم خدمات طبية عالية الجودة للمجتمع السعودي منذ بداياتنا وحكتي اليوم. سعينا لتقديم رعاية صحية شاملة تجمع بين الخبرة الطبية والتقنيات الحديثة.</p>
            <p>فريقنا المكون من أطباء متخصصين وكوادر طبية مدربة يعمل بإخلاص لضمان حصولك على أفضل تجربة طبية ممكنة. نؤمن بأن كل مريض يستحق رعاية متميرة واهتماماً خاصاً.</p>
            <div className="story-stats">
              <div className="story-stat">
                <span className="story-num gold">5000+</span>
                <span>مريض سعيد</span>
              </div>
              <div className="story-stat">
                <span className="story-num green">50+</span>
                <span>طبيب متخصص</span>
              </div>
            </div>
          </div>
          <div className="story-img">
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&h=400&fit=crop" alt="فريقنا" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">قيمنا ومبادئنا</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="stats-banner">
        {stats.map((s, i) => (
          <div key={i} className="banner-stat">
            <span className="banner-num">{s.num}</span>
            <span className="banner-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container vm-grid">
          <div className="vm-card">
            <div className="vm-icon">🎯</div>
            <h3>رؤيتنا</h3>
            <p>أن نكون الخيار الأول للرعاية الصحية في المملكة، ونساهم في بناء مجتمع صحي وسعيد من خلال تقديم خدمات طبية متميزة تواكب أحدث المعايير العالمية.</p>
          </div>
          <div className="vm-card">
            <div className="vm-icon">❤️</div>
            <h3>رسالتنا</h3>
            <p>نلتزم بتقديم رعاية صحية شاملة ومتميرة لجميع مرضانا، مع التركيز على الجودة والابتكار والاهتمام الشخصي لضمان أفضل تجربة طبية ممكنة.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;