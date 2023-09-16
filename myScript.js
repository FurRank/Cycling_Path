// button toggle for effects
var cbToggle = document.getElementById('bg-season-cb');
var snToggle = document.getElementById('bg-season-sn');

// button toggle for backgrounds
var snbgToggle = document.getElementById("bg-sn")
var snbg2Toggle = document.getElementById("bg-sn2")

var cbbgToggle = document.getElementById("bg-cb")
var cbbg2Toggle = document.getElementById("bg-cb2")

// button toggle to bring up effects button
var organizer = document.getElementById("organizer")

// var iconButton = document.getElementById("button-icon")

// for the effects (snow, leaves)
$('.button-panel').on('click', function(){
    var buttonID = $(this).attr('data-panelid')
    if(buttonID == "on-click-cb"){
        snToggle.style.display = "none"

        snbgToggle.style.display = "none"
        snbg2Toggle.style.display = "none"


        if(cbToggle.style.display == "none"){
            cbToggle.style.display = "block";
            cbbgToggle.style.display = "block";
            cbbg2Toggle.style.display = "block";
        }else{
            cbToggle.style.display = "none";
        }
    }else if(buttonID == 'on-click-sn'){
        cbToggle.style.display = "none"

        cbbgToggle.style.display = "none"
        cbbg2Toggle.style.display = "none"

        if(snToggle.style.display == "none"){
            snToggle.style.display = "block";
            snbgToggle.style.display = "block";
            snbg2Toggle.style.display = "block";
        }else{
            snToggle.style.display = "none";
        }
    }
});


// button to bring up effects button options
$('.button-starter').on('click', function(){
    organizer.style.display = "block";
    // $(this).attr('data-panelid').style.display = "none"
    var starterButton = document.getElementById("button-start")
    starterButton.style.display = "none"

    // iconButton.style.display = "block"

    buttonIcons = document.querySelectorAll(".button-panel")

    buttonIcons.forEach((buttons) => {
        buttons.style.display = "block"
    });
    
    
});

// for actual background

// function cherryToggle(){
//     var cToggle = document.getElementById("cherry-blossom");
//     if(cToggle.style.display == "none"){
//         cToggle.style.display = "block";
//     }else{
//         cToggle.style.display = "none";
//     }
//     // if(cToggle.style.visibility == "hidden"){
//     //     cToggle.style.visibility = "visible";
//     // }else{
//     //     cToggle.style.visibility = "hidden";
//     // }
// }