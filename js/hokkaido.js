/**
 * 日本旅遊誌 - 北海道專頁互動功能 (hokkaido.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const hokkaidoData = {
    'hokkaido-otaru': {
      title: '小樽運河 (Otaru Canal)',
      subtitle: 'おたるうんが · 浪漫煤氣燈瓦斯燈與百年紅磚倉庫群',
      region: '北海道 · 小樽市',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1000&auto=format&fit=crop&q=80',
      desc: '小樽最具代表性的浪漫地標。昔日作為繁忙貨運要衝，如今石造倉庫改建為特色工藝館、玻璃工房與餐廳。傍晚63盞煤氣燈亮起，金黃倒影映照在運河水面，尤其冬季雪燈之路燭光閃爍，美得令人屏息。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>從JR札幌站搭乘快速機場號（Rapid Airport）約32分鐘抵達「小樽站」</p>
          <p><strong>🕯️ 推薦體驗：</strong>小樽運河遊船、北一硝子館選購玻璃工藝品、音樂盒堂童話十字路口</p>
          <p><strong>🦀 搭配美食：</strong>小樽三角市場現挑現煮活帝王蟹海鮮丼、LeTAO雙層起司乳酪蛋糕</p>
        </div>
      `
    },
    'hokkaido-hakodate': {
      title: '函館山夜景 (Mt. Hakodate)',
      subtitle: 'はこだてやま · 譽為米其林三星「世界三大夜景」之一',
      region: '北海道 · 函館市',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '標高334公尺的函館山，從山頂俯瞰呈現對稱扇形的雙曲弧線海灣夜景。津輕海峽與函館灣交織夾住市中心繁華燈火，宛如被黑絲絨包裹的璀璨鑽石項鍊，是無數戀人一生必訪一次的極致景緻。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚡 交通方式：</strong>搭乘函館市電至「十字街站」步行10分鐘至函館山纜車站，搭乘纜車3分鐘登頂</p>
          <p><strong>💡 觀景指南：</strong>建議在日落前30分鐘抵達山頂觀景台，飽覽夕陽轉夜空的魔幻藍調</p>
          <p><strong>🍔 搭配美食：</strong>函館小丑漢堡（Lucky Pierrot）、金森紅磚倉庫現烤海膽</p>
        </div>
      `
    },
    'hokkaido-sapporo': {
      title: '札幌大通公園與電視塔',
      subtitle: 'おおどおりこうえん · 橫貫市中心綠帶與雪祭主要舞台',
      region: '北海道 · 札幌市',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1000&auto=format&fit=crop&q=80',
      desc: '長達1.5公里橫跨12個街區的綠意長廊。春季丁香盛開，夏季是盛大的露天啤酒節，冬季則化身為舉世聞名的「札幌雪祭」主會場，巨大的精雕冰雕與雪像矗立在雪白大地中，登上大通電視塔能鳥瞰全景。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚇 交通方式：</strong>札幌地下鐵南北線/東西線/東豐線「大通站」出站即達</p>
          <p><strong>🍜 搭配美食：</strong>札幌湯咖哩名店 Suage+、薄野拉麵橫丁濃厚味噌拉麵</p>
        </div>
      `
    },
    'hokkaido-furano': {
      title: '富良野四季彩之丘 (Furano)',
      subtitle: 'しきさいのおか · 廣袤起伏的七彩拼布花海地毯',
      region: '北海道 · 美瑛町/富良野',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80',
      desc: '佔地廣達15公頃的丘陵花田。每年5月至10月，薰衣草、向日葵、大波斯菊等數十種花卉如彩虹拼布般鋪滿整片起伏的山丘，襯托著遠方大雪山連峰，壯麗非凡。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>JR富良野線「美馬牛站」開車約5分鐘，推薦北海道自駕租車前往</p>
          <p><strong>🍈 搭配美食：</strong>富民農場現切多汁夕張哈密瓜、現擠特濃生乳霜淇淋</p>
        </div>
      `
    },
    'hokkaido-aoiike': {
      title: '美瑛白金青池 (Shirogane Blue Pond)',
      subtitle: 'あおいいけ · 夢幻天藍色泉水與枯木倒影之仙境',
      region: '北海道 · 上川郡美瑛町',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=80',
      desc: '因十勝岳火山防災工程而意外形成的神秘湖泊。清澈的水中富含氫氧化鋁等礦物微粒，折射出夢幻不可思議的翡翠青天藍色。枯死的落葉松靜靜佇立在湖面，曾被蘋果公司選作電腦桌布而轟動全球。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚗 交通方式：</strong>JR美瑛站搭乘道北巴士約20分鐘，或自駕經由白金溫泉公路</p>
          <p><strong>💡 季節亮點：</strong>冬季青池水面結冰積雪，搭配夜間彩色燈光投射，宛如冰雪奇緣夢境！</p>
        </div>
      `
    },
    'hokkaido-noboribetsu': {
      title: '登別地獄谷 (Noboribetsu Jigokudani)',
      subtitle: 'じごくだに · 煙霧蒸騰白煙滾滾的北海道第一溫泉鄉',
      region: '北海道 · 登別市',
      image: 'https://images.unsplash.com/photo-1570535608479-2a9941ebb203?w=1000&auto=format&fit=crop&q=80',
      desc: '直徑約450公尺的火山口遺跡，沿著棧道漫步，赤紅灰白岩石中不斷噴湧出滾燙的熱泉、硫磺氣體與白煙，咕嘟咕嘟作響，宛如惡鬼盤據的地獄。此處每分鐘湧出3,000公升豐富泉質，滋養著下方的登別溫泉街。',
      extra: `
        <div style="margin-top: 14px; font-size: 0.9rem; line-height: 1.8;">
          <p><strong>🚆 交通方式：</strong>JR「登別站」搭乘道南巴士15分鐘至登別溫泉總站</p>
          <p><strong>🥩 搭配美食：</strong>登別閻魔拉麵、炭火成吉思汗烤羊肉、登別產牛乳布丁</p>
        </div>
      `
    }
  };

  document.querySelectorAll('[data-hokkaido-spot]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-hokkaido-spot');
      const data = hokkaidoData[key];
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
        targetEl.style.boxShadow = '0 0 0 3px #5C7B9E';
        setTimeout(() => { targetEl.style.boxShadow = ''; }, 1800);
      }
    });
  });
});

