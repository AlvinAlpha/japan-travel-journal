/**
 * 日本旅遊誌 - 京都專頁互動功能 (kyoto.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 京都景點詳細數據
  const kyotoData = {
    'kyoto-kiyomizu': {
      title: '清水寺 (Kiyomizu-dera)',
      subtitle: 'きよみずでら · 棟樑未用一釘的世界文化遺產木造舞台',
      region: '京都 · 東山區',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop&q=80',
      desc: '始建於778年，坐落於音羽山腰。巨大的清水舞台由139根巨木縱橫交錯搭建，懸空於錦繡山谷之上。春天粉櫻簇擁、秋季滿山火紅楓葉，被譽為京都無與倫比的絕景。下方音羽之瀧泉水分別代表健康、學業與良緣，參拜者絡繹不絕。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚌 交通方式：</strong>JR京都站搭乘市公車 206 / 100 號至「五條坂」步行約10分</p>
          <p><strong>⏰ 開放時間：</strong>06:00 - 18:00（夜間特別參拜時段延長至 21:30）</p>
          <p><strong>🍵 搭配美食：</strong>二年坂奧丹湯豆腐、藤菜美醬油丸子、中村藤吉抹茶冰淇淋</p>
        </div>
      `
    },
    'kyoto-fushimi': {
      title: '伏見稻荷大社 (Fushimi Inari Taisha)',
      subtitle: 'ふしみいなりたいしゃ · 綿延數千座的朱紅千本鳥居神域',
      region: '京都 · 伏見區',
      image: 'https://images.unsplash.com/photo-1478436127897-769e00d2c715?w=1000&auto=format&fit=crop&q=80',
      desc: '全日本3萬座稻荷神社的總本宮，奉祀掌管農業與商業繁盛的稻荷大神。最震撼人心的是由江戶時代起信徒奉獻的朱紅「千本鳥居」，沿著稻荷山一路向上綿延數公里，陽光透過鳥居縫隙灑落，神秘又莊嚴。狐狸作為神的使者，嘴叼稻穗或寶珠的神態隨處可見。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>JR奈良線「稻荷站」出站即達；京阪本線「伏見稻荷站」步行5分鐘</p>
          <p><strong>⏰ 開放時間：</strong>境內24小時免費開放（清晨6-8點造訪能避開人潮，拍照極美）</p>
          <p><strong>🦊 搭配美食：</strong>伏見傳統稻荷壽司（豆皮壽司）、烤麻糬串、祢ざめ家烤鰻魚飯</p>
        </div>
      `
    },
    'kyoto-arashiyama': {
      title: '嵐山竹林之道與渡月橋 (Arashiyama)',
      subtitle: 'あらしやま · 清幽蒼翠的幽靜竹海與平安貴族避暑勝地',
      region: '京都 · 右京區',
      image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?w=1000&auto=format&fit=crop&q=80',
      desc: '嵐山自平安時代起便是貴族喜愛的離宮名勝。高聳入雲的蒼翠竹林之道長達400公尺，風吹過時沙沙作響的竹濤聲被選為「日本最想保留的聲音百選」。橫跨大堰川的渡月橋，背景襯托著四季變幻的嵐山群峰，景色如詩如畫。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚋 交通方式：</strong>搭乘嵐電至「嵐山站」或JR嵯峨野線至「嵯峨嵐山站」</p>
          <p><strong>🚂 推薦體驗：</strong>搭乘嵯峨野觀光小火車穿梭保津川峽谷，或搭乘保津川手搖遊船泛舟</p>
          <p><strong>☕ 搭配美食：</strong>% ARABICA 渡月橋畔河景咖啡、嵯峨野竹路庵抹茶蕨餅</p>
        </div>
      `
    },
    'kyoto-kinkakuji': {
      title: '金閣寺 鹿苑寺 (Kinkaku-ji)',
      subtitle: 'きんかくじ · 金箔璀璨倒映於鏡湖池的足利將軍別墅',
      region: '京都 · 北區',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '正式名稱為鹿苑寺，由室町幕府第三代將軍足利義滿所建。二、三層外壁全貼上純金金箔的舍利殿矗立於鏡湖池畔，晴空下金碧輝煌的倒影令人屏息凝神，頂部的吉祥金鳳凰展翅欲飛，是日本庭園造景的最高傑作之一。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚌 交通方式：</strong>京都市公車 12 或 205 號至「金閣寺道」下車</p>
          <p><strong>⏰ 開放時間：</strong>09:00 - 17:00</p>
          <p><strong>🍵 搭配美食：</strong>金閣寺境內金箔抹茶霜淇淋、傳統薄茶與和三盆落雁糖</p>
        </div>
      `
    },
    'kyoto-gion': {
      title: '祇園花見小路 (Gion)',
      subtitle: 'ぎおん · 傳統木造町家石疊小徑與藝妓花街古韻',
      region: '京都 · 東山區',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop&q=80',
      desc: '京都最著名的藝妓文化代表街區。花見小路兩旁林立著深褐色格子窗戶的傳統茶屋與高級割烹料理店，腳下是古色古香的石疊步道。傍晚時分若運氣好，常能驚鴻一瞥盛裝打扮前往宴席的藝妓或舞妓。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>京阪電車「祇園四條站」步行3分鐘</p>
          <p><strong>💡 禮儀提醒：</strong>請勿追逐或攔截藝妓拍照，私有巷弄禁止攝影，維護古都莊嚴與安寧。</p>
          <p><strong>🥢 搭配美食：</strong>祇園百年懷石料理、鍵善良房葛切黑蜜甜點</p>
        </div>
      `
    },
    'kyoto-nijo': {
      title: '元離宮二條城 (Nijo Castle)',
      subtitle: 'にじょうじょう · 德川幕府大政奉還的歷史舞台',
      region: '京都 · 中京區',
      image: 'https://images.unsplash.com/photo-1478436127897-769e00d2c715?w=1000&auto=format&fit=crop&q=80',
      desc: '德川家康於1603年所建，二之丸御殿內保存了絢麗的狩野派障壁畫與防止刺客潛入的「鶺鴒鶯鳴地板」，走在上面發出如鳥鳴的聲響。1867年第15代將軍德川慶喜在此宣布「大政奉還」，將政權交還明治天皇，是終結武士時代的關鍵舞台。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>京都市營地鐵東西線「二條城前站」出站即達</p>
          <p><strong>⏰ 開放時間：</strong>08:45 - 17:00（最後入場 16:00）</p>
          <p><strong>🍱 搭配美食：</strong>二條城周邊京町家咖啡甜點、京都高湯玉子燒定食</p>
        </div>
      `
    }
  };

  // 綁定彈窗
  document.querySelectorAll('[data-kyoto-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-kyoto-spot');
      const data = kyotoData[key];
      if (data && window.openDetailModal) {
        window.openDetailModal(data);
      }
    });
  });

  // 景點高亮聯動
  document.querySelectorAll('[data-target-spot]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target-spot');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.style.boxShadow = '0 0 0 3px var(--color-matcha)';
        setTimeout(() => { targetEl.style.boxShadow = ''; }, 1800);
      }
    });
  });
});

