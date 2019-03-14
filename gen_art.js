var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.toString().slice(0, -1);

if (query == "") {
	for (i = 0; i < art.length; i++) {
		var work = document.createElement("a");
		work.href = "?" + art[i][0];
		
		var thumbunit = document.createElement("div");
		thumbunit.className = "thumb-unit";
		thumbunit.style = "background-image: url(images/" + art[i][3] + ")";
		
		var thumboverlay = document.createElement("div");
		thumboverlay.className = "thumb-overlay";
		
		var title = document.createElement("strong");
		
		title.appendChild(document.createTextNode(art[i][1]));
		thumboverlay.appendChild(title);
		thumbunit.appendChild(thumboverlay);
		work.appendChild(thumbunit);
		document.getElementById("artworks").appendChild(work);
	}
} else if (query == "contact") {
	console.log("display contact page");
} else if (query == "about") {
	console.log("display about page");
} else {
	var ids = [];
	for (i = 0; i < art.length; i++) {
		ids.push(art[i][0]);
	}
	if (ids.includes(query)) {
		var title = document.createElement("h1");
		title.appendChild(document.createTextNode(art[ids.indexOf(query)][1]));
		document.getElementById("artworks").appendChild(title);
		
		var body = document.createElement("div");
		body.innerHTML = art[ids.indexOf(query)][2] + "<br>";
		document.getElementById("artworks").appendChild(body);
		
		var img = document.createElement("img")
		img.src = "images/" + art[ids.indexOf(query)][3];
		document.getElementById("artworks").appendChild(img);
	} else {
		window.location.href = "?";
	}
}