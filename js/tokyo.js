/**
 * 日本旅遊誌 - 東京專頁互動功能 (tokyo.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. 東京專屬景點數據
  const tokyoData = {
    'tokyo-skytree': {
      title: '東京晴空塔 (Tokyo Skytree)',
      subtitle: 'とうきょうスカイツリー · 展望634公尺的世界級新地標',
      region: '東京 · 墨田區',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1000&auto=format&fit=crop&q=80',
      desc: '東京晴空塔為世界最高自立式電波塔，站在350公尺天望甲板或450公尺天望回廊，白天能遠眺富士山，夜晚則能飽覽如星河般璀璨的東京大都會夜景。底部的「東京晴空街道 Solamachi」擁有超過300間名店與水族館。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>東武晴空塔線「東京晴空塔站」或地鐵半藏門線「押上站」即達</p>
          <p><strong>🎟️ 票價參考：</strong>天望甲板成人約 2,100 日圓、天望回廊聯票約 3,100 日圓</p>
          <p><strong>🍲 推薦美食搭配：</strong>月島文字燒、晴空商場迴轉壽司名店「Toriton」</p>
        </div>
      `
    },
    'tokyo-sensoji': {
      title: '淺草寺雷門 (Senso-ji)',
      subtitle: 'せんそうじ · 東京都內歷史最悠久的觀音靈剎',
      region: '東京 · 台東區',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&auto=format&fit=crop&q=80',
      desc: '建於西元628年的淺草寺，是造訪東京絕對必訪的傳統景點。巨大的紅色「雷門」提燈氣勢恢宏，從雷門穿過綿延250公尺的「仲見世商店街」，沿途充滿人形燒、炸饅頭與各式傳統工藝品，香火鼎盛，江戶風情濃厚。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>東京地鐵銀座線 / 都營淺草線「淺草站」步行5分鐘</p>
          <p><strong>⏰ 參拜時間：</strong>本堂 06:00 - 17:00（境內全天開放）</p>
          <p><strong>🍤 推薦美食搭配：</strong>淺草百年老店「大黑家」海老天丼、壽々喜園世界最濃抹茶冰淇淋</p>
        </div>
      `
    },
    'tokyo-shibuya': {
      title: '澀谷十字路口 & Shibuya Sky',
      subtitle: 'しぶやスクランブル交差点 · 全球最繁忙十字路口與高空露天展望台',
      region: '東京 · 澀谷區',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '澀谷十字路口每次綠燈最多有超過3,000人同時穿行，是當代東京繁華與活力的縮影。高達229公尺的「SHIBUYA SKY」屋頂露天觀景台，提供無死角俯瞰東京全景的震撼視野，尤其黃昏日落魔幻時刻最受年輕人喜愛。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>JR山手線 / 地鐵銀座線、半藏門線「澀谷站」八公口直通</p>
          <p><strong>💡 貼心提醒：</strong>SHIBUYA SKY 建議提前2-4週於官網預約日落熱門時段門票。</p>
          <p><strong>🥩 推薦美食搭配：</strong>澀谷頂級黑毛和牛燒肉、極味屋石板漢堡排</p>
        </div>
      `
    },
    'tokyo-meiji': {
      title: '明治神宮 (Meiji Jingu)',
      subtitle: 'めいじじんぐう · 都會綠洲之神聖巨木森林',
      region: '東京 · 澀谷區',
      image: 'https://images.unsplash.com/photo-1583084336829-5704f7a9a52e?w=1000&auto=format&fit=crop&q=80',
      desc: '座落在原宿熱鬧街區旁的幽靜神聖森林，佔地廣達70公頃，種植了超過10萬株來自全日本進獻的樹木。參道上的巨大木造大鳥居為全日本最大，境內常可巧遇日本傳統神前婚禮遊行，氣氛莊嚴清幽。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>JR山手線「原宿站」或千代田線「明治神宮前站」步行2分鐘</p>
          <p><strong>⏰ 開放時間：</strong>日出開門、日落閉門（每月時間微調）</p>
          <p><strong>🥞 推薦美食搭配：</strong>參拜後前往竹下通/表參道享用人氣可麗餅與和風日式鬆餅</p>
        </div>
      `
    },
    'tokyo-tower': {
      title: '東京鐵塔 (Tokyo Tower)',
      subtitle: 'とうきょうタワー · 紅白色經典浪漫昭和象徵',
      region: '東京 · 港區',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1000&auto=format&fit=crop&q=80',
      desc: '高度332.9公尺，是東京永恆的浪漫記憶與經典標誌。紅白色塔身在夜幕中點亮暖黃燈光時，散發無可取代的情調。從芝公園或增上寺仰望鐵塔，是日劇與情侶約會中最常出現的經典畫面。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>都營大江戶線「赤羽橋站」步行5分鐘，或日比谷線「神谷町站」</p>
          <p><strong>🏮 推薦美食搭配：</strong>麻布十番浪花家總本店傳統鯛魚燒、六本木精緻居酒屋料理</p>
        </div>
      `
    },
    'tokyo-ueno': {
      title: '上野恩賜公園與阿美橫丁',
      subtitle: 'うえのおんしこうえん · 櫻花名勝、博物館與熱鬧平民市場',
      region: '東京 · 台東區',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1000&auto=format&fit=crop&q=80',
      desc: '東京最著名的賞櫻勝地之一，園內擁有國立西洋美術館、東京國立博物館等豐富文化設施。緊鄰的高架橋下「阿美橫丁」則洋溢著庶民市集的叫賣聲，海鮮、乾貨、藥妝與平價小吃琳瑯滿目。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>JR「上野站」不忍口出站即達</p>
          <p><strong>🍜 推薦美食搭配：</strong>上野阿美橫丁一蘭拉麵、三浦三崎港爆量軍艦壽司</p>
        </div>
      `
    }
  };

  // 彈窗監聽
  document.querySelectorAll('[data-tokyo-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-tokyo-spot');
      const data = tokyoData[key];
      if (data && window.openDetailModal) {
        window.openDetailModal(data);
      }
    });
  });

  // 點擊美食中的搭配景點，跳轉並高亮對應景點
  document.querySelectorAll('[data-target-spot]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target-spot');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.style.transition = 'all 0.5s ease';
        targetEl.style.boxShadow = '0 0 0 3px var(--color-torii)';
        setTimeout(() => {
          targetEl.style.boxShadow = '';
        }, 1800);
      }
    });
  });

  // 導航列滾動監聽
  const navItems = document.querySelectorAll('.region-nav-item');
  const sections = ['spots', 'foods', 'plans', 'traffic'].map(id => document.getElementById(id)).filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.id;
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });
});

