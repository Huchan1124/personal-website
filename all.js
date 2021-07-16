
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
    triangle.style.top = `${Math.random()* document.body.offsetHeight}px`;
    triangle.style.left =`${Math.random()* document.body.offsetWidth}px`;
 
   
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


