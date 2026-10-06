/**
 * 日本旅遊誌 - 美食特輯互動功能 (food.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const regionBtns = document.querySelectorAll('.food-region-btn');
  const searchInput = document.getElementById('food-search-input');
  const foodCards = document.querySelectorAll('.food-item-card');
  const noResultEl = document.getElementById('food-no-results');

  let activeRegion = 'all';
  let searchQuery = '';

  function filterFoods() {
    let visibleCount = 0;

    foodCards.forEach(card => {
      const region = card.getAttribute('data-region') || '';
      const text = (card.innerText || '').toLowerCase();

      const matchRegion = (activeRegion === 'all' || region === activeRegion);
      const matchSearch = (!searchQuery || text.includes(searchQuery));

      if (matchRegion && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultEl) {
      if (visibleCount === 0) {
        noResultEl.style.display = 'block';
      } else {
        noResultEl.style.display = 'none';
      }
    }
  }

  // 地區按鈕點擊
  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      regionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegion = btn.getAttribute('data-region');
      filterFoods();
    });
  });

  // 搜尋框輸入
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterFoods();
    });
  }
});

