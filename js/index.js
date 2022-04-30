
/*
$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(400);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(400, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
*/

// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
});