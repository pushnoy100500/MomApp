 document.addEventListener('deviceready', onPageReady, false);	
 function onPageReady() {
 				var bbyId = localStorage.getItem("currBby");
            	var bby = JSON.parse(localStorage.getItem("collection"))[bbyId];
            	//console.log(bby);

            	function renderBbyDetails(bbyObj) {
            		var name = document.getElementById("name");
            		var gender = document.getElementById("gender");
            		var description = document.getElementById("description");
            		var height = document.getElementById("height");
            		var weight = document.getElementById("weight");
            		var age = document.getElementById("age");
            		var photo = document.getElementById("photo");

            		name.innerHTML = bbyObj.name;
            		description.innerHTML = bbyObj.description;
            		gender.innerHTML = "This is a " + bbyObj.gender;
            		height.innerHTML = bbyObj.growthRecords[bbyObj.growthRecords.length-1].height + " feet tall";
            		weight.innerHTML = bbyObj.growthRecords[bbyObj.growthRecords.length-1].weight + " lbs heavy";
            		age.innerHTML = "born in " + new Date(bbyObj.birthTimeStamp).getFullYear();
            		photo.src = bbyObj.imageUrl;
            	}
            	renderBbyDetails(bby);
          

 }

