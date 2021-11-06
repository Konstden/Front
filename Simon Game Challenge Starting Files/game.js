let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let level = 0;
let started = false;
let userClickedPattern = [];


$(document).ready(function() {
    $(document).keypress(function(e) {
        if (!started) {
            $('#level-title').text('Level ' + level);
            started = true;
            nextSequence();
        }
    })
    
    $('.btn').click(function() {
        let userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        animatePress(userChosenColour);
        playSound(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    })

})                                                                          


function nextSequence() {
    let userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    let randomNumber = Math.floor(Math.random() * 1000) % 4;
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function() {
        $('#' + currentColour).removeClass('pressed')
    }, 100)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
    }
    else {
        console.log('wrong');
        $('body').addClass('game-over');
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 200);
        $('#level-title').text('Game Over, Press Any Key to Restart');
        startOver();
    }
} 

function startOver() {
    level = 0; 
    gamePattern = [];
    started = false;
}