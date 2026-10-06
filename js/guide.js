/**
 * 日本旅遊誌 - 旅遊須知與 Q&A 互動功能 (guide.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const faqCards = document.querySelectorAll('.faq-accordion-card');
  const toggleAllBtn = document.getElementById('toggle-all-faq');
  const faqSearchInput = document.getElementById('faq-search-input');

  let allExpanded = false;

  // 手風琴點擊
  faqCards.forEach(card => {
    const btn = card.querySelector('.faq-q-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        card.classList.toggle('active');
      });
    }
  });

  // 全部展開 / 收合切換
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      faqCards.forEach(card => {
        if (allExpanded) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
      toggleAllBtn.textContent = allExpanded ? '收合全部問答' : '展開全部問答';
    });
  }

  // FAQ 搜尋過濾
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      faqCards.forEach(card => {
        const text = (card.innerText || '').toLowerCase();
        if (!query || text.includes(query)) {
          card.style.display = 'block';
          if (query) {
            card.classList.add('active'); // 搜尋時自動展開吻合項目
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

