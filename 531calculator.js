var squatWeight;
var squatReps;
var benchWeight;
var benchReps;
var deadliftWeight;
var deadliftReps;
var ohpWeight;
var ohpReps;


function calculate(){
  var maxSquat = Math.floor(squatWeight/(1.0278-0.0278*squatReps));
  var maxBench = Math.floor(benchWeight/(1.0278-0.0278*benchReps));
  var maxDeadlift = Math.floor(deadliftWeight/(1.0278-0.0278*deadliftReps));
  var maxOhp = Math.floor(ohpWeight/(1.0278-0.0278*ohpReps));
  
  //console.log("Max squat: " + maxSquat);
  //console.log("Max Bench: " + maxBench);
  //console.log("Max Dead: " + maxDeadlift);
  //console.log("Max OHP: " + maxOhp);
  
  //Max lifts
  $("#squat-max-container").append("Squat: " + maxSquat + " lbs");
  $("#bench-max-container").append("Benchpress: " + maxBench + " lbs");
  $("#deadlift-max-container").append("Deadlift: " + maxDeadlift + " lbs");
  $("#ohp-max-container").append("Overhead Press: " + maxOhp + " lbs");
  
  
  //Week One
  $("#squat-week-one-tr").append("<td>Squat</td><td>" + Math.floor(maxSquat * .65) + "</td><td>" + Math.floor(maxSquat*.75) + "</td><td>" + Math.floor(maxSquat*.85) + "</td>");
  
  $("#bench-week-one-tr").append("<td>Bench Press</td><td>" + Math.floor(maxBench * .65) + "</td><td>" + Math.floor(maxBench*.75) + "</td><td>" + Math.floor(maxBench*.85) + "</td>");

  $("#deadlift-week-one-tr").append("<td>Deadlift</td><td>" + Math.floor(maxDeadlift * .65) + "</td><td>" + Math.floor(maxDeadlift*.75) + "</td><td>" + Math.floor(maxDeadlift*.85) + "</td>");
  
  $("#ohp-week-one-tr").append("<td>Overhead Press</td><td>" + Math.floor(maxOhp * .65) + "</td><td>" + Math.floor(maxOhp*.75) + "</td><td>" + Math.floor(maxOhp*.85) + "</td>");


  //Week Two
  $("#squat-week-two-tr").append("<td>Squat</td><td>" + Math.floor(maxSquat * .70) + "</td><td>" + Math.floor(maxSquat*.80) + "</td><td>" + Math.floor(maxSquat*.90) + "</td>");
  
  $("#bench-week-two-tr").append("<td>Bench Press</td><td>" + Math.floor(maxBench * .70) + "</td><td>" + Math.floor(maxBench*.80) + "</td><td>" + Math.floor(maxBench*.90) + "</td>");

  $("#deadlift-week-two-tr").append("<td>Deadlift</td><td>" + Math.floor(maxDeadlift * .70) + "</td><td>" + Math.floor(maxDeadlift*.80) + "</td><td>" + Math.floor(maxDeadlift*.90) + "</td>");
  
  $("#ohp-week-two-tr").append("<td>Overhead Press</td><td>" + Math.floor(maxOhp * .70) + "</td><td>" + Math.floor(maxOhp*.80) + "</td><td>" + Math.floor(maxOhp*.90) + "</td>");
  
  //Week Three
  $("#squat-week-three-tr").append("<td>Squat</td><td>" + Math.floor(maxSquat * .75) + "</td><td>" + Math.floor(maxSquat*.85) + "</td><td>" + Math.floor(maxSquat*.95) + "</td>");
  
  $("#bench-week-three-tr").append("<td>Bench Press</td><td>" + Math.floor(maxBench * .75) + "</td><td>" + Math.floor(maxBench*.85) + "</td><td>" + Math.floor(maxBench*.95) + "</td>");

  $("#deadlift-week-three-tr").append("<td>Deadlift</td><td>" + Math.floor(maxDeadlift * .75) + "</td><td>" + Math.floor(maxDeadlift*.85) + "</td><td>" + Math.floor(maxDeadlift*.95) + "</td>");
  
  $("#ohp-week-three-tr").append("<td>Overhead Press</td><td>" + Math.floor(maxOhp * .75) + "</td><td>" + Math.floor(maxOhp*.85) + "</td><td>" + Math.floor(maxOhp*.95) + "</td>");

  //Week Four
  $("#squat-week-four-tr").append("<td>Squat</td><td>" + Math.floor(maxSquat * .40) + "</td><td>" + Math.floor(maxSquat*.50) + "</td><td>" + Math.floor(maxSquat*.60) + "</td>");
  
  $("#bench-week-four-tr").append("<td>Bench Press</td><td>" + Math.floor(maxBench * .40) + "</td><td>" + Math.floor(maxBench*.50) + "</td><td>" + Math.floor(maxBench*.60) + "</td>");

  $("#deadlift-week-four-tr").append("<td>Deadlift</td><td>" + Math.floor(maxDeadlift * .40) + "</td><td>" + Math.floor(maxDeadlift*.50) + "</td><td>" + Math.floor(maxDeadlift*.60) + "</td>");
  
  $("#ohp-week-four-tr").append("<td>Overhead Press</td><td>" + Math.floor(maxOhp * .40) + "</td><td>" + Math.floor(maxOhp*.50) + "</td><td>" + Math.floor(maxOhp*.60) + "</td>");
	
};

function clear_Results(){
  $("#squat-max-container").empty();
  $("#bench-max-container").empty();
  $("#deadlift-max-container").empty();
  $("#ohp-max-container").empty();
  
  $("#squat-week-one-tr").empty();
  $("#bench-week-one-tr").empty();
  $("#deadlift-week-one-tr").empty();
  $("#ohp-week-one-tr").empty();    
  
  $("#squat-week-two-tr").empty();
  $("#bench-week-two-tr").empty();
  $("#deadlift-week-two-tr").empty();
  $("#ohp-week-two-tr").empty();   
  
  $("#squat-week-three-tr").empty();
  $("#bench-week-three-tr").empty();
  $("#deadlift-week-three-tr").empty();
  $("#ohp-week-three-tr").empty();    
  
  $("#squat-week-four-tr").empty();
  $("#bench-week-four-tr").empty();
  $("#deadlift-week-four-tr").empty();
  $("#ohp-week-four-tr").empty();    
     
};

//calculate();

$(document).ready(function(){
  
  //button hover
  /*$("#calculate-button").hover(
  	function(){
    	console.log("hover on");
      $("#button-text").css("color", "white");
      $(this).css("background-color", "black");
    }, function(){
    	console.log("hover off");
      $("#button-text").css("color", "black");
      $(this).css("background-color", "white");
    });*/
  
  
  $("#calculate-button").click(function(){
 
    squatWeight = $("#squat-input-weight").val();
    
    if ($("#squat-input-reps").val() !== ""){
    	squatReps = $("#squat-input-reps").val();
    }else{
    	squatReps = 1;
    }
    
    benchWeight = $("#bench-input-weight").val();
    
    if ($("#bench-input-reps").val() !== ""){
    	benchReps = $("#bench-input-reps").val();
    }else{
    	benchReps = 1;
    }
    
    deadliftWeight = $("#deadlift-input-weight").val();
    
    if ($("#deadlift-input-reps").val() !== ""){
    	deadliftReps = $("#deadlift-input-reps").val();
    }else{
    	deadliftReps = 1;
    }
    
    ohpWeight = $("#ohp-input-weight").val();
    
    if (ohpReps = $("#ohp-input-reps").val() !== ""){
    	ohpReps = $("#ohp-input-reps").val();
    }else{
    	ohpReps = 1;
    };
    
  
    clear_Results();
    $("#results-main-container").css("display", "inline-block");
    calculate();

    $('html, body').animate({
        scrollTop: $("#results-main-container").offset().top
    }, 1500);	  
    
  })
})
