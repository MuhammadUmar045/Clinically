import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  User,
  Menu,
  X,
  LogIn,
  UserPlus,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft
} from 'lucide-react';
import './Navbar.css';

function Navbar({ onSearchOpen }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [loginMethod, setLoginMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const accountMenuRef = useRef(null);

  const links = [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'الخدمات' },
    { path: '/doctors', label: 'أطباؤنا' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  useEffect(() => {
    const handleOutsideClick = event => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        setAuthOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const openAuth = mode => {
    setAuthMode(mode);
    setAccountMenuOpen(false);
    setAuthOpen(true);
  };

  const handleAuthSubmit = event => {
    event.preventDefault();
    if (authMode === 'signup' && !acceptTerms) {
      alert('يرجى الموافقة على الشروط والأحكام أولاً.');
      return;
    }

    const message = authMode === 'signin' ? 'تم تسجيل الدخول بنجاح' : 'تم إنشاء الحساب بنجاح';
    alert(message);
    setAuthOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false);
            setAccountMenuOpen(false);
          }}
        >
          <div className="logo-icon">C</div>
          <span className="logo-text">Clinicly</span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

          <div className="navbar-actions">
            <button className="icon-btn" onClick={onSearchOpen}>
            <Search size={20} />
          </button>
            <div className="account-menu-wrap" ref={accountMenuRef}>
              <button
                className={`icon-btn ${accountMenuOpen ? 'active' : ''}`}
                onClick={() => setAccountMenuOpen(prev => !prev)}
                aria-label="account menu"
              >
                <User size={20} />
              </button>

              {accountMenuOpen && (
                <div className="account-dropdown">
                  <button className="account-dropdown-item" onClick={() => openAuth('signin')}>
                    <LogIn size={19} />
                    <span>تسجيل الدخول</span>
                  </button>
                  <button className="account-dropdown-item" onClick={() => openAuth('signup')}>
                    <UserPlus size={19} />
                    <span>إنشاء حساب جديد</span>
                  </button>
                </div>
              )}
            </div>
          {/* <button className="book-btn">
            + احجز الآن
          </button> */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {authOpen && (
        <div className="auth-overlay" onClick={() => setAuthOpen(false)}>
          <div className="auth-modal" onClick={event => event.stopPropagation()}>
            <div className="auth-modal-header">
              <div className="logo-mini">
                <div className="logo-icon">C</div>
                <span className="logo-text">Clinicly</span>
              </div>
              <button className="auth-close-btn" onClick={() => setAuthOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <p className="auth-subtitle">
              {authMode === 'signin' ? 'سجل دخولك للوصول إلى حسابك' : 'أنشئ حسابك للوصول إلى خدماتنا'}
            </p>

            {authMode === 'signin' && (
              <div className="auth-switch-tabs">
                <button
                  className={loginMethod === 'email' ? 'active' : ''}
                  onClick={() => setLoginMethod('email')}
                  type="button"
                >
                  <Mail size={18} />
                  بريد إلكتروني
                </button>
                <button
                  className={loginMethod === 'phone' ? 'active' : ''}
                  onClick={() => setLoginMethod('phone')}
                  type="button"
                >
                  <Phone size={18} />
                  رقم الجوال
                </button>
              </div>
            )}

            <form className="auth-form" onSubmit={handleAuthSubmit}>
              {authMode === 'signin' && loginMethod === 'email' && (
                <div className="auth-field">
                  <label>
                    <Mail size={20} />
                    البريد الإلكتروني
                  </label>
                  <input type="email" placeholder="example@email.com" required />
                </div>
              )}

              {authMode === 'signin' && loginMethod === 'phone' && (
                <div className="auth-field">
                  <label>
                    <Phone size={20} />
                    رقم الجوال
                  </label>
                  <input type="tel" placeholder="0512345678" required />
                </div>
              )}

              {authMode === 'signup' && (
                <>
                  <div className="auth-field">
                    <label>
                      <Mail size={20} />
                      البريد الإلكتروني
                    </label>
                    <input type="email" placeholder="example@email.com" required />
                  </div>

                  <div className="auth-field">
                    <label>
                      <Phone size={20} />
                      رقم الجوال السعودي
                    </label>
                    <input type="tel" placeholder="0512345678" required />
                    <small>مثال: 0512345678 أو 966512345678+</small>
                  </div>
                </>
              )}

              <div className="auth-field">
                <label>
                  <Lock size={20} />
                  كلمة المرور
                </label>
                <div className="password-wrap">
                  <button type="button" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              {authMode === 'signup' && (
                <div className="auth-field">
                  <label>
                    <Lock size={20} />
                    تأكيد كلمة المرور
                  </label>
                  <div className="password-wrap">
                    <button type="button" onClick={() => setShowConfirmPassword(prev => !prev)}>
                      {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
              )}

              {authMode === 'signin' ? (
                <div className="auth-helpers-row">
                  <label className="auth-check">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={event => setRememberMe(event.target.checked)}
                    />
                    تذكرني
                  </label>
                  <button type="button" className="auth-link-btn">نسيت كلمة المرور؟</button>
                </div>
              ) : (
                <label className="auth-check terms">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={event => setAcceptTerms(event.target.checked)}
                  />
                  أوافق على <span>الشروط والأحكام</span> و <span>سياسة الخصوصية</span>
                </label>
              )}

              <button type="submit" className="auth-submit-btn">
                <ArrowLeft size={24} />
                {authMode === 'signin' ? 'تسجيل الدخول' : 'إنشاء الحساب'}
              </button>

              <div className="auth-bottom-switch">
                {authMode === 'signin' ? (
                  <>
                    ليس لديك حساب؟
                    <button type="button" onClick={() => setAuthMode('signup')}>إنشاء حساب</button>
                  </>
                ) : (
                  <>
                    لديك حساب بالفعل؟
                    <button type="button" onClick={() => setAuthMode('signin')}>تسجيل الدخول</button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;