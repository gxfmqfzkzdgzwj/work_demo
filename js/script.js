
window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	// music.onclick = function(){
	// 	if(audio.paused)
	// 		{
	// 			audio.play();
	// 			//this.setAttribute("class","play");   //这个效果不太好 每次回到原点
	// 			this.style.animationPlayState = "running";//兼容性不好  安卓都不兼容
	// 		}
	// 	else
	// 	   {
	// 			audio.pause();
	// 			//this.setAttribute("class","");
	// 			this.style.animationPlayState = "paused";
	// 	   }
	// }

	music.addEventListener("touchstart", function(event){	
		if(audio.paused)
			{
				audio.play();
				//this.setAttribute("class","play");   //这个效果不太好 每次回到原点
				this.style.animationPlayState = "running";//兼容性不好  安卓都不兼容
			}
		else
		   {
				audio.pause();
				//this.setAttribute("class","");
				this.style.animationPlayState = "paused";
		   }
	}, false);

	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");

	},false);

	page1.addEventListener("touchstart", function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100%";
		//setTimeout  里面out小写
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5500);
	}, false);
}
