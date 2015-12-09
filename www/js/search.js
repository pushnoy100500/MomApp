 document.addEventListener('deviceready', onPageReady, false);	

 function onPageReady() {	
			renderBbys();
			$(".bby-details").click(function(e) {
				e.preventDefault();
				var lnk = this.getAttribute('href');
				var id = lnk.substring(lnk.indexOf('id=')+3, lnk.length);
				window.localStorage.setItem("currBby", id);
				location.replace(lnk);
			})
			
 }

 function viewBbyDetails(event, element) {
				event.preventDefault();
				console.log(element);
				var lnk = element.getAttribute('href');
				var id = lnk.substring(lnk.indexOf('id=')+3, lnk.length);
				window.localStorage.setItem("currBby", id);
				location.replace(lnk);
				
}

function renderBbys() {
				var bbys = JSON.parse(window.localStorage.getItem("collection"));
				var list = document.getElementById("bbyList");
				var output = "";
				for (var i = 0; i < bbys.length; i++) {
					output += bbyToListItem(bbys[i], i);
				}
				list.innerHTML = output;
}