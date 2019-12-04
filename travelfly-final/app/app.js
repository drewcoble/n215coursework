var tourData = {};
var thisTour = {};

function showTour() {
  $("nav a").click(function(event) {
    event.preventDefault();
    tourName = event.currentTarget.id;
    thisTour = tourData.tourName;

    if (thisTour) {
      $(".blog-holder").html(
        `<h1>${thisPost.title}</h1>
            <p>Author: ${thisPost.author}</p>
            <p>Publish Date: ${thisPost.publishDate}</p>
            <p>${thisPost.story}</p>
            <div>
            <h2>Comments:</h2>
            <ul>`
      );
      $.each(thisPost.comments, function(index, comment) {
        $(".blog-holder").append(
          `<li>${comment.userName} • ${comment.commentDate}<br>
              ${comment.comment}
              </li>
              `
        );
      });
      $(".blog-holder").append(
        `</ul>
          </div>`
      );
    }
  });
}

function getData() {
  $.getJSON("data/data.json", function(tours) {
    tourData = tours;
    addListeners();
  });
}

$(document).ready(function() {
  getData();
});
