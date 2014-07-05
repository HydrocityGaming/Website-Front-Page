
console.info("specialRep Javascript Loaded.");

function editRep() {
    var myElements;
    myElements = document.querySelectorAll("div.author_info");
    if (debug.specialRep) {
        console.log("specialRep called");
    }
    for (var i = 0; i < myElements.length; i++) {
        for (var x = 0; x < specialRepUsers.length; x++) {
            if (myElements[i].innerHTML.indexOf(specialRepUsers[x].username) != -1) {
                if (debug.specialRep) {
                    console.log("This is " + specialRepUsers[x].username + "'s rep.");
                }
                var myElements2 = myElements[i].querySelectorAll("span.fc.reputation");
                if (specialRepUsers[x].actualRep == "x") {
                    specialRepUsers[x].actualRep = myElements2[0].innerHTML;
                }
                var thatRandom = Math.random();
                if (Math.random() < specialRepUsers[x].prob) {
                    myElements2[0].innerHTML = specialRepUsers[x].repMessage;
                    myElements2[0].style.background = specialRepUsers[x].bgColor + 
                        " url('http://www.hydrocitygaming.com/public/style_images/overlayblue/highlight_faint.png') repeat-x 0 1px";
                } else {
                    myElements2[0].innerHTML = specialRepUsers[x].actualRep;
                    myElements2[0].style.background =
                        "#8db13e url('http://www.hydrocitygaming.com/public/style_images/overlayblue/highlight_faint.png') repeat-x 0 1px";
                }
            } else {
                if (debug.specialRep) {
                    console.log("This is not " + specialRepUsers[x].username + "'s rep.");
                }
            }
        }
    }
    return true;
}

var specialRepInterval;
specialRepInterval = setInterval(function () {
    editRep()
}, 1000);