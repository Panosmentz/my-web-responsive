$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(document).ready(function(){
  $(window).on("scroll", function(){
     $(".progress").each(function(index, progress){
      var progressBar = $(progress).find(".progress-bar");
      var progressPercent = parseInt($(progressBar).attr("data-progress"));
      if($(window).scrollTop() > $(progress).offset().top - 800){
        $(progressBar).css("width", progressPercent + "%").text(progressPercent + "%");
      }
     });
  });
});
(function() {
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

