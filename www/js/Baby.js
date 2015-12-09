function Baby(name, gender, birthTimeStamp, description, growthRecord, imageUrl) {
                  this.name = name;
                  this.gender = gender;
                  this.birthTimeStamp = birthTimeStamp;
                  this.description = description;
                  this.growthRecords = [growthRecord];
                  if(imageUrl) {
                    this.imageUrl = imageUrl;
                  } else {
                    this.imageUrl = "dummy.png";
                  }
    }

function GrowthRecord(height, weight) {
                  this.height = height;
                  this.weight = weight;
    			} 

function bbyToListItem(obj, num) {
              var htmlString = "<li class=\"collection-item avatar search-item\"><img src=\"" + obj.imageUrl + "\" class=\"responsive-img circle\" alt=\"\">";
              htmlString = htmlString + "<span class=\"title\">" + obj.name + "</span>";
              htmlString = htmlString + "<p><a class=\"bby-details\" href=\"bbyDetails.html?id=" + num + "\">View details</a></p>";
              return htmlString;
}