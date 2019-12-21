// function showBurger(){
//  var burgerMenu =  document.getElementById('burger');
// burgerMenu.style.display = 'block'
// }


// function myFunction() {
//     document.getElementById("burger").style.display = "block";
    
//   }

function toggle(){
    var burgerM = document.getElementById("burger");
    if (burgerM.style.display == "none") {
        burgerM.style.display = "block";
    } else {
        burgerM.style.display = "none";
    }        
}

$(document).ready(function () {


    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val(  ui.values[ 0 ] + "лв"+" - " + ui.values[ 1 ] + "лв");
        }
      });
      $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) +"лв" +" - "+
        $( "#slider-range" ).slider( "values", 1 ) +  "лв"  );








        var dateFormat = "mm/dd/yy",
        from = $( "#from" )
          .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3
          })
          .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
          }),
        to = $( "#to" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          from.datepicker( "option", "maxDate", getDate( this ) );
        });
   
      function getDate( element ) {
        var date;
        try {
          date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
          date = null;
        }
   
        return date;
      }



});
