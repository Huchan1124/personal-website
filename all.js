window.onload = function(){ 
  //background animation
const colors = [
  '#95cffc',
  '#f78fb3',
  '#fff280',
  '#b7ff8a'
];

function createTriangle(){
  const section = document.querySelector(".tri-animation-section");
  const triangle = document.createElement("small");

  let size = Math.random()*80;
  
  triangle.style.borderTopWidth= 0;
  triangle.style.borderRightWidth= `${30+ size}px`;
  triangle.style.borderBottomWidth= `${50+ size}px`;
  triangle.style.borderLeftWidth= `${30+ size}px`;
  
  //隨機生成起始位置
  triangle.style.top = `${Math.random()* document.body.clientHeight}px`;
  triangle.style.left =`${Math.random()* document.body.clientWidth}px`;

 
  //陣列取值 隨機生成顏色
  const borderColor = colors[Math.floor(Math.random()*colors.length)];
  triangle.style.borderBottomColor=borderColor;

  //於section新增triangle
  section.appendChild(triangle);

  //5秒後刪除triangle
  setTimeout(()=>{
   triangle.remove()
  },5000)
}
//間隔固定的時間不斷重複createTriangle 0.15s
setInterval(createTriangle,150);


//wow js
new WOW().init();


// formspree clear submission
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}


//worksBtn change
let workData = [
{
  "id": 0,
  "title": "電幻迷鐘",
  "imgUrl": "./img/digital-clock.gif",
  "url":"http://220.128.133.15/s1100211/front_end/digital_clock/",
  "tag": "應用創作",
},
{

"id": 1,
"title": '童趣"暱"境',
"imgUrl": "./img/name-animation.gif",
"url":"http://220.128.133.15/s1100211/front_end/createTriangleAnimation/",
"tag": "應用創作",
},
{
  "id": 2,
  "title": "萬年To-Do List",
  "imgUrl": "img/calendar.gif",
  "url":"http://220.128.133.15/s1100211/back_end/calendar/",
  "tag": "應用創作",
  
},
{
"id": 3,
"title": "3D旋轉賀卡",
"imgUrl": "./img/dadbirthday.gif",
"url":"https://huchan1124.github.io/birthday_card_for_dad/",
"tag": "應用創作",
},

{
"id": 4,
"title": "募資網站切版練習",
"imgUrl": "./img/layoutpractice1.PNG",
"url":"https://huchan1124.github.io/practice_assignments/Bootstrap5_practice_2021.06/index.html",
"tag": "切版習作",
},
{
"id": 5,
"title": "《星空與詩歌-探索米羅的藝術世界》DEMO1",
"imgUrl": "./img/miro-game01.gif",
"url":"https://www.youtube.com/watch?v=rRjvh0yf670",
"tag": "教育遊戲",
},
{
"id": 6,
"title": "《星空與詩歌-探索米羅的藝術世界》DEMO2",
"imgUrl": "./img/miro-game2.gif",
"url":"https://www.youtube.com/watch?v=SRFdkVYZ6NY&feature=youtu.be",
"tag": "教育遊戲",
},
{
"id": 7,
"title": "《聲韻覺識數位遊戲 - 注音王國大冒險》DEMO",
"imgUrl": "./img/chinesegame.gif",
"url":"https://www.youtube.com/watch?v=UEVAddeOIzI",
"tag": "教育遊戲",
},
{
"id": 8,
"title": "2016清大中文畢業公演《無照愛人》前導片",
"imgUrl": "./img/2016.gif",
"url":"https://www.youtube.com/watch?v=L_SREsT71U8",
"tag": "影像作品",
},
{
"id": 9,
"title": "2016清大中文畢業公演《無照愛人》MV(衝突篇)",
"imgUrl": "./img/2016MV.gif",
"url":"https://www.youtube.com/watch?v=PcTtAk5tmwI&t=15s",
"tag": "影像作品",
},
{
"id": 10,
"title": "《限時備忘——2016清大中文系畢業專刊》預購宣傳片",
"imgUrl": "./img/2016book.gif",
"url":"https://www.youtube.com/watch?v=re6ERd9iYmU",
"tag": "影像作品",
},
{
"id": 11,
"title": "精進探究的基礎\：\ 教育研究法課程的教學創新歷程",
"imgUrl": "./img/publish1.PNG",
"url":"https://tppi.ntue.edu.tw/Journal/Content/45",
"tag": "學術發表",
},

{
"id": 12,
"title": "聽音習字 \:\ 聲韻覺識理論融入數位遊戲輔助學童注音符號學習成效之研究",
"imgUrl": "./img/publish2.PNG",
"url":"https://drive.google.com/file/d/1vC8pBibYPnL1Nd_4tRV3NfOXP6BS2ztK/view?usp=sharing",
"tag": "學術發表",
},


];

const worksContainer =  document.querySelector(".js-worksContainer");
const worksAllBtn =  document.querySelector(".js-worksAllBtn");
const worksWebsiteBtn =  document.querySelector(".js-worksWebsiteBtn");
const worksCreativeBtn =  document.querySelector(".js-worksCreativeBtn");
const worksEduGameBtn =  document.querySelector(".js-worksEduGameBtn");
const worksVideoBtn =  document.querySelector(".js-worksVideoBtn");
const worksPublishBtn =  document.querySelector(".js-worksPublishBtn");

function init(){
let content = "";
workData.forEach((item)=>{
  content += ` <div class="card col-12  col-md-4 mb-md-3" >
  <img src="${item.imgUrl}" class=" img-fluid "  >
  <div class="card-body">
    <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
  </div>
</div>`;
})
worksContainer.innerHTML = content;
}

init()

worksAllBtn.addEventListener("click", (e)=>{
let content = "";
workData.forEach((item)=>{
  content += ` <div class="card col-12  col-md-4 mb-md-3" >
  <img src="${item.imgUrl}" class=" img-fluid "  >
  <div class="card-body">
    <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
  </div>
</div>`;
})
worksContainer.innerHTML = content;

})

worksWebsiteBtn.addEventListener("click", (e)=>{
let content = "";
workData.forEach((item)=>{
 if (item.tag === e.target.id){
   content += ` <div class="card col-12  col-md-4 mb-md-3" >
  <img src="${item.imgUrl}" class=" img-fluid "  >
  <div class="card-body">
    <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
  </div>
</div>`;
 }
})
worksContainer.innerHTML = content;

})

worksCreativeBtn.addEventListener("click", (e)=>{
 let content = "";
 workData.forEach((item)=>{
  if (item.tag === e.target.id){
    content += ` <div class="card col-12  col-md-4 mb-md-3" >
   <img src="${item.imgUrl}" class=" img-fluid "  >
   <div class="card-body">
     <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
   </div>
 </div>`;
  }
 })
 worksContainer.innerHTML = content;

})

worksEduGameBtn.addEventListener("click", (e)=>{
  let content = "";
  workData.forEach((item)=>{
   if (item.tag === e.target.id){
     content += ` <div class="card col-12  col-md-4 mb-md-3" >
    <img src="${item.imgUrl}" class=" img-fluid "  >
    <div class="card-body">
      <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
    </div>
  </div>`;
   }
  })
  worksContainer.innerHTML = content;
 
 })

worksVideoBtn.addEventListener("click", (e)=>{
  let content = "";
  workData.forEach((item)=>{
   if (item.tag === e.target.id){
     content += ` <div class="card col-12  col-md-4 mb-md-3" >
    <img src="${item.imgUrl}" class=" img-fluid "  >
    <div class="card-body">
      <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
    </div>
  </div>`;
   }
  })
  worksContainer.innerHTML = content;
 
 })
 
worksPublishBtn.addEventListener("click", (e)=>{
  let content = "";
  workData.forEach((item)=>{
   if (item.tag === e.target.id){
     content += ` <div class="card col-12  col-md-4 mb-md-3" >
    <img src="${item.imgUrl}" class=" img-fluid "  >
    <div class="card-body">
      <a href="${item.url}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
    </div>
  </div>`;
   }
  })
  worksContainer.innerHTML = content;
 
 })

  
  





  };



