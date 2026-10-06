/**
 * 日本旅遊誌 (Japan Travel Journal) - 全站共用功能 (common.js)
 * 包含：櫻花飄落粒子、導航列控制、手機漢堡選單、我的收藏系統、詳情 Modal、回頂部等
 */

(function () {
  'use strict';

  // --- 1. 收藏夾儲存與邏輯管理 ---
  const STORAGE_KEY = 'japan_travel_favorites';
  
  function getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to parse favorites', e);
      return [];
    }
  }

  function saveFavorites(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      updateFavBadge();
      renderFavDrawer();
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }

  function toggleFavorite(item) {
    let list = getFavorites();
    const existingIndex = list.findIndex(i => i.id === item.id);
    let added = false;
    
    if (existingIndex > -1) {
      list.splice(existingIndex, 1);
      showToast(`已從收藏清單中移除「${item.name}」`);
    } else {
      list.push(item);
      added = true;
      showToast(`已成功將「${item.name}」加入收藏！🌸`);
    }
    
    saveFavorites(list);
    updateFavButtons();
    return added;
  }

  function updateFavBadge() {
    const list = getFavorites();
    const countEls = document.querySelectorAll('.fav-count');
    countEls.forEach(el => {
      el.textContent = list.length;
    });
  }

  function updateFavButtons() {
    const list = getFavorites();
    const favButtons = document.querySelectorAll('[data-fav-id]');
    favButtons.forEach(btn => {
      const id = btn.getAttribute('data-fav-id');
      const isFav = list.some(item => item.id === id);
      if (isFav) {
        btn.classList.add('active');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-heart text-danger';
        }
      } else {
        btn.classList.remove('active');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = 'far fa-heart';
        }
      }
    });
  }

  function renderFavDrawer() {
    const drawerBody = document.getElementById('fav-drawer-body');
    if (!drawerBody) return;
    
    const list = getFavorites();
    if (list.length === 0) {
      drawerBody.innerHTML = `
        <div class="fav-empty-state">
          <i class="far fa-compass"></i>
          <p style="font-weight: 600; margin-bottom: 6px;">您的收藏清單還是空的</p>
          <p style="font-size: 0.85rem;">點擊景點或美食卡片上的愛心，即可儲存想造訪的地點！</p>
        </div>
      `;
      return;
    }

    let html = '';
    list.forEach(item => {
      html += `
        <div class="fav-item-card">
          <img src="${item.image}" alt="${item.name}" class="fav-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&auto=format&fit=crop&q=80'">
          <div class="fav-item-info">
            <h4 class="fav-item-name">${item.name}</h4>
            <span class="fav-item-region"><i class="fas fa-map-marker-alt"></i> ${item.region || '日本旅遊'} · ${item.type || '推薦景點'}</span>
            <button class="fav-item-remove" data-remove-id="${item.id}">
              <i class="fas fa-trash-alt"></i> 移除
            </button>
          </div>
        </div>
      `;
    });
    drawerBody.innerHTML = html;

    // 綁定移除按鈕
    drawerBody.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const removeId = btn.getAttribute('data-remove-id');
        let curList = getFavorites();
        curList = curList.filter(i => i.id !== removeId);
        saveFavorites(curList);
        updateFavButtons();
      });
    });
  }

  // --- 2. 櫻花飄落粒子特效 (Sakura Canvas) ---
  class SakuraPetal {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * -this.canvas.height;
      this.size = Math.random() * 8 + 8;
      this.speedX = Math.random() * 1.5 - 0.75 + 0.8;
      this.speedY = Math.random() * 1.2 + 1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 2;
      this.opacity = Math.random() * 0.4 + 0.45;
      this.color = ['#F9D5DC', '#FAD9DF', '#F3B4C2', '#FFFFFF'][Math.floor(Math.random() * 4)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      if (this.y > this.canvas.height + 20 || this.x > this.canvas.width + 20) {
        this.reset();
      }
    }

    draw() {
      this.ctx.save();
      this.ctx.translate(this.x, this.y);
      this.ctx.rotate((this.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = this.opacity;
      this.ctx.fillStyle = this.color;
      
      // 繪製櫻花花瓣形狀
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
      this.ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  let sakuraAnimId = null;
  let petals = [];
  let isSakuraActive = localStorage.getItem('sakura_active') !== 'false';

  function initSakura() {
    const canvas = document.getElementById('sakura-canvas');
    if (!canvas) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const count = window.innerWidth < 768 ? 16 : 28;
    petals = [];
    for (let i = 0; i < count; i++) {
      petals.push(new SakuraPetal(canvas));
    }

    function animate() {
      if (!isSakuraActive) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.update();
        p.draw();
      });
      sakuraAnimId = requestAnimationFrame(animate);
    }

    if (isSakuraActive) {
      animate();
    }

    // 櫻花開關按鈕
    const toggleBtn = document.getElementById('sakura-toggle-btn');
    if (toggleBtn) {
      updateSakuraBtnText(toggleBtn);
      toggleBtn.addEventListener('click', () => {
        isSakuraActive = !isSakuraActive;
        localStorage.setItem('sakura_active', isSakuraActive);
        updateSakuraBtnText(toggleBtn);
        if (isSakuraActive) {
          canvas.style.display = 'block';
          animate();
        } else {
          cancelAnimationFrame(sakuraAnimId);
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.style.display = 'none';
        }
      });
    }
  }

  function updateSakuraBtnText(btn) {
    if (isSakuraActive) {
      btn.innerHTML = '<span>🌸 櫻花：開</span>';
    } else {
      btn.innerHTML = '<span>🍃 櫻花：關</span>';
    }
  }

  // --- 3. 吐司提示訊息 (Toast) ---
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(50px);
        background: rgba(44, 40, 37, 0.92);
        backdrop-filter: blur(6px);
        color: #fff;
        padding: 12px 24px;
        border-radius: 9999px;
        font-size: 0.9rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(50px)';
    }, 2800);
  }

  // --- 4. 詳情通用 Modal ---
  window.openDetailModal = function (data) {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;
    
    document.getElementById('modal-img').src = data.image || '';
    document.getElementById('modal-title').textContent = data.title || '';
    document.getElementById('modal-subtitle').textContent = data.subtitle || '';
    document.getElementById('modal-badge').textContent = data.region || '日本旅遊';
    document.getElementById('modal-desc').textContent = data.desc || '';
    
    const detailsContainer = document.getElementById('modal-extra-info');
    if (detailsContainer && data.extra) {
      detailsContainer.innerHTML = data.extra;
    } else if (detailsContainer) {
      detailsContainer.innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeDetailModal = function () {
    const modal = document.getElementById('detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // --- DOM Ready 初始化 ---
  document.addEventListener('DOMContentLoaded', () => {
    // 櫻花動畫
    initSakura();

    // 滾動頂部導航
    const header = document.querySelector('.site-header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (scrollY > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 手機版漢堡排選單
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (mobileToggle && mainNav) {
      mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });
    }

    // 手機端下拉子選單開關
    const dropdownToggles = document.querySelectorAll('.dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = toggle.closest('.dropdown');
          if (parent) {
            parent.classList.toggle('mobile-open');
          }
        }
      });
    });

    // 收藏夾抽屜開關
    const favOpenBtn = document.getElementById('fav-open-btn');
    const favDrawer = document.getElementById('fav-drawer');
    const favOverlay = document.getElementById('fav-drawer-overlay');
    const favCloseBtn = document.getElementById('fav-close-btn');
    const clearFavBtn = document.getElementById('clear-fav-btn');

    function openFav() {
      renderFavDrawer();
      if (favDrawer && favOverlay) {
        favDrawer.classList.add('active');
        favOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeFav() {
      if (favDrawer && favOverlay) {
        favDrawer.classList.remove('active');
        favOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (favOpenBtn) favOpenBtn.addEventListener('click', openFav);
    if (favCloseBtn) favCloseBtn.addEventListener('click', closeFav);
    if (favOverlay) favOverlay.addEventListener('click', closeFav);

    if (clearFavBtn) {
      clearFavBtn.addEventListener('click', () => {
        if (confirm('確定要清空所有收藏的景點與美食嗎？')) {
          saveFavorites([]);
          updateFavButtons();
          showToast('已清空所有收藏項目！');
        }
      });
    }

    // 點擊收藏按鈕事件委託
    document.body.addEventListener('click', (e) => {
      const favBtn = e.target.closest('[data-fav-id]');
      if (favBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = favBtn.getAttribute('data-fav-id');
        const name = favBtn.getAttribute('data-fav-name') || '景點/美食';
        const region = favBtn.getAttribute('data-fav-region') || '日本';
        const type = favBtn.getAttribute('data-fav-type') || '精選推薦';
        const image = favBtn.getAttribute('data-fav-image') || '';

        toggleFavorite({ id, name, region, type, image });
      }
    });

    // 通用 Modal 關閉
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('detail-modal');
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', window.closeDetailModal);
    }
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          window.closeDetailModal();
        }
      });
    }

    // 初始化收藏狀態
    updateFavBadge();
    updateFavButtons();
  });

  // 公開方法供各專屬頁面調用
  window.TravelApp = {
    showToast,
    toggleFavorite,
    getFavorites,
    updateFavButtons
  };
})();

