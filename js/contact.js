/**
 * 日本旅遊誌 - 聯絡我們專頁互動功能 (contact.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const form = document.getElementById('consultation-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const region = document.getElementById('contact-region').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        if (window.TravelApp) {
          window.TravelApp.showToast('請填寫必填欄位（姓名、Email 與諮詢內容）');
        } else {
          alert('請填寫必填欄位！');
        }
        return;
      }

      // 模擬發送狀態
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 正在送出諮詢...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> 送出諮詢需求';
        }

        // 呼叫全局 Modal 顯示感謝訊息
        if (window.openDetailModal) {
          window.openDetailModal({
            title: '感謝您的諮詢！🌸',
            subtitle: '日本旅遊誌已收到您的旅遊規劃需求',
            region: region ? `諮詢地區：${region}` : '日本自由行諮詢',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
            desc: `親愛的 ${name} 您好，感謝您與「日本旅遊誌」聯繫！我們的旅遊編輯與諮詢顧問將會於 24 小時內透過您的 Email（${email}）回覆相關建議與客製化靈感，期待陪伴您展開最難忘的日本之旅！`,
            extra: `
              <div style="margin-top:14px; padding:12px; background:var(--bg-primary); border-radius:8px; font-size:0.88rem; line-height:1.7;">
                <p>📍 <strong>服務據點：</strong>台北市 XX 區 XX 路 XX 號</p>
                <p>📞 <strong>客服電話：</strong>02-1234-5678</p>
                <p>⏰ <strong>營業時間：</strong>週二至週日 11:00 - 21:00（週一公休）</p>
              </div>
            `
          });
        }

        form.reset();
      }, 1000);
    });
  }
});

