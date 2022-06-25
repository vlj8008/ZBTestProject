
// Create global variable with api URL

var API_URL = " https://www.balldontlie.io/api/v1/teams";

// Make an asynchronise request to the api


async function getTeams(){
    const response = await fetch(API_URL); //use js fetch method and pass in the url as an argument.
    const promiseObj = await response.json(); // json method returns promise object (in our case an array).


        for (var key in promiseObj) {
            for (var i = 0; i < promiseObj[key].length; i++) {
                var teamName = promiseObj[key][i].name; //extracting properties I want to display
                var city = promiseObj[key][i].city;
                var division = promiseObj[key][i].division;

                
                // Creating bootstrap cards to inject json data in to. 
                var badge = document.createElement('div');
                badge.className = 'badge col-sm-3 card text-white bg-info mb-2 mt-2 ml-2 mr-2 mb-2 pt-2 pl-2 pr-2style="max-width: 18rem;" ';
                badge.innerHTML =
                    
                    '<h1 class="card-header">' + teamName + '</h1>' +
                    '<h3 class="card-text">' + city + '</h3>' +
                    '<h3 class="card-text">' + division + '</h3>'
                    
                document.getElementById(key).appendChild(badge);
            }
        }
    }

    
    async function getRandomTeam(){

        // This method must:
        //1. get the array of objects from the api
        //2. create a random index (using the array length property)
        //3. use the random index to access that object in the array
        //4. display that random object on the html page.

        const response = await fetch(API_URL);
        const responseData = await response.json();
        
        //1. get the array of objects from the api

            for(var object in responseData){
                for (var team = 0; team < responseData[object].length; team++){
                    
                    var orderedTeamList = responseData[object][team];
                    console.log(orderedTeamList); // outputs array of ordered teams. 
                    
                }

        //2. create a random index (using the array length property)

                var randomIndex = orderedTeamList.data[Math.floor(Math.random()*orderedTeamList.data.length)];
                console.log(randomIndex);

        //3. use the random index to access that object in the array
        //4. display that random object on the html page.

                var randomTeam = document.createElement('div');
                
                randomTeam.className = 'badge col-sm-3 card text-white bg-info mb-2 mt-2 ml-2 mr-2 mb-2 pt-2 pl-2 pr-2style="max-width: 18rem;" ';
                randomTeam.innerHTML =
                    
                    '<h1 class="card-header">' +  + '</h1>' +
                    '<h3 class="card-text">' +  + '</h3>' +
                    '<h3 class="card-text">' +  + '</h3>'
                    

                
                document.getElementById(key).appendChild(randomTeam);

                }

            }
        

    getTeams();

    getRandomTeam();



    

    
    
    
    