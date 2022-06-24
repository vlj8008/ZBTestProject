//perhaps onpage load make a http request to the api
//and get data.

// Create variable with api URL

var API_URL = " https://www.balldontlie.io/api/v1/teams";

//$.getJSON(API_URL, function(data){
    

    
//});

//console.log(data);

// Make an asynchronise request to the api



async function getTeams(){
    const response = await fetch(API_URL); //use js fetch method and pass in the url as an argument.
    const promiseObj = await response.json(); // json method returns promise object (in our case an array).
    //var team = JSON.parse(json);





    //for (i=0;i<promiseObj.data.length; i=i+1){
        //console.log(promiseObj.data[i].abbreviation);
        //let text = document.getElementById("test").textContent;
        //document.getElementById("test").innerHTML=promiseObj.data[i].abbreviation;
        console.log(promiseObj);

        for (var key in promiseObj) {
            for (var i = 0; i < promiseObj[key].length; i++) {
                var teamName = promiseObj[key][i].name;
                var city = promiseObj[key][i].city;
                var division = promiseObj[key][i].division;
                var badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML =
                    '<h1>' + teamName + '</h1>' +
                    '<h2>' + city + '</h1>' +
                    
                //I gave the div the same ID's as the keys in the object for ease
                document.getElementById(key).appendChild(badge);
            }
        }
    }
    getTeams();

    
    
    
   // console.log(promiseObj.data[0].city);
    //console.log(promiseObj.data[3].full_name);




