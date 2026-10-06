/**
 * 日本旅遊誌 - 首頁專屬互動功能 (index.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. FAQ 手風琴展開/收合切換 ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // 可選：關閉其他項目（手風琴單選）
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });

        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 2. 首頁熱門景點詳情 Modal 數據與彈出 ---
  const spotsData = {
    'spot-skytree': {
      title: '東京晴空塔 (Tokyo Skytree)',
      subtitle: 'とうきょうスカイツリー · 世界最高自立式電波塔',
      region: '東京',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1000&auto=format&fit=crop&q=80',
      desc: '日本著名地標之一，高達634公尺。旅客可以從350公尺的展望天望甲板或450公尺的天望回廊，以360度全景俯瞰繁華的東京都市景色，晴天時甚至能遠眺富士山。塔下的「東京晴空街道（Tokyo Solamachi）」擁有超過300家商店與特色餐廳，非常適合安排半日或一日遊行程。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>東武晴空塔線「東京晴空塔站」或半藏門線「押上站」直達</p>
          <p><strong>⏰ 營業時間：</strong>10:00 - 21:00（最後入場 20:00）</p>
          <p><strong>🍜 推薦搭配美食：</strong>晴空街道壽司名店、押上町傳統文字燒、抹茶冰淇淋</p>
          <p><strong>💡 參觀建議：</strong>建議在日落前1小時抵達，能同時飽覽夕陽餘暉與璀璨萬家燈火的東京夜景。</p>
        </div>
      `
    },
    'spot-kiyomizu': {
      title: '京都清水寺 (Kiyomizu-dera)',
      subtitle: 'きよみずでら · 聯合國教科文組織世界文化遺產',
      region: '京都',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop&q=80',
      desc: '京都最具代表性的歷史名剎之一，始建於西元778年。雄偉的清水舞台依山而建，由139根巨大的櫸木柱並未動用任何一根鐵釘搭建而成。春季粉嫩櫻花環繞，秋季滿山火紅楓葉如錦，站在舞台上俯瞰古都京都景緻壯麗非凡。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>京都市營巴士 206 或 100 號至「五條坂」或「清水道」下車步行約10分鐘</p>
          <p><strong>⏰ 開放時間：</strong>06:00 - 18:00（夜間特別參拜期延長至 21:30）</p>
          <p><strong>🍵 推薦搭配美食：</strong>二年坂三年坂宇治抹茶聖代、清水產寧坂傳統湯豆腐、生八橋甜點</p>
          <p><strong>💡 參觀建議：</strong>走訪音羽之瀧祈求健康、學業或姻緣，沿途漫步二年坂、三年坂老街別有一番古都幽情。</p>
        </div>
      `
    },
    'spot-osakacastle': {
      title: '大阪城天守閣 (Osaka Castle)',
      subtitle: 'おおさかじょう · 日本戰國歷史與賞櫻名勝',
      region: '大阪',
      image: 'https://images.unsplash.com/photo-1590559899731-a372a1464529?w=1000&auto=format&fit=crop&q=80',
      desc: '大阪代表性的歷史名勝，由豐臣秀吉於1583年興建。壯觀的白色城牆、金碧輝煌的飛簷走獸以及巨大的護城河巨石，令人嘆為觀止。天守閣內部展示了豐富的戰國歷史文物與黃金茶室，城堡周圍擁有寬闊的大阪城公園，春季染井吉野櫻盛開時格外迷人。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>JR 環狀線「大阪城公園站」或地鐵中央線「森之宮站」步行5分鐘</p>
          <p><strong>⏰ 營業時間：</strong>09:00 - 17:00（最後入館 16:30）</p>
          <p><strong>🐙 推薦搭配美食：</strong>大阪城公園旁章魚燒攤位、道頓堀元祖大阪燒、關西風高湯串炸</p>
          <p><strong>💡 參觀建議：</strong>可搭乘護城河黃金御座船體驗水上視角，登上8樓頂層展望台鳥瞰大阪市中心天際線。</p>
        </div>
      `
    },
    'spot-fuji': {
      title: '富士山與河口湖 (Mt. Fuji)',
      subtitle: 'ふじさん · 日本心靈神山與世界自然文化遺產',
      region: '富士山周邊',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1000&auto=format&fit=crop&q=80',
      desc: '日本最具代表性的神聖地標，標高3776公尺。在富士五湖中以「河口湖」周邊設施最為完善，湖畔倒映富士山的「逆富士」美景名揚海內外。無論是漫步湖畔步道、搭乘纜車登高天上山，還是春天的大石公園薰衣草，都是令人流連忘返的絕景。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>從新宿搭乘富士回遊特急直達「河口湖站」約1小時55分</p>
          <p><strong>🍜 推薦搭配美食：</strong>山梨在地特產「餺飥麵（ほうとう）」、桔梗信玄餅、富士山造型布丁</p>
          <p><strong>💡 參觀建議：</strong>早晨湖面風平浪靜最容易拍攝到鏡面逆富士；推薦造訪「新倉山淺間公園」拍攝五重塔與富士山同框。</p>
        </div>
      `
    },
    'spot-otaru': {
      title: '北海道小樽運河 (Otaru Canal)',
      subtitle: 'おたるうんが · 浪漫復古煤油燈與玻璃音樂盒之都',
      region: '北海道',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1000&auto=format&fit=crop&q=80',
      desc: '以運河、百年紅磚倉庫群與浪漫懷舊氛圍聞名天下。昔日作為繁忙貨運碼頭，如今沿岸保留了昔日風華，排列著復古瓦斯煤氣燈。冬季雪景搭配小樽運河點燈與浮玉燭光，呈現充滿日式北國風情的純淨浪漫。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>從 JR「札幌站」搭乘快速機場號（JR Rapid Airport）約35分鐘即可抵達「小樽站」</p>
          <p><strong>⏰ 點燈時間：</strong>日落至 24:00（瓦斯燈點燈）</p>
          <p><strong>🦀 推薦搭配美食：</strong>小樽三角市場現切帝王蟹海鮮丼、LeTAO 雙層起司乳酪蛋糕、北菓樓泡芙</p>
          <p><strong>💡 參觀建議：</strong>推薦從小樽運河一路散步至童話十字路口與音樂盒堂，黃昏暮色是最佳拍攝時段。</p>
        </div>
      `
    },
    'spot-okinawa-aquarium': {
      title: '沖繩美麗海水族館 (Churaumi Aquarium)',
      subtitle: 'おきなわちゅらうみすいぞくかん · 蔚藍黑潮之海奇蹟',
      region: '沖繩',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop&q=80',
      desc: '沖繩極具代表性的海洋天堂。館內擁有世界最大級別的巨大水槽「黑潮之海」，巨大的鯨鯊與鬼蝠魟悠游於眼前，令人彷彿置身於深邃夢幻的深藍海底。座落於國營沖繩紀念公園內，戶外更有蔚藍海洋、海豚秀與珊瑚礁探索區。',
      extra: `
        <div style="margin-top: 16px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>📍 交通方式：</strong>那霸機場開車走沖繩自動車道約2小時，或搭乘山原急行巴士直達</p>
          <p><strong>⏰ 營業時間：</strong>08:30 - 18:30（旺季延長至 20:00）</p>
          <p><strong>🥩 推薦搭配美食：</strong>本部町阿古豬排定食、石垣牛炭火燒肉、新鮮海葡萄蓋飯、沖繩排骨麵</p>
          <p><strong>💡 參觀建議：</strong>下午15:00與17:00為黑潮之海鯨鯊餵食秀時間，場面震撼千萬別錯過。</p>
        </div>
      `
    }
  };

  // 景點卡片點擊查看詳情按鈕
  document.querySelectorAll('[data-spot-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const spotKey = btn.getAttribute('data-spot-modal');
      const spot = spotsData[spotKey];
      if (spot && window.openDetailModal) {
        window.openDetailModal(spot);
      }
    });
  });

  // 目標受眾標籤點擊反饋提示
  const audienceChips = document.querySelectorAll('.audience-chip');
  audienceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.textContent.trim();
      if (window.TravelApp) {
        window.TravelApp.showToast(`為您推薦適合「${text}」的最佳旅遊行程！`);
      }
    });
  });
});

