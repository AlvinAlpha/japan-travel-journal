# 🌸 日本旅遊誌 (Japan Travel Journal)

> 探索日本最迷人的風景，開啟一趟難忘的日本之旅。  
> 專為熱愛日本旅遊的旅人、情侶朋友、初訪新手與自由行上班族打造的日系清新旅遊資訊誌。

[![GitHub Pages Deployment](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen?logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/zh-TW/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/zh-TW/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 網站簡介

**「日本旅遊誌」** 是一個融合日系清新、溫暖雜誌風美學的旅遊資訊網站。網站帶領旅客探索東京、京都、大阪、北海道、沖繩、富士山等熱門地區，提供著名景點介紹、在地特色美食深度推薦、1日/3日/5日自由行行程規劃與實用旅遊須知 Q&A。

---

## ✨ 核心特色與功能亮點

1. **模組化架構（CSS 與 JS 完全獨立）：**
   - 每個網頁均擁有專屬的獨立樣式表（`css/*.css`）與功能腳本（`js/*.js`），結構清晰、彼此解耦、利於維護擴充。
2. **六大旅遊地區獨立專屬頁面：**
   - 點擊任一地區（如東京、京都、大阪、北海道、沖繩、富士山），即刻進入該地區獨立專頁，完整展示**當地著名旅遊景點**與**在地特色美食**（皆附高畫質真實照片）。
3. **美食與旅遊景點聯動搭配：**
   - 每一道日本特色美食（壽司、拉麵、和牛、章魚燒、抹茶聖代、湯咖哩、文字燒、天婦羅等）均配有專屬圖片，並標註**「搭配推薦景點」**。在頁面中點擊搭配景點，畫面將平滑滾動並**發光高亮**該景點卡片！
4. **全站景點與美食「我的收藏」系統（Favorites）：**
   - 點擊卡片愛心圖標即可加入收藏清單，資料透過 `localStorage` 本地儲存，支援展開側邊抽屜（Drawer）隨時查閱、移除或清空。
5. **櫻花飄落動態特效（Canvas Sakura）：**
   - 畫面飄灑唯美輕柔的日系櫻花瓣，右下角配備懸浮控制開關（🌸 櫻花：開 / 關），支援自定義啟閉並自動記憶使用者偏好。
6. **多日遊客製化行程推薦（1日 / 3日 / 5日遊）：**
   - 涵蓋東京一日經典、京阪三日深度、東京富士山五日全景、關西初心五日黃金路線與沖繩五日自駕遊，可依「第一次訪日」、「情侶朋友」、「上班族自由行」、「美食文化控」進行篩選，支援行程列印與打包。
7. **全日本特色美食大鑑（Food Catalog）：**
   - 提供美食即時關鍵字搜尋與六大地區標籤篩選功能。
8. **旅遊須知與常見問答手風琴（FAQ Accordion）：**
   - 解答行前準備、交通乘車、文化禮儀、四季旅遊季節選擇等問題，支援全部展開/收合與問答搜尋。
9. **聯絡我們與線上行程諮詢表單：**
   - 提供門市據點、客服專線、Email 與營業時間，並具備即時前端欄位驗證與送出成功通知反饋。

---

## 🗂️ 檔案目錄結構

```text
google antigravity/
├── index.html              # 網站首頁（雜誌風巨幕、熱門景點、六大地區入口、精選美食預覽）
├── tokyo.html              # 東京專屬頁（晴空塔、淺草寺、澀谷、江戶前壽司、文字燒）
├── kyoto.html              # 京都專屬頁（清水寺、伏見稻荷、嵐山竹林、宇治抹茶、湯豆腐）
├── osaka.html              # 大阪專屬頁（大阪城、道頓堀、通天閣、章魚燒、大阪燒、串炸）
├── hokkaido.html           # 北海道專屬頁（小樽運河、函館夜景、大通公園、湯咖哩、海鮮丼）
├── okinawa.html            # 沖繩專屬頁（美麗海水族館、萬座毛、古宇利大橋、石垣牛、排骨麵）
├── fuji.html               # 富士山周邊專頁（河口湖逆富士、新倉山五重塔、忍野八海、餺飥麵）
├── itinerary.html          # 行程推薦專頁（1日/3日/5日行程規劃、受眾標籤篩選、列印匯出）
├── food.html               # 日本特色美食大鑑（全日本美食即時搜尋與地區過濾）
├── guide.html              # 旅遊須知與 Q&A 專頁（交通、禮儀、四季氣候、常見問答手風琴）
├── contact.html            # 聯絡我們專頁（門市資訊、營業時間、線上旅遊諮詢表單）
│
├── css/                    # 各頁面獨立專屬樣式目錄
│   ├── common.css          # 全站通用樣式（字型、Navbar、Footer、Modal、收藏抽屜）
│   ├── index.css           # 首頁專屬樣式
│   ├── tokyo.css           # 東京專頁專屬樣式
│   ├── kyoto.css           # 京都專頁專屬樣式
│   ├── osaka.css           # 大阪專頁專屬樣式
│   ├── hokkaido.css        # 北海道專頁專屬樣式
│   ├── okinawa.css         # 沖繩專頁專屬樣式
│   ├── fuji.css            # 富士山周邊專屬樣式
│   ├── itinerary.css       # 行程推薦專頁專屬樣式
│   ├── food.css            # 特色美食大鑑專屬樣式
│   ├── guide.css           # 旅遊須知專頁專屬樣式
│   └── contact.css         # 聯絡我們專頁專屬樣式
│
├── js/                     # 各頁面獨立專屬腳本目錄
│   ├── common.js           # 全站通用功能（櫻花動畫、收藏夾系統、Modal、回頂部）
│   ├── index.js            # 首頁專屬互動功能
│   ├── tokyo.js            # 東京專頁互動與美食景點高亮聯動
│   ├── kyoto.js            # 京都專頁互動與美食景點高亮聯動
│   ├── osaka.js            # 大阪專頁互動與美食景點高亮聯動
│   ├── hokkaido.js         # 北海道專頁互動與美食景點高亮聯動
│   ├── okinawa.js          # 沖繩專頁互動與美食景點高亮聯動
│   ├── fuji.js             # 富士山專頁互動與美食景點高亮聯動
│   ├── itinerary.js        # 行程推薦天數切換與受眾篩選功能
│   ├── food.js             # 特色美食即時搜尋與地區切換功能
│   ├── guide.js            # Q&A 手風琴摺疊與問答搜尋功能
│   └── contact.js          # 諮詢表單驗證與成功彈窗回饋
│
├── .gitignore              # Git 忽略清單
└── README.md               # 專案說明文件
```

---

## 🚀 部署至雲端 (GitHub Pages 教學)

本專案為純靜態網站（Vanilla HTML5 / CSS3 / JavaScript），非常適合使用 **GitHub Pages** 免費部署至雲端，任何人透過手機或電腦都能隨時連線訪問！

### 步驟 1：在 GitHub 建立新的 Repository
1. 登入 [GitHub](https://github.com/)。
2. 點擊右上角的 **「+」** ➔ 選擇 **「New repository」**。
3. 填寫儲存庫名稱（例如：`japan-travel-journal`）。
4. 選擇 **Public**（公開），其餘選項保持預設，點擊 **「Create repository」**。

### 步驟 2：將本地專案推送到 GitHub
在專案根目錄開啟終端機（PowerShell 或 CMD），依序執行以下指令：

```bash
# 1. 初始化本地 Git 倉庫
git init -b main

# 2. 加入所有專案檔案
git add .

# 3. 提交至本地倉庫
git commit -m "feat: 初次發布日本旅遊誌完整網站"

# 4. 關聯到您的 GitHub 儲存庫 (請將 <你的GitHub帳號> 與 <儲存庫名稱> 換成您的)
git remote add origin https://github.com/<你的GitHub帳號>/<儲存庫名稱>.git

# 5. 推送程式碼到 GitHub
git push -u origin main
```

### 步驟 3：在 GitHub 開啟 GitHub Pages 雲端託管
1. 進入您剛建立的 GitHub 儲存庫頁面。
2. 點擊上方的 **「Settings」**（設定）標籤頁。
3. 在左側選單中找到並點擊 **「Pages」**。
4. 在 **「Build and deployment」** 區塊：
   - **Source** 選擇 `Deploy from a branch`。
   - **Branch** 選擇 `main`，資料夾選擇 `/ (root)`。
5. 點擊 **「Save」** 保存。
6. 等待約 1～2 分鐘重新整理頁面，最上方會出現綠色的雲端網址：  
   👉 **`https://<你的GitHub帳號>.github.io/<儲存庫名稱>/`**  
   點擊該網址即可在全世界任何地方直接線上瀏覽您的網站！🎉

---

## 💻 本地端預覽方式

若需在本地端離線瀏覽或開發：
1. **直接開啟：**  
   直接以滑鼠雙擊專案目錄中的 `index.html`，即可使用預設瀏覽器（Chrome, Edge, Safari）開啟瀏覽。
2. **使用 VS Code Live Server 擴充套件：**  
   在 VS Code 中開啟專案資料夾，於 `index.html` 右鍵選擇 **「Open with Live Server」**。
3. **使用簡易 Python 本地伺服器：**
   ```bash
   python -m http.server 8000
   ```
   接著於瀏覽器網址列輸入 `http://localhost:8000` 即可預覽。

---

## 🎨 視覺規範與色彩配置

- **和紙米白（主背景）：** `#FAF7F2`
- **木質大地色（次要底色/文字）：** `#8E7051` / `#5C4530`
- **鳥居緋紅（主題強調色）：** `#C84630`
- **櫻花粉（標籤與浮動點綴）：** `#E88E9B` / `#FCEFF1`
- **抹茶綠（自然與禪風強調色）：** `#687A58` / `#EEF2EB`
- **字型：** Google Fonts (`Noto Sans TC`, `Noto Serif JP`, `Zen Maru Gothic`)

---

## 📞 聯絡我們 (網站營運示範資訊)

- **門市地址：** 台北市 XX 區 XX 路 XX 號
- **服務專線：** 02-1234-5678
- **電子郵件：** [japantravel@example.com](mailto:japantravel@example.com)
- **營業時間：** 週二至週日 11:00 - 21:00（週一公休）

---

© 2026 日本旅遊誌 Japan Travel Journal. All rights reserved.
