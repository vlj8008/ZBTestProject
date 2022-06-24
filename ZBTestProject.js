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
                badge.className = 'badge col-sm-3 card text-white bg-info mb-2 mt-2 ml-2 mr-2 mb-2 pt-2 pl-2 pr-2style="max-width: 18rem;" ';
                badge.innerHTML =
                    
                    '<h1 class="card-header">' + teamName + '</h1>' +
                    '<h3 class="card-text">' + city + '</h3>' +
                    '<h3 class="card-text">' + division + '</h3>'
                    

                //I gave the div the same ID's as the keys in the object for ease
                document.getElementById(key).appendChild(badge);
            }
        }
    }

    function getRandomTeam(){



        
    }

    getTeams();

    getRandomTeam();

    
    
    
    