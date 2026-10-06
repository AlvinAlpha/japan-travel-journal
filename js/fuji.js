/**
 * 日本旅遊誌 - 富士山周邊專頁互動功能 (fuji.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const fujiData = {
    'fuji-kawaguchiko': {
      title: '河口湖與逆富士 (Lake Kawaguchi)',
      subtitle: 'かわぐちこ · 富士五湖中最受歡迎之湖光山色勝地',
      region: '富士山周邊 · 山梨縣富士河口湖町',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1000&auto=format&fit=crop&q=80',
      desc: '富士五湖中觀光設施最完善的湖泊。清晨微風初止、湖面平靜如鏡時，能映照出對稱完美的「逆富士」倒影奇景。搭乘天上山全景纜車可登高眺望湖泊與整座雄偉富士山全景。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>從新宿站搭乘 JR 特急「富士回遊（Fuji Excursion）」約1小時55分直達河口湖站</p>
          <p><strong>🚢 推薦玩法：</strong>搭乘河口湖遊覽船「Appare」遊湖、沿湖北岸散步道騎乘自行車</p>
          <p><strong>🍲 搭配美食：</strong>河口湖名店「不動茶屋」大鐵鍋滾燙餺飥麵、湖畔炸若鷺魚定食</p>
        </div>
      `
    },
    'fuji-chureito': {
      title: '新倉山淺間公園 (Chureito Pagoda)',
      subtitle: 'あらくらやませんげんこうえん · 紅色五重塔、粉櫻與富士山同框之國寶明信片角度',
      region: '富士山周邊 · 山梨縣富士吉田市',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1000&auto=format&fit=crop&q=80',
      desc: '全球攝影師與明信片最經典的角度！沿著398階「咲くや姬階梯」登上山腰觀景台，朱紅色的忠靈塔五重塔矗立眼前，春季盛開的染井吉野櫻襯托著白雪皚皚的富士山頂，是代表日本形象的最頂級絕景。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>富士急行線「下吉田站」步行約10-15分鐘至登山口</p>
          <p><strong>💡 拍攝建議：</strong>上午順光拍照色彩最飽滿；春季櫻花祭期間建議清晨7點前抵達避開人潮</p>
          <p><strong>🍡 搭配美食：</strong>下吉田老街炭火手烤仙貝、桔梗信玄餅霜淇淋</p>
        </div>
      `
    },
    'fuji-oshino': {
      title: '忍野八海 (Oshino Hakkai)',
      subtitle: 'おしのはっかい · 富士山萬年積雪融化過濾之清澈天然神泉',
      region: '富士山周邊 · 山梨縣忍野村',
      image: 'https://images.unsplash.com/photo-1570535608479-2a9941ebb203?w=1000&auto=format&fit=crop&q=80',
      desc: '富士山融雪歷經數十至數百年地下熔岩層自然過濾，於山麓湧出的八處天然純淨清泉。泉水澄澈透明如藍寶石，水中悠游著高山鱒魚與游魚，能見度深達數米，背景襯托著茅草屋農舍與遠方富士山，宛如世外桃源。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚌 交通方式：</strong>從河口湖站或富士山站搭乘富士急巴士約20分鐘至「忍野八海站」</p>
          <p><strong>💧 推薦體驗：</strong>品嚐八海湧出的純淨冰涼泉水（可自備水瓶盛裝帶走）</p>
          <p><strong>🍢 搭配美食：</strong>現烤草餅（艾草紅豆糰子）、富士山泉水現煮手工蕎麥麵</p>
        </div>
      `
    },
    'fuji-fujiq': {
      title: '富士急樂園 (Fuji-Q Highland)',
      subtitle: 'ふじきゅうハイランド · 面對富士山尖叫的 Guinness 世界紀錄雲霄飛車',
      region: '富士山周邊 · 富士吉田市',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '驚險刺激指數爆表的極限樂園！坐擁多項金氏世界紀錄的過山車：總落差79公尺的「FUJIYAMA」、加速最快的「Do-dodonpa」，以及聞名全球超長恐怖「戰慄迷宮」廢棄醫院鬼屋，過山車衝向天際時能以驚心動魄的角度仰望富士山！',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>富士急行線「富士急樂園站」直通樂園入口</p>
          <p><strong>🎟️ 票價攻略：</strong>入園免費，各遊樂設施單獨收費，亦可購買一日通票暢玩！</p>
        </div>
      `
    },
    'fuji-oishi': {
      title: '大石公園花海步道 (Oishi Park)',
      subtitle: 'おおいしこうえん · 薰衣草紫色花田與秋季火紅掃帚草',
      region: '富士山周邊 · 河口湖北岸',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      desc: '坐落於河口湖北岸的花海公園，視野開闊完全無遮蔽。6月至7月有整片紫色薰衣草花田，10月中旬則是圓滾滾火紅的掃帚草（Kochia），湖水、彩色花卉與富士山三重奏，是河口湖最療癒的散步景點。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚌 交通方式：</strong>搭乘河口湖周遊巴士（紅線）至終點站「河口湖自然生活館」</p>
          <p><strong>🍦 搭配美食：</strong>河口湖自然生活館特濃巨峰葡萄霜淇淋、藍莓冰沙</p>
        </div>
      `
    },
    'fuji-iyashi': {
      title: '西湖里根場 (Saiko Iyashi-no-Sato)',
      subtitle: '西湖いやしの里根場 · 重現富士山腳下傳統茅草頂合掌屋聚落',
      region: '富士山周邊 · 富士河口湖町西湖',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop&q=80',
      desc: '重現昭和初期因颱風毀損的傳統茅草覆頂村落，目前約有20棟古樸農家。每棟房屋內設有陶藝、紙藝等工藝體驗教室，遊客還可租借日本傳統和服或武士盔甲漫步村內，背景即是莊嚴的富士山頂。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚌 交通方式：</strong>從河口湖站搭乘西湖周遊巴士（綠線）約40分鐘即達</p>
          <p><strong>🍵 搭配美食：</strong>炭烤山女魚鹽燒、茅草屋內甘酒與味噌烤糰子</p>
        </div>
      `
    }
  };

  document.querySelectorAll('[data-fuji-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-fuji-spot');
      const data = fujiData[key];
      if (data && window.openDetailModal) {
        window.openDetailModal(data);
      }
    });
  });

  document.querySelectorAll('[data-target-spot]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target-spot');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.style.boxShadow = '0 0 0 3px #4A6E94';
        setTimeout(() => { targetEl.style.boxShadow = ''; }, 1800);
      }
    });
  });
});

