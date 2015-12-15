$(document).ready(function() {
 $('.dropdown').on('click', (function() {
      $('.dropdown-toggle').dropdown();
      //$('.backwhite').css("padding: 0em 0em 40em 0em");
  }));
});

//******************THIS ONE IS RIGHT!!!!***********
var monthVal;
var choice;
var obj;


$.ajax('destinations.json', {
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
          console.log(choice);
        }));

      $('#sea').on('click', (function(){
          choice = 'sea';
          console.log(choice);
      }));

      $('#rainforest').on('click', (function(){
          choice = 'rainforest';
          console.log(choice);
      }));

      $('#desert').on('click', (function(){
          choice = 'desert';
          console.log(choice);
      }));

      $('#city').on('click', (function(){
          choice = 'city';
          console.log(choice);
      }));

      $('#mountains').on('click', (function(){
          choice = 'mountains';
          console.log(choice);
      }));

      $('#arts').on('click', (function(){
          choice = 'arts';
          console.log(choice);
      }));

      $('.btn-success').on('click', (function(){
            $('#collapseTwo').collapse('hide');
            $('#collapseThree').collapse('show');
    //for each object within destinations.json(data)

            for (var i=0; i<data.length; i++){
              obj = data[i];
                if (obj[monthVal]===true && obj[choice]===true){
                  console.log(obj.name);
                  $('#results').append('<h3>' + obj.name + '</h3>' + '<br>' + '<p>' + obj.about + '</p>' +'<br>')
                }
              }


      }));
    }
  })
