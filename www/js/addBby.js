 document.addEventListener('deviceready', onPageReady, false);	

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

function saveBaby(baby) {
                   var bbys = JSON.parse(window.localStorage.getItem("collection"));
                   bbys.push(baby);                   
                   localStorage.setItem("collection", JSON.stringify(bbys));
                   localStorage.setItem("tempImgUrl", "");

                }

function onPageReady() {
 	   		                      
                //populating the select elements 
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
                //Verify if user input is valid
                function isValidInput() {
                   if(name.value == "" || !$("input[type='radio']").is(':checked') || month.value == "" || day.value == "" || year.value == "" || height.value == "" || weight.value == "") {
                          return false;                           
                        } else {
                           return true;
                        }
                }
                var name = document.getElementById("name");
                var gender = document.getElementById("gender");
                var year = document.getElementById("select-choice-year");
                var month = document.getElementById("select-choice-month");
                var day = document.getElementById("select-choice-day");
                var height = document.getElementById("select-choice-height");
                var weight = document.getElementById("select-choice-weight");
                var description = document.getElementById("textarea1");
                 //populate years selection dropdown
                buildSelect(2012, new Date().getFullYear(), 1, year, false);
                 //populate months selection dropdown
                buildSelect(1, 12, 1, month, false);
                 // populate number of days
                buildSelect(1, 31, 1, day), false;
                //populate height in foot 
                buildSelect(1, 4, 0.1, height, true);
                //populate weight in pounds
                buildSelect(1, 50, 1, weight, false);
                 
                //when we click on add button
                $('#add').click(function(){
                    if(!isValidInput()) {
                           document.getElementById("message").innerHTML = "Please fill in all fields";
                        } else {
                          //Baby(name, gender, birthTimeStamp, growthRecord)
                          var birthTimeStamp = new Date( year.value, month.value, day.value).getTime();              
                          var record = new GrowthRecord(height.value, weight.value);
                          var baby = new Baby(name.value, $("input[name='gender']:checked").val(), birthTimeStamp, description.value, record, localStorage.tempImgUrl);
                          saveBaby(baby);
                         location.replace("search.html");
                        }

                });

                 pictureSource=navigator.camera.PictureSourceType;
                 destinationType=navigator.camera.DestinationType;

 }

 /*    Picture capturing logic   */

// Called when a photo is successfully retrieved
function onSuccess(imageURI) {
    localStorage.setItem("tempImgUrl", imageURI);
}



// Take picture with camera
function capturePhoto() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.CAMERA,                                  
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true                                                              
        });
}

// Get picture form album
function getPhoto(source) {
      navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
}

// Called if something bad happens.
function onFail(message) {
      alert(message);
}


