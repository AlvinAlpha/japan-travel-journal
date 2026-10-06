/**
 * 日本旅遊誌 - 行程推薦專頁互動功能 (itinerary.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const dayTabs = document.querySelectorAll('.day-tab-btn');
  const audienceTags = document.querySelectorAll('.audience-tag-btn');
  const cards = document.querySelectorAll('.itinerary-detail-card');
  const emptyStateEl = document.getElementById('itinerary-empty-state');
  const resetBtn = document.getElementById('reset-itinerary-filter-btn');

  let currentDayFilter = 'all';
  let currentAudienceFilter = 'all';

  function filterCards() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardDays = card.getAttribute('data-days');
      const cardAudienceStr = card.getAttribute('data-audience') || '';
      const audiences = cardAudienceStr.split(',').map(s => s.trim());

      const matchDay = (currentDayFilter === 'all' || cardDays === currentDayFilter);
      const matchAudience = (currentAudienceFilter === 'all' || audiences.includes(currentAudienceFilter));

      if (matchDay && matchAudience) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyStateEl) {
      emptyStateEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  function setDayFilter(day) {
    currentDayFilter = day;
    dayTabs.forEach(t => {
      if (t.getAttribute('data-day') === day) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    filterCards();
  }

  // 天數切換 Tab
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = tab.getAttribute('data-day');
      setDayFilter(day);
    });
  });

  // 受眾標籤切換
  audienceTags.forEach(tag => {
    tag.addEventListener('click', () => {
      audienceTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      currentAudienceFilter = tag.getAttribute('data-audience');
      filterCards();
    });
  });

  // 重設篩選按鈕
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      setDayFilter('all');

      audienceTags.forEach(t => t.classList.remove('active'));
      const defaultAudienceTag = document.querySelector('.audience-tag-btn[data-audience="all"]');
      if (defaultAudienceTag) defaultAudienceTag.classList.add('active');
      currentAudienceFilter = 'all';

      filterCards();
    });
  }

  // 匯出/列印行程按鈕
  document.querySelectorAll('[data-print-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });

  // 支援 URL Hash 直接定位天數 (#day-1, #day-3, #day-5)
  const hash = window.location.hash;
  if (hash === '#day-1') {
    setDayFilter('1');
  } else if (hash === '#day-3') {
    setDayFilter('3');
  } else if (hash === '#day-5') {
    setDayFilter('5');
  } else {
    filterCards();
  }
});
