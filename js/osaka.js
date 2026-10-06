/**
 * 日本旅遊誌 - 大阪專頁互動功能 (osaka.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const osakaData = {
    'osaka-castle': {
      title: '大阪城天守閣 (Osaka Castle)',
      subtitle: 'おおさかじょう · 豐臣秀吉霸氣天下一統之象徵',
      region: '大阪 · 中央區',
      image: 'https://images.unsplash.com/photo-1590559899731-a372a1464529?w=1000&auto=format&fit=crop&q=80',
      desc: '始建於1583年，壯觀宏偉的五層八階天守閣頂部飾有金光閃閃的猛虎與金色鯱瓦。內部設有高科技歷史博物館展示戰國時期風雲變幻，8樓展望台能360度俯瞰整座大阪市。大阪城公園更種植有數千株櫻花樹，是關西最著名賞櫻景點之一。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>地鐵谷町線「谷町四丁目站」或JR環狀線「森之宮站」步行5分鐘</p>
          <p><strong>⏰ 開放時間：</strong>09:00 - 17:00（最後入場 16:30）</p>
          <p><strong>🐙 搭配美食：</strong>大阪城公園前現烤熱騰騰章魚燒、關西風牛肉烏龍麵</p>
        </div>
      `
    },
    'osaka-dotonbori': {
      title: '道頓堀與心齋橋 (Dotonbori)',
      subtitle: 'どうとんぼり · 吃趴到倒的美食天堂與巨大立體招牌巨街',
      region: '大阪 · 中央區難波',
      image: 'https://images.unsplash.com/photo-1590253230536-a363765108a9?w=1000&auto=format&fit=crop&q=80',
      desc: '大阪最具生命力的狂歡地標！運河兩岸林立著巨大的固力果跑跑人霓虹招牌、巨型立體活動大螃蟹、金龍拉麵招牌。街道充滿烤章魚燒、大阪燒與串炸的迷人香氣，隔壁就是長達數百公尺的心齋橋商店街，購物美食一網打盡。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>大阪地鐵御堂筋線 / 千日前線「難波站」14號出口步行2分鐘</p>
          <p><strong>🚢 推薦體驗：</strong>搭乘「道頓堀水上觀光船」從水面近距離仰望各個大型地標招牌</p>
          <p><strong>🥢 搭配美食：</strong>本家大章魚燒、美津濃大阪燒、一蘭拉麵屋台館、夫妻善哉紅豆湯</p>
        </div>
      `
    },
    'osaka-tsutenkaku': {
      title: '通天閣與新世界 (Tsutenkaku)',
      subtitle: 'つうてんかく · 懷舊昭和昭和風情與比利肯福神之塔',
      region: '大阪 · 浪速區',
      image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=1000&auto=format&fit=crop&q=80',
      desc: '建於1912年，塔高108公尺，意為「通往天空的高大建築」。周遭的新世界街區保留了純濃的昭和復古氛圍，巨大的河豚燈籠與琳瑯滿目的串炸店招牌交錯。塔頂供奉著摸腳底能帶來好運的「比利肯福神（Billiken）」，更有刺激的戶外迴旋溜滑梯「Tower Slider」。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>大阪地鐵堺筋線「惠美須町站」出站即達；御堂筋線「動物園前站」步行5分鐘</p>
          <p><strong>🍤 搭配美食：</strong>新世界「八重勝」串炸、元祖炸串達摩（禁止二次沾醬的規矩在地體驗！）</p>
        </div>
      `
    },
    'osaka-usj': {
      title: '日本環球影城 (USJ)',
      subtitle: 'ユニバーサル・スタジオ・ジャパン · 超級任天堂世界與哈利波特的奇幻冒險',
      region: '大阪 · 此花區',
      image: 'https://images.unsplash.com/photo-1590559899731-a372a1464529?w=1000&auto=format&fit=crop&q=80',
      desc: '全球人氣最高的主題樂園之一！走進高度還原遊戲世界的「超級任天堂世界（Super Nintendo World）」，戴上能量手環擊打問號磚塊；走入「哈利波特的魔法世界」城堡喝奶油啤酒，沉浸在極致震撼的聲光感官盛宴。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>從JR大阪站搭乘JR環狀線至西九條轉夢咲線，於「環球城站（Universal City）」下車</p>
          <p><strong>💡 必備攻略：</strong>強烈建議預先購買快速通關（Express Pass）或入園後立即於官方APP抽取區域入場券。</p>
        </div>
      `
    },
    'osaka-umeda': {
      title: '梅田藍天大廈空中庭園展望台',
      subtitle: 'うめだスカイビル · 360度露天高空漫步與星空步道',
      region: '大阪 · 北區梅田',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '由兩棟超高層建築在40樓頂端相連的獨特雙塔建築，被英國《泰晤士報》評為世界二十大建築之一。離地173公尺的圓形露天空中庭園，夜晚地面會發出螢光微光如銀河，吹著微風俯瞰淀川與大阪都會繁華夜景無比浪漫。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>JR「大阪站」或地鐵御堂筋線「梅田站」步行約9分鐘</p>
          <p><strong>🎟️ 票價優惠：</strong>使用「大阪周遊券」指定時段可享免費入場！</p>
        </div>
      `
    },
    'osaka-kuromon': {
      title: '黑門市場 (Kuromon Market)',
      subtitle: 'くろもんいちば · 大阪人的廚房與海鮮和牛美食街',
      region: '大阪 · 中央區日本橋',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=1000&auto=format&fit=crop&q=80',
      desc: '擁有200年歷史的拱廊型傳統海鮮市場，長達600公尺，聚集了約150間生鮮蔬果、水產魚肉與熟食攤商。現場現剖巨無霸生蠔、海膽、炭火現烤和牛串燒與甘甜哈密瓜，走走吃吃樂趣無窮。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>大阪地鐵千日前線 / 堺筋線「日本橋站」10號出口步行1分鐘</p>
          <p><strong>⏰ 推薦時段：</strong>上午09:30 - 下午14:00，食材最新鮮齊全</p>
        </div>
      `
    }
  };

  document.querySelectorAll('[data-osaka-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-osaka-spot');
      const data = osakaData[key];
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
        targetEl.style.boxShadow = '0 0 0 3px var(--color-torii)';
        setTimeout(() => { targetEl.style.boxShadow = ''; }, 1800);
      }
    });
  });
});

