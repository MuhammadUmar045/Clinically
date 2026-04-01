import React from 'react';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tags = ['استشارة عامة', 'أسنان', 'أطفال', 'جلدية', 'قلب', 'مختبر'];

function SearchModal({ onClose }) {
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate('/services');
    onClose();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <div style={styles.inputRow}>
          <button style={styles.closeBtn} onClick={onClose}>
            <X size={18} />
          </button>
          <div style={styles.inputWrapper}>
            <Search size={18} color="#6b7280" style={{ marginLeft: 10 }} />
            <input
              style={styles.input}
              placeholder="ابحث عن خدمة أو طبيب أو تخصص..."
              autoFocus
            />
          </div>
        </div>
        <div style={styles.tags}>
          <span style={styles.tagsLabel}>تخصصات شائعة</span>
          <div style={styles.tagList}>
            {tags.map(tag => (
              <button key={tag} style={styles.tag} onClick={() => handleTagClick(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.4)',
    zIndex: 200,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 80,
  },
  modal: {
    background: 'white',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 780,
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  closeBtn: {
    width: 40, height: 40,
    borderRadius: '50%',
    background: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    padding: '10px 16px',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 15,
    textAlign: 'right',
    direction: 'rtl',
    background: 'transparent',
  },
  tags: {
    marginTop: 20,
    textAlign: 'right',
  },
  tagsLabel: {
    fontSize: 14,
    color: '#6b7280',
    display: 'block',
    marginBottom: 12,
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'flex-end',
  },
  tag: {
    background: '#e8f5f2',
    color: '#1a8f7a',
    border: 'none',
    borderRadius: 20,
    padding: '8px 18px',
    fontSize: 14,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
};

export default SearchModal;