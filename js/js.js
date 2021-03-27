var IMG_COUNT = 5;
var INTERVAL = 3000;

var n = 1;

function nextImg() {
	n++;
	if(n > IMG_COUNT)
		n = 1;
	document.getElementById("dm-img").src = "img/dm" + n + ".jpg";
}

function preImg() {
	n--;
	if(n == 0)
		n = IMG_COUNT;
	document.getElementById("dm-img").src = "img/dm" + n + ".jpg";
}

onload = function() {
	var intervelObj = setInterval("nextImg()", INTERVAL);

	document.getElementById("left-btn").onclick = function() {
		clearInterval(intervelObj);
		preImg();
		intervelObj = setInterval("nextImg()", INTERVAL);
	};

	document.getElementById("right-btn").onclick = function() {
		clearInterval(intervelObj);
		nextImg();
		intervelObj = setInterval("nextImg()", INTERVAL);
	};

	var links = $('.main-content-news a'),
		len = links.length,
		i;

	for(i = 0; i < len; i++)
		links[i].mouseover = function() {
			links[i].title = links[i].innerText;
		};
	links = null;
};