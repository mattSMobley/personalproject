$(document).ready(function () {
 $('.dropdown').on('click', (function() {
      $('.dropdown-toggle').dropdown();
  }));
});

var monthVal;
var choices = [];


$.ajax('destinationsNEW.json', {
  success: function(data, status){



$('.btn-info').on('click', (function() {
      monthVal = $(this).val();
      $('#collapseOne').collapse('hide');
      $('#monthSelection').append('<b><i><h4 style="color: red; text-transform: uppercase;">' + monthVal + '</h4></b></i>' );
      $('#collapseTwo').collapse('show');
      console.log(monthVal);

    }));

      var beaches = false;
      var sea = false;
      var rainforest = false;
      var desert = false;
      var city = false;
      var mountains = false;
      var arts = false;


      $('#beach').on('click', (function(){
          beaches = !beaches;
          console.log('beaches is ' + beaches);
        }));

      $('#sea').on('click', (function(){
        sea = !sea;
        console.log('sea is ' + sea);
      }));

      $('#rainforest').on('click', (function(){
        rainforest = !rainforest;
        console.log('rainforest is ' + rainforest);
      }));

      $('#desert').on('click', (function(){
        desert = !desert;
        console.log('desert is ' + desert);
      }));

      $('#city').on('click', (function(){
          city = !city;
          console.log('city is ' + city);
      }));

      $('#mountains').on('click', (function(){
        mountains = !mountains;
        console.log('mountains is ' + mountains);
      }));

      $('#arts').on('click', (function(){
        arts = !arts;
        console.log('arts is ' + arts);
      }));





      $('.btn-success').on('click', (function(){
            $('#collapseTwo').collapse('hide');
            $('#collapseThree').collapse('show');
            if (beaches === true){
              choices.push('beach');
            }
            if (sea === true){
              choices.push('sea');
            }
            if (rainforest === true){
              choices.push('rainforest');
            }
            if (desert === true){
              choices.push('desert');
            }
            if (city === true){
              choices.push('city');
            }
            if (mountains === true){
              choices.push('mountains');
            }
            if (arts === true){
              choices.push('arts');
            }
            choices.sort();
            console.log(choices);


    //for each object within destinations.json(data)

var addCity = function(){
  $('#results').append('<h3>' + data[i].name + '</h3>' + '<br>' + '<p>' + data[i].about + '</p>' +'<br>')
};
var notFound = function(){
  $('#results').append('<h3>' + 'Whoops..' + '</h3>' + '<br>' + '<p>' + 'Looks like there is no match for these specific choices right now. However, I do update the database frequently' + '</p>' +'<br>')
};
var addPicture = function(){
  $('#results').append('<div id="wapiblock"></div>')
};



    var choiceLength = choices.length;
    for (var i=0; i<data.length; i++){

      switch (choiceLength) {
        case 1: if (data[i].months.indexOf(monthVal) >=0 && data[i].types.indexOf(choices[0]) >=0){
          addCity();
          $('#results').append('<div id=' + i + '></div>' + '<br><br><hr><br>');
        var myRequest = {
          'tag': data[i].name,
        };
        var myOptions = {
          'width': 350,
          'height': 220,
          'columns': 1,
          'croppedPhotos': true
        };
        var wapiblock = document.getElementById(i);
        var widget = new panoramio.PhotoListWidget(wapiblock, myRequest, myOptions);
        widget.setPosition(0);
        };
          break;

        case 2: if (data[i].months.indexOf(monthVal) >=0 && data[i].types.indexOf(choices[0]) >=0 && data[i].types.indexOf(choices[1]) >=0){
          addCity();
          $('#results').append('<div id=' + i + '></div>' + '<br><br><hr>');
        var myRequest = {
          'tag': data[i].name,
        };
        var myOptions = {
          'width': 350,
          'height': 220,
          'columns': 1,
          'croppedPhotos': true
        };
        var wapiblock = document.getElementById(i);
        var widget = new panoramio.PhotoListWidget(wapiblock, myRequest, myOptions);
        widget.setPosition(0);
        }
          break;

        case 3: if (data[i].months.indexOf(monthVal) >=0 && data[i].types.indexOf(choices[0]) >=0 && data[i].types.indexOf(choices[1]) >=0 && data[i].types.indexOf(choices[2]) >=0){
          addCity();
          $('#results').append('<div id=' + i + '></div>' + '<br><br><hr>');
        var myRequest = {
          'tag': data[i].name,
        };
        var myOptions = {
          'width': 350,
          'height': 220,
          'columns': 1,
          'croppedPhotos': true
        };
        var wapiblock = document.getElementById(i);
        var widget = new panoramio.PhotoListWidget(wapiblock, myRequest, myOptions);
        widget.setPosition(0);
        }
          break;

        case 4:if (data[i].months.indexOf(monthVal) >=0 && data[i].types.indexOf(choices[0]) >=0 && data[i].types.indexOf(choices[1]) >=0 && data[i].types.indexOf(choices[2]) >=0 && data[i].types.indexOf(choices[3]) >=0){
          addCity();
          $('#results').append('<div id=' + i + '></div>' + '<br><br><hr>');
        var myRequest = {
          'tag': data[i].name,
        };
        var myOptions = {
          'width': 350,
          'height': 220,
          'columns': 1,
          'croppedPhotos': true
        };
        var wapiblock = document.getElementById(i);
        var widget = new panoramio.PhotoListWidget(wapiblock, myRequest, myOptions);
        widget.setPosition(0);
        }
          break;

        default: $('#results').append('<h3>' + 'SORRY' + '</h3>' + '<br>' + '<p>' + 'Try narrowing your search to 4 or fewer types of experiences' + '</p>' +'<br>')
        }
      }

        $('#results').append('<p>' + '<br>' + '<br>' + '<br>' + '<i>' + "Didn't find what you were looking for? Our database is always growing, but until then, explore other combinations for better results." + '</p>' +'<br>');

      }));
    }
  })

  $('#restart').on('click', (function() {
       location.reload();
   }));
