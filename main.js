var 
    container = document.getElementsByClassName("container")[0];
	hiddenMenu = container.getElementsByClassName("hiddenMenu")[0];
	menuList = container.getElementsByClassName("menuList")[0];
	maincontent0Left = container.getElementsByClassName("main-content0-left")[0];
	maincontent0Middle = container.getElementsByClassName("main-content0-middle")[0];
	showMore = container.getElementsByClassName("showMore")[0];
	mainContent1Middle = container.getElementsByClassName("main-content1-middle")[0];
	mainContent3showTable = container.getElementsByClassName("main-content3-showTable")[0];
	flg = 0;
	counter_a = 1;
	counter_b = 1;


const imageArr_a = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg"];
const imageArr_b = ["./assets/冰箱.png", "./assets/空气炸锅.png", "./assets/微波炉.png"];
setInterval(() => {
	if(counter_a === 3 ){
		counter_a = 0;
	}
	mainContent1Middle.children[0].src = imageArr_a[counter_a];
	counter_a++
},2000)

setInterval(() => {
	if(counter_b === 3 ){
		counter_b = 0;
	}
	mainContent3showTable.children[0].src = imageArr_b[counter_b];
	counter_b++
},2000)

hiddenMenu.addEventListener("click", (e) => {
	if(menuList.style.display === ""){
		menuList.style.display = "block";
	}else {
		menuList.style.display = "";
	}
});

maincontent0Left.addEventListener("click", (e) => {
	if(maincontent0Middle.offsetParent === null){
		switch(flg){
			case 0:
				showMore.style.visibility = "visible";
				flg = 1;
				break;
			case 1:
				showMore.style.visibility = "hidden";
				flg = 0;
		}
	}
});

