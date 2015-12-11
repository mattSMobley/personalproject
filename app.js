$(document).ready(function() {
 $('.dropdown').on('click', (function() {
      $('.dropdown-toggle').dropdown();
      //$('.backwhite').css("padding: 0em 0em 40em 0em");
  }));
});

var monthVal;
var choice;


// var destinations = [
// {name: "York, England",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["july","august"]
// },
// {name: "Kotor, Montenegro",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: true,
//   month: ["may","june","july","august","september"]
// },
// {name: "Abu Dhabi, U.A.E.",
//   desert: true,
//   city: true,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["january","february","march","december"]
// },
// {name: "Plymouth, England",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Amsterdam, The Netherlands",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["may","june","july","august"]
// },
// {name: "Barcelona, Spain",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["april","may","june","july","august","september","october"]
// },
// {name: "Vienna, Austria",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august"]
// },
// {name: "Lisbon, Portugal",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["april","may","june","july","august","september","october"]
// },
// {name: "Eastern Puerto Rico",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: true,
//   mountains: false,
//   month: ["january","february","march","april"]
// },
// {name: "Daintree, Australia",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: true,
//   mountains: true,
//   month: ["february","march","april","may","june","september","october"]
// },
// {name: "Kyoto, Japan",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["may","october"]
// },
// {name: "Isla Mujeres, Mexico",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["january","february","march","april","november","december"]
// },
// {name: "Reykjavik, Iceland",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august"]
// },
// {name: "Vancouver, Canada",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["june","july","august"]
// },
// {name: "Salvador, Brazil",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["january","february","march","october","november","december"]
// },
// {name: "Santiago, Chile",
//   desert: false,
//   city: true,
//   arts: false,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["january","february","december"]
// },
// {name: "Monteverde, Costa Rica",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: true,
//   mountains: false,
//   month: ["january","february","march","april","december"]
// },
// {name: "Dubrovnik, Croatia",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Munich, Germany",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august"]
// },
// {name: "Brussels, Belgium",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Brisbane, Australia",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["april","may","june","september","october","november"]
// },
// {name: "Colmar, France",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Edinburgh, Scotland",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["july","august"]
// },
// {name: "Bergen, Norway",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["july","august"]
// },
// {name: "Philipsburg, Sint Maarten",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["january","february","march","april","november","december"]
// },
// {name: "The Azores Islands",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: true,
//   month: ["march","april","may","june","july","august","september","november"]
// },
// {name: "The Canary Islands",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: true,
//   month: ["march","april","may","june","july","august","september","november"]
// },
// {name: "Grand Canyon, U.S.A.",
//   desert: true,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["april","may","september","october"]
// },
// {name: "Maldives",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["january","february","march","april"]
// },
// {name: "Queenstown, New Zealand",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["january","february","march","april","december"]
// },
// {name: "Phuket, Thailand",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: true,
//   rainforest: true,
//   mountains: true,
//   month: ["january","february","november","december"]
// },
// {name: "Cusco, Peru",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["april","may","september","october"]
// },
// {name: "Valencia, Spain",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Prague, Czech Republic",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["july","august"]
// },
// {name: "Hanoi, Vietnam",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["april","october","november"]
// },
// {name: "Zermatt, Switzerland",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["july","august"]
// },
// {name: "Marseille, France",
//   desert: false,
//   city: false,
//   arts: false,
//   sea: true,
//   beach: true,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Cinque Terre, Italy",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: true,
//   month: ["may","june","july","august","september"]
// },
// {name: "Budapest, Hungary",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august","september"]
// },
// {name: "Copenhagen, Denmark",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: true,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["june","july","august"]
// },
// {name: "Goreme, Turkey",
//   desert: true,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["july","august","september"]
// },
// {name: "Siem Reap, Cambodia",
//   desert: false,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["january","december"]
// },
// {name: "Marrakech, Morocco",
//   desert: true,
//   city: false,
//   arts: true,
//   sea: false,
//   beach: false,
//   rainforest: false,
//   mountains: false,
//   month: ["may","june","september","october"]
// },
// {name: "Cape Town, South Africa",
//   desert: false,
//   city: true,
//   arts: true,
//   sea: false,
//   beach: true,
//   rainforest: false,
//   mountains: true,
//   month: ["january","february","march","april","december"]
// }];

$.ajax('/destinations.json', {
  success: function(data, status){
    console.log(data);



$('.btn-info').on('click', (function() {
      monthVal = $(this).val();
      //console.log("Value of Month before converted to string= " + monthVal)
      //monthVal.toString();
      $('#collapseOne').collapse('hide');
      $('#collapseTwo').collapse('show');
      console.log(monthVal);

    }));


      $('#beach').on('click', (function(){
          choice = 'beach';
          console.log(monthVal);
          // var monthVal = 'january';
          $.each(destinations, function(index, destination){
            for (var i=0; i>destination.month.length; i++)
              if(destination.beach===true&&destination.month[i]===monthVal)
              {
                $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
              }
            });
            console.log(choice);
        }));

      $('#sea').on('click', (function(){
          var choice = 'sea';
          var monthVal = 'january';
          $.each(destinations, function(index, destination){
            if(destination.sea===true&&destination.month[0]==='january')
            {
              $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
            }
          });
          console.log(choice);
      }));

      $('#rainforest').on('click', (function(){
          var choice = 'rainforest';
          var monthVal = 'january';
          $.each(destinations, function(index, destination){
            if(destination.rainforest===true&&destination.month[0]==='january')
            {
              $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
            }
          });
          console.log(choice);
      }));

      $('#desert').on('click', (function(){
          var choice = 'desert';
          var monthVal = 'january';
          $.each(destinations, function(index, destination){
            if(destination.desert===true&&destination.month[0]==='january')
            {
              $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
            }
          });
          console.log(choice);
      }));

      $('#city').on('click', (function(){
          var choice = 'city';
          var monthVal = 'january';
          $.each(destinations, function(index, destination){
            if(destination.city===true&&destination.month[0]==='january')
            {
              $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
            }
          });
          console.log(choice);
      }));

      $('#mountains').on('click', (function(){
          var choice = 'mountains';
          var monthVal = 'january';
          $.each(destinations, function(index, destination){
            if(destination.mountains===true&&destination.month[0]==='january')
            {
              $('#results').append('<h3>' + destination.name + '</h3>' + '<br>');
            }
          });
          console.log(choice);
      }));


      $('.btn-success').on('click', (function(){
            $('#collapseTwo').collapse('hide');
            $('#collapseThree').collapse('show');
      }));
    }
  })
