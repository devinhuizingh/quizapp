$(document).ready(function() {

    
var questions = [
		{
        question: "It is the end of February and you decide to take a week long vacation.  Where do you go?",
        choices: ["Hit the slopes, head to the nearest ski resort", "I’m so sick of winter… I’m going to Mexico for some beach and relaxing"],
        qNum : 0,
        
        },
        {
        question: "What would you rather wear??",
        choices: ["A hoodie and sweatpants", "Shorts and a t-shirt"],
        qNum : 1,
        
        },
        {
        question: "What is your preferred footwear?",
        choices: ["Snow Boots", "Flip flops"],
        qNum : 2,
        
        },
        ];

currentQuestion = 0;
selectedAnswer = 1;
cold = 0;
warm = 0;



$(".answers").submit(function(e){
        e.preventDefault();
       
        //set variables
        correctAnswer = questions[currentQuestion].correct;

        selectedAnswer = $('input[name=answer]:checked').val();
        
        if (selectedAnswer == 0) {
                cold++;
                        }
        else if(selectedAnswer == 1) {
                warm++

        };
        
        if (warm > cold) {
              $("body").addClass("warm");
              $("body").removeClass("cold");
              $("body").removeClass("neutral")
        }
        else if (cold > warm) {
                $("body").addClass("cold");
                $("body").removeClass("warm");
                $("body").removeClass("neutral")
        }  
        else if (cold=warm) {
                $("body").addClass("neutral");
                $("body").removeClass("warm");
                $("body").removeClass("cold")
        }
        
        if (currentQuestion < questions.length-1) {
                currentQuestion++;

                //get question
                $(".question").html(questions[currentQuestion].question);
                //get answers
                for (var i = 0; i <= questions[currentQuestion].choices.length; i++) {
                        var index="choice" + i;
                        $('#'+index).html(questions[currentQuestion].choices[i]);
                }
                $('input[name=answer]').attr('checked',false);

        }
        

        else if (currentQuestion >= questions.length-1) {
                if (warm > cold) {
                   $(".cold-or-warm").html("You finished! You should move to Hawaii") 
                   $(".reset").show();
                   
                   initMapWarm(); 
                   $(".warmend").show();
                   $(".coldend").hide();
                   initWarmWeather()
                   }
                   
                   
                
                else if (cold > warm) {
                    $(".cold-or-warm").html("You finished! You should move to Alaska") 
                    $(".reset").show();
                   
                   initMapCold(); 
                    $(".coldend").show();
                    $(".warmend").hide();
                    initColdWeather()
                    }
        };
        function initMapWarm() {
                        var mapDiv = document.getElementById('map');
                        var map = new google.maps.Map(mapDiv, {
                                center: {lat: 21.471538, lng: -158.002682}, 
                                zoom: 7
                        });
                   }; 
        function initMapCold() {
                        var mapDiv = document.getElementById('map');
                        var map = new google.maps.Map(mapDiv, {
                                center: {lat: 65.186329, lng: -150.886182}, 
                                zoom: 4
                        });
                   }; 

        function initColdWeather() {
            currentcold = '<a href="http://www.accuweather.com/en/us/anchorage-ak/99501/weather-forecast/346835" class="aw-widget-legal"></a><div id="awcc1460997020824" class="aw-widget-current"  data-locationkey="346835" data-unit="f" data-language="en-us" data-useip="false" data-uid="awcc1460997020824"></div><script type="text/javascript" src="http://oap.accuweather.com/launch.js"></script>'    
            $(".coldend").html(currentcold);       
        }; 
        function initWarmWeather() {
            currentwarm = '<a href="http://www.accuweather.com/en/us/honolulu-hi/96817/weather-forecast/348211" class="aw-widget-legal"></a><div id="awcc1460996637665" class="aw-widget-current"  data-locationkey="348211" data-unit="f" data-language="en-us" data-useip="false" data-uid="awcc1460996637665"></div><script type="text/javascript" src="http://oap.accuweather.com/launch.js"></script>'
            $(".warmend").html(currentwarm);
        };




});

$("button").click(function() {
        
        document.location.reload(true);

})




});