import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Clock3, Star, Users } from 'lucide-react';
import { services } from '../data/Services';
import './ServiceDetails.css';

const defaultGallery = [
  'https://images.unsplash.com/photo-1579165466949-f3cc80e61d5f?w=1200&h=700&fit=crop',
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=360&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=360&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=360&fit=crop'
];

const timeSlots = ['09:00 ص', '09:30 ص', '10:00 ص', '11:30 ص', '01:00 م', '04:00 م', '06:30 م'];

function ServiceDetails() {
  const { serviceId } = useParams();
  const selectedService = services.find(s => String(s.id) === String(serviceId));

  const service = useMemo(() => {
    if (!selectedService) return null;

    return {
      ...selectedService,
      longDescription:
        selectedService.longDescription ||
        `${selectedService.description} تشمل هذه الخدمة تشخيصا دقيقا، وخطة علاج واضحة، ومتابعة من فريق متخصص لضمان أفضل نتيجة ممكنة.`,
      benefits: selectedService.benefits || [
        'تقييم طبي شامل للحالة مع تقرير واضح',
        'خطة علاج مخصصة حسب الحالة والعمر',
        'متابعة بعد الجلسة لضمان التحسن',
        'بيئة آمنة وتعقيم كامل للأدوات'
      ],
      preparation: selectedService.preparation || [
        'إحضار الهوية أو الملف الطبي السابق',
        'الوصول قبل الموعد ب 15 دقيقة',
        'إبلاغ الطبيب بأي أدوية حالية أو حساسية'
      ],
      gallery: selectedService.gallery || [selectedService.image, ...defaultGallery]
    };
  }, [selectedService]);

  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container service-not-found">
          <h2>الخدمة غير موجودة</h2>
          <p>لم نتمكن من العثور على تفاصيل هذه الخدمة.</p>
          <Link className="back-to-services-btn" to="/services">العودة إلى الخدمات</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="page-header">
        <div className="breadcrumb">الرئيسية › خدماتنا الطبية › {service.title}</div>
        <h1>{service.title}</h1>
        <p>{service.longDescription}</p>
      </div>

      <div className="container detail-layout">
        <section className="booking-card">
          <h2>احجز موعدك</h2>

          <div className="quick-stats">
            <div>
              <span>السعر</span>
              <strong>{service.price} ريال</strong>
            </div>
            <div>
              <span>المدة</span>
              <strong>{service.duration} دقيقة</strong>
            </div>
          </div>

          <div className="detail-meta-line">
            <span><Star size={14} fill="#f59e0b" color="#f59e0b" /> {service.rating}</span>
            <span><Users size={14} /> {service.bookings} حجز</span>
            <span><Clock3 size={14} /> {service.specialty}</span>
          </div>

          <div className="field-wrap">
            <label htmlFor="appointmentDate"><CalendarDays size={20} /> تاريخ الموعد</label>
            <input
              id="appointmentDate"
              type="date"
              value={appointmentDate}
              onChange={event => {
                setAppointmentDate(event.target.value);
                setSelectedTime('');
              }}
            />
          </div>

          <div className="field-wrap">
            <label><Clock3 size={20} /> وقت الموعد</label>
            {!appointmentDate ? (
              <div className="time-placeholder">الرجاء اختيار التاريخ أولا لعرض المواعيد المتاحة</div>
            ) : (
              <div className="time-grid">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    className={`time-chip ${selectedTime === slot ? 'active' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                    type="button"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="continue-btn"
            disabled={!appointmentDate || !selectedTime}
            onClick={() => alert('تم اختيار الموعد بنجاح')}
          >
            متابعة إتمام الحجز
          </button>
        </section>

        <section className="service-media-card">
          <img src={service.gallery[activeImage]} alt={service.title} className="main-service-image" />
          <div className="thumb-row">
            {service.gallery.slice(0, 4).map((img, index) => (
              <button
                type="button"
                key={img}
                className={`thumb-btn ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`${service.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="details-text-card">
          <h3>ما الذي تتضمنه الخدمة؟</h3>
          <ul>
            {service.benefits.map(item => <li key={item}>{item}</li>)}
          </ul>

          <h3>تعليمات قبل الموعد</h3>
          <ul>
            {service.preparation.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ServiceDetails;
