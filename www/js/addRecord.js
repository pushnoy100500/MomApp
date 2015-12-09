document.addEventListener('deviceready', onPageReady, false);	

function buildSelect(start, end, step, element, isDecimal) {
                   for(var a = start; a <= end; a+=step) {
                      var option = document.createElement('option');
                      option.value = a;
                      option.innerHTML = a; 
                      if(isDecimal) {
                        option.value = a.toFixed(1);
                        option.innerHTML = a.toFixed(1); 
                      }                  
                      element.appendChild(option);
                    }
        }
function onPageReady() {
                    var height = document.getElementById("select-choice-height");
                    var weight = document.getElementById("select-choice-weight");
                    buildSelect(1, 4, 0.1, height, true);
                    buildSelect(1, 50, 1, weight, false);

            $('#add').click(function(e){
            	   e.preventDefault();
                    var record = new GrowthRecord(height.value, weight.value);
                    var bbyId = localStorage.currBby;
                    var collection = JSON.parse(localStorage.collection);
                    var currBby = collection[bbyId];
                    currBby.growthRecords.push(record);
                    collection[bbyId] = currBby;
                    localStorage.collection = JSON.stringify(collection);
                    location.replace("bbyDetails.html");
                  
            }); 
 }
function GrowthRecord(height, weight) {
                  this.height = height;
                  this.weight = weight;
   } 