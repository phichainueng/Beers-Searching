'use strict';

const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => {
        let  beers = response;
        let  result = "";
        let  count = beers.length;
        result  += "<b>Beers is : </b>" + count + " Item<br>" + "<br>" ;
        result += "<table border='1px' style='border-collapse: collapse; width: 100%'>";
        for (let  i = 0; i < beers.length; i++) {
            result += "<tr>" + "<td width = 150px;" + " height = 20px;>" + "<b>Name :</b>" + beers[i].name + "</td>"
            + "<td>" + "<b>Abv :</b>" + beers[i].abv + "</td>"
            + "<td width = 180px;" + " height = 20px; >" + "<b>Tagline :</b>" + beers[i].tagline + "</td>"
            + "<td>" + "<b>First Brewed :</b>" + beers[i].first_brewed + "</td>"
            + "<td>" + "<b>Description :</b>" + beers[i].description + "</td>"
            + "<td>" + "<image src =" + beers[i].image_url +" "+ "width ="+ '20px ' + " />" + "</td>"+"</tr>";
        }
        result += "</table>";
        document.getElementById('name').innerHTML = result;
    });

const getBeerAPIName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
        .then(response => response.json())
        .catch(e => console.err('Fail'))
        .then(response => {
        let  beers = response;
        let  result = "";
        console.log(beers);
        let  count = beers.length;
        result  += "<b>Beers is : </b>" + count + " Item<br>" + "<br>" ;
        result += "<table border='1px' style='border-collapse: collapse; width: 100%'>";
        for (let  i = 0; i < beers.length; i++) {
            result += "<tr>" + "<td width = 150px;" + " height = 20px;>" + "<b>Name :</b>" + beers[i].name + "</td>" 
            + "<td>" + "<b>Abv :</b>" + beers[i].abv + "</td>"
            + "<td width = 180px;" + " height = 20px; >" + "<b>Tagline :</b>" + beers[i].tagline + "</td>"
            + "<td>" + "<b>First Brewed :</b>" + beers[i].first_brewed + "</td>"
            + "<td>" + "<b>Description :</b>" + beers[i].description + "</td>"
            + "<td>" + "<image src =" + beers[i].image_url +" "+ "width ="+ '20px ' + " />" + "</td>"+"</tr>";
        }
        result += "</table>";
        document.getElementById('name').innerHTML = result;
    });


getBeersAPI();

const Search = (name) => {
   if (name != ""){
        getBeerAPIName(name);
    }else {
        getBeersAPI();
    }
}
