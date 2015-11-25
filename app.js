$(document).ready(function() {
 $('.dropdown').on('click', (function() {
      $('.dropdown-toggle').dropdown();
      //$('.backwhite').css("padding: 0em 0em 40em 0em");
  }));
});

//stores the value of the button click in the first collapsible pane, closes that pane, and opens the next
/*
$('.btn-info').on('click', (function() {
      var monthVal = $(this).text();
      $('#collapseOne').collapse('hide');
      $('#collapseTwo').collapse('show');
}));
/*

//click submit button gathers results from previous selections and appends them to the 3rd collapsible pane
/*
$('.btn-success').on('click', (function(){
      $('#collapseTwo').collapse('hide');
      $('#collapseThree').collapse('show');
      $('#result1').append("Daintree, Australia");
      $('#result2').append("Azores, Islands");
      $('#result3').append("Canary, Islands");
      $('#result4').append("Cape Town, Africa");
}));
*/




var destinations = [
{name: "York, England",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["july","august"]
},
{name: "Kotor, Montenegro",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  month: ["may","june","july","august","september"]
},
{name: "Abu Dhabi, U.A.E.",
  desert: true,
  city: true,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["january","february","march","december"]
},
{name: "Plymouth, England",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Amsterdam, The Netherlands",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["may","june","july","august"]
},
{name: "Barcelona, Spain",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["april","may","june","july","august","september","october"]
},
{name: "Vienna, Austria",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august"]
},
{name: "Lisbon, Portugal",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["april","may","june","july","august","september","october"]
},
{name: "Eastern Puerto Rico",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: false,
  month: ["january","february","march","april"]
},
{name: "Daintree, Australia",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: true,
  month: ["february","march","april","may","june","september","october"]
},
{name: "Kyoto, Japan",
  desert: false,
  city: true,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["may","october"]
},
{name: "Isla Mujeres, Mexico",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["january","february","march","april","november","december"]
},
{name: "Reykjavik, Iceland",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august"]
},
{name: "Vancouver, Canada",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["june","july","august"]
},
{name: "Salvador, Brazil",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["january","february","march","october","november","december"]
},
{name: "Santiago, Chile",
  desert: false,
  city: true,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["january","february","december"]
},
{name: "Monteverde, Costa Rica",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: false,
  month: ["january","february","march","april","december"]
},
{name: "Dubrovnik, Croatia",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Munich, Germany",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august"]
},
{name: "Brussels, Belgium",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Brisbane, Australia",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["april","may","june","september","october","november"]
},
{name: "Colmar, France",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Edinburgh, Scotland",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["july","august"]
},
{name: "Bergen, Norway",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["july","august"]
},
{name: "Philipsburg, Sint Maarten",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["january","february","march","april","november","december"]
},
{name: "The Azores Islands",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  month: ["march","april","may","june","july","august","september","november"]
},
{name: "The Canary Islands",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  month: ["march","april","may","june","july","august","september","november"]
},
{name: "Grand Canyon, U.S.A.",
  desert: true,
  city: false,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["april","may","september","october"]
},
{name: "Maldives",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["january","february","march","april"]
},
{name: "Queenstown, New Zealand",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["january","february","march","april","december"]
},
{name: "Phuket, Thailand",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: true,
  month: ["january","february","november","december"]
},
{name: "Cusco, Peru",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["april","may","september","october"]
},
{name: "Valencia, Spain",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Prague, Czech Republic",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["july","august"]
},
{name: "Hanoi, Vietnam",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["april","october","november"]
},
{name: "Zermatt, Switzerland",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["july","august"]
},
{name: "Marseille, France",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Cinque Terre, Italy",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  month: ["may","june","july","august","september"]
},
{name: "Budapest, Hungary",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august","september"]
},
{name: "Copenhagen, Denmark",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["june","july","august"]
},
{name: "Goreme, Turkey",
  desert: true,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["july","august","september"]
},
{name: "Siem Reap, Cambodia",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["december","january"]
},
{name: "Marrakech, Morocco",
  desert: true,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  month: ["may","june","september","october"]
},
{name: "Cape Town, South Africa",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: true,
  month: ["december","january","february","march","april"]
}];

$('.btn-info').on('click', (function() {
      var monthVal = $(this).val();
      //console.log("Value of Month before converted to string= " + monthVal)
      //monthVal.toString();
      $('#collapseOne').collapse('hide');
      $('#collapseTwo').collapse('show');
      console.log(monthVal);
      console.log((typeof monthVal === 'string'))
      console.log(monthVal === "january")
      //then i did some IF statements because I couldn't get my loops to work.. but Eventually there will be loops, and THEY WILL BE AWESOME
      if (monthVal==="january"){
        console.log('INSIDE THE IF STATEMENT ABOUT TO ADD LOCATIONS')
        $('#result1').append("Phuket, Thailand");
        $('#result2').append("Azores, Islands");
        $('#result3').append("Canary, Islands");
        $('#result4').append("Cape Town, Africa");
        $('#result5').append("Siem Riep, Cambodia");
      } else if(monthVal==="february") {
        $('#result1').append("Abu Dhabi, U.A.E.");
        $('#result2').append("Eastern Puerto Rico");
        $('#result3').append("Daintree, Australia");
        $('#result4').append("Isla Mujeres, Mexico");
        $('#result5').append("Salvador, Brazil");
      } else if(monthVal==="march") {
      $('#result1').append("Monteverde, Costa Rica");
      $('#result2').append("Philipsburg, Sint Maarten");
      $('#result3').append("Maldives");
      $('#result4').append("Queenstown, New Zealand");
      $('#result5').append("Cape Town, South Africa");
      } else if(monthVal==="april") {
        $('#result1').append("Barcelona, Spain");
        $('#result2').append("Lisbon, Portugal");
        $('#result3').append("Brisbane, Australia");
        $('#result4').append("Grand Canyon, U.S.A.");
        $('#result5').append("Cusco, Peru");
      } else if(monthVal==="may") {
          $('#result1').append("Amsterdam, The Netherlands");
          $('#result2').append("Cinque Terre, Italy");
          $('#result3').append("Marrakech, Morocco");
          $('#result4').append("Kotor, Montenegro");
          $('#result5').append("Daintree, Australia");
      } else if(monthVal==="june") {
          $('#result1').append("Reykjavik, Iceland");
          $('#result2').append("Vancouver, Canada");
          $('#result3').append("Munich, Germany");
          $('#result4').append("Brussels, Belgium");
          $('#result5').append("Colmar, France");
      } else if(monthVal==="july") {
          $('#result1').append("York, England");
          $('#result2').append("Plymouth, England");
          $('#result3').append("Valencia, Spain");
          $('#result4').append("Vienna, Austria");
          $('#result5').append("Dubrovnik, Croatia");
      } else if(monthVal==="august") {
          $('#result1').append("Bergen, Norway");
          $('#result2').append("Amsterdam, The Netherlands");
          $('#result3').append("Edinburgh, Scotland");
          $('#result4').append("Prague, Czech Republic");
          $('#result5').append("Zermatt, Switzerland");
      } else if(monthVal==="september") {
            $('#result1').append("Marseille, France");
            $('#result2').append("Budapest, Hungary");
            $('#result3').append("Goreme, Turkey");
            $('#result4').append("Prague, Czech Republic");
            $('#result5').append("Zermatt, Switzerland");
          }
      $('.btn-success').on('click', (function(){
            $('#collapseTwo').collapse('hide');
            $('#collapseThree').collapse('show');

      }));

//stores the month when clicked on
/* $('btn-primary').on('click', (function(){
      var typeVal = this.id;
      console.log(typeVal);

})) */





//when clicking the submit button, function will go through each object, loop through months to see if monthVal is present, and check each of the keys for true
/*
$('.btn-success').on('click', (function(){
      $('#collapseTwo').collapse('hide');
      $('#collapseThree').collapse('show');
      var len = destinations.length;
      for (var i = 0; i < len; i++) {
          $.each(destinations[i], function (k, v) {
              /* for (var j = 0; j < i.length; j++) {
                $.each(destinations[i][j], function(){
                  if (j===monthVal){
                    console.log(destinations.name);
                  }
                })
              })
              if (v===true&&monthVal){
                console.log(destinations[i].name);
              } else {
                console.log("none");
              }

          };

*/
}));
