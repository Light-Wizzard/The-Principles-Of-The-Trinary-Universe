/* ****************************************************************************
 * Trinary JavaScript
 * Last Update: 14 January 2019
 * Copyright and Copyleft by: Jeffrey Scott Flesher
 * You can use this as a template to make a JavaScript Based Video Player,
 *    this uses a video tag for HTML5 Player
 * Below is for JSlint http://jslint.com/;
 * Check: a browser, long lines and whitespace mess
 * do not alter it, no space before global.
 */
/*global window */
/* ****************************************************************************
 * Removes an element from the document
 */
function removeElement(elementId) {
    "use strict";
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
    //document.getElementById("debug_info").innerHTML = "Debug Message: " + elementId;
}
/* ****************************************************************************
 * makeVideo
 */
function makeVideo() {
    "use strict";
    // Note I do not have a file Extension, I add either m4v or ogg, make sure you have both
    var videos = ["http://LightWizzard.com/video/documentaries/sir_isaac.newton-the.last.magician-bbc.",
                  "http://LightWizzard.com/video/documentaries/bbc-our.secret.universe-the.hidden.life.of.the.cell.720.",
                  "http://LightWizzard.com/video/documentaries/in_search_of-5x16-the_castle_of_secrets.",
                  "http://LightWizzard.com/video/documentaries/coral.castle.mystery.solved.",
                  "http://LightWizzard.com/video/documentaries/something.disturbing.about.abe.lincoln.",
                  "http://LightWizzard.com/video/documentaries/the.code.by.carl.munck."];
    var i=0;
    var myElements = document.querySelectorAll(".video");
    [].forEach.call(myElements, function (myElement) {
    	// create a HTML5 video player
        var video = document.createElement("video");
        video.autoplay = false;
        // Check for support video type
        if (video.canPlayType("video/mp4")) {
            video.src = videos[i] + "m4v";
            video.type = "video/mp4";
        } else {
            // FIXME create ogg files
            video.src = videos[i] + "ogg";
            video.type = "video/ogg";
        }
		// 100% takes up the whole screen, this has a show full screen option, not so nice on my Smart Phone
        video.setAttribute("width", "50%");
        video.setAttribute("poster", videos[i] + "png");
        //video.setAttribute("height", "240");
        video.setAttribute("controls", "controls");
        myElement.appendChild(video);
        removeElement("video-" + i.toString());

        i += 1;
        //document.getElementById("debug_info").innerHTML = "Debug Message: ";
    });
}
/* ************************************************************************* */
window.onload = function () {
    "use strict";
    makeVideo();
};
/* ************************ End of File *********************************** */
