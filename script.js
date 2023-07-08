
// Smooth Scroll Start

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

console.log(navMenuAnchorTags);
var interval;
for(var i = 0; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        
        // interval = setInterval(scrollVertically,20,targetSection);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
}

function scrollVertically(targetSection){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top <= 0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
}

     //  Smooth Scoll End //





//Skill Bar Auto Fill  Start//

var progressBars = document.querySelectorAll('.skill-progress > div');;
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function intialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

intialiseBars();

function fillBars(){

    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;

        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 3);
    }
}

function checkScroll(){

    // you would have to check wheteher skill conatiner is visible

    var coordinates = skillsContainer.getBoundingClientRect();
    if( !animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        console.log('Skills Section Visible');
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        intialiseBars();
    }
}

   // Skill Bar Auto Fill End //