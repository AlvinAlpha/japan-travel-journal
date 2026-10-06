/**
 * 日本旅遊誌 - 沖繩專頁互動功能 (okinawa.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const okinawaData = {
    'okinawa-churaumi': {
      title: '美麗海水族館 (Churaumi Aquarium)',
      subtitle: '美ら海水族館 · 黑潮之海中與巨型鯨鯊鬼蝠魟共舞',
      region: '沖繩 · 本部町',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80',
      desc: '沖繩極具代表性的海洋殿堂。世界最大級水槽「黑潮之海」長35公尺、寬27公尺，蓄水量達7,500公噸。長達8.8公尺的巨大鯨鯊與鬼蝠魟在眼前悠然游弋，宛如置身於深邃夢幻的太平洋海底世界。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>從那霸機場經由沖繩自動車道開車約2小時；或搭乘山原急行巴士</p>
          <p><strong>🕒 鯨鯊餵食秀：</strong>每日 15:00 與 17:00，鯨鯊垂直立泳進食場面震撼無比！</p>
          <p><strong>🥩 搭配美食：</strong>本部牧場炭火烤石垣牛、極品海葡萄丼飯、百夫長海景甜點</p>
        </div>
      `
    },
    'okinawa-manzamo': {
      title: '萬座毛 (Manzamo)',
      subtitle: 'まんざもう · 象鼻海蝕斷崖與「萬人齊坐」之遼闊綠茵',
      region: '沖繩 · 恩納村',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
      desc: '名字源於琉球國王尚敬王讚嘆「可供萬人齊坐的原野」。高達20公尺的隆起珊瑚礁岩石因常年受海水沖刷，形成宛如大象長鼻的奇岩峭壁。腳下是透著層次漸變翡翠綠與琉球藍的無垠東海，日落時分餘暉倒映極其壯美。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>國道58號線開車至恩納村，導航萬座毛周邊遊客中心停車場</p>
          <p><strong>🍜 搭配美食：</strong>恩納村純手打沖繩軟骨排骨麵、海人料理現撈生魚片</p>
        </div>
      `
    },
    'okinawa-kokusai': {
      title: '那霸國際通 (Kokusai Dori)',
      subtitle: 'こくさいどおり · 戰後奇蹟的一英里熱鬧繁華大道',
      region: '沖繩 · 那霸市',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&auto=format&fit=crop&q=80',
      desc: '全長1.6公里的繁華步行街，聚集了數百家土產紀念品店、琉球玻璃工藝店、居酒屋與居酒屋三線琴表演餐廳。在這裡可以買到最道地的沖繩黑糖、雪鹽、泡盛酒與風獅爺擺飾。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚝 交通方式：</strong>沖繩單軌電車「縣廳前站」或「牧志站」出站即達</p>
          <p><strong>🍧 搭配美食：</strong>國際通雪鹽霜淇淋、御菓子御殿剛出爐溫熱紅芋塔、牧志市場活海鮮料理</p>
        </div>
      `
    },
    'okinawa-kouri': {
      title: '古宇利大橋與心形岩',
      subtitle: 'こうりおおはし · 宛如在絕美「古宇利藍」海面上飛馳',
      region: '沖繩 · 今歸仁村',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
      desc: '長達1,960公尺的古宇利跨海大橋，筆直延伸至神話中的「神之島」古宇利島。兩側是沖繩最清澈透明的漸層碧綠果凍海，開車宛如在海面漂浮。島北側的 Ti-nu 海灘更有一對天然形成的愛心岩，是情侶聖地。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>從美麗海水族館自駕約25分鐘即可橫跨大橋抵達</p>
          <p><strong>🍤 搭配美食：</strong>古宇利蝦蝦飯（Kouri Shrimp）、島產無農藥香檬冰沙</p>
        </div>
      `
    },
    'okinawa-naminoue': {
      title: '波上宮 (Naminoue Shrine)',
      subtitle: 'なみのうえぐう · 矗立於珊瑚礁斷崖上的琉球第一神社',
      region: '沖繩 · 那霸市',
      image: 'https://images.unsplash.com/photo-1478436127897-769e00d2c715?w=1000&auto=format&fit=crop&q=80',
      desc: '琉球八社之首，建於隆起的海蝕珊瑚崖之上，紅瓦屋頂散發濃郁琉球王國特色。從旁邊的波之上海灘仰望，神社彷彿漂浮在波濤巨浪之上，保佑著往來航海平安與家內安全，非常靈驗。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚝 交通方式：</strong>單軌電車「旭橋站」步行約15分鐘，鄰近波之上海灘</p>
          <p><strong>⛩️ 必買御守：</strong>書包造型交通安全御守、紅型染傳統花紋貝殼開運守</p>
        </div>
      `
    },
    'okinawa-american': {
      title: '美濱美國村 (American Village)',
      subtitle: 'アメリカンビレッジ · 充滿美式復古風情與日落海景露天餐廳',
      region: '沖繩 · 北谷町',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '原為美軍基地舊址，現打造成融合美式西岸風情的濱海大型複合商城。色彩斑斕的歐美風格建築、日落海灘（Sunset Beach）酒吧、古著雜貨鋪與打卡壁畫，傍晚點燈後充滿異國浪漫情調。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>從那霸市區沿國道58號北上開車約35分鐘</p>
          <p><strong>🥩 搭配美食：</strong>美國村巨大多汁美式漢堡、石板厚切牛排、沖繩豬肉蛋飯糰</p>
        </div>
      `
    }
  };

  document.querySelectorAll('[data-okinawa-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-okinawa-spot');
      const data = okinawaData[key];
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
        targetEl.style.boxShadow = '0 0 0 3px #00897B';
        setTimeout(() => { targetEl.style.boxShadow = ''; }, 1800);
      }
    });
  });
});

