// Create a lightbox


(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);


  $('.lightbox-gallery .lightbox-enlarge-01').click(function(e) { e.preventDefault(); var src = $('.item01 img').attr("src"); var cap = $('.item01  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-02').click(function(e) { e.preventDefault(); var src = $('.item02 img').attr("src"); var cap = $('.item02  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-03').click(function(e) { e.preventDefault(); var src = $('.item03 img').attr("src"); var cap = $('.item03  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-04').click(function(e) { e.preventDefault(); var src = $('.item04 img').attr("src"); var cap = $('.item04  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-05').click(function(e) { e.preventDefault(); var src = $('.item05 img').attr("src"); var cap = $('.item05  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-06').click(function(e) { e.preventDefault(); var src = $('.item06 img').attr("src"); var cap = $('.item06  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-07').click(function(e) { e.preventDefault(); var src = $('.item07 img').attr("src"); var cap = $('.item07  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-08').click(function(e) { e.preventDefault(); var src = $('.item08 img').attr("src"); var cap = $('.item08  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-09').click(function(e) { e.preventDefault(); var src = $('.item09 img').attr("src"); var cap = $('.item09  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-10').click(function(e) { e.preventDefault(); var src = $('.item10 img').attr("src"); var cap = $('.item10  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-11').click(function(e) { e.preventDefault(); var src = $('.item11 img').attr("src"); var cap = $('.item11  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-12').click(function(e) { e.preventDefault(); var src = $('.item12 img').attr("src"); var cap = $('.item12  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-13').click(function(e) { e.preventDefault(); var src = $('.item13 img').attr("src"); var cap = $('.item13  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-14').click(function(e) { e.preventDefault(); var src = $('.item14 img').attr("src"); var cap = $('.item14  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-15').click(function(e) { e.preventDefault(); var src = $('.item15 img').attr("src"); var cap = $('.item15  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-16').click(function(e) { e.preventDefault(); var src = $('.item16 img').attr("src"); var cap = $('.item16  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-17').click(function(e) { e.preventDefault(); var src = $('.item17 img').attr("src"); var cap = $('.item17  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-18').click(function(e) { e.preventDefault(); var src = $('.item18 img').attr("src"); var cap = $('.item18  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-19').click(function(e) { e.preventDefault(); var src = $('.item19 img').attr("src"); var cap = $('.item19  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-20').click(function(e) { e.preventDefault(); var src = $('.item20 img').attr("src"); var cap = $('.item20  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-21').click(function(e) { e.preventDefault(); var src = $('.item21 img').attr("src"); var cap = $('.item21  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-22').click(function(e) { e.preventDefault(); var src = $('.item22 img').attr("src"); var cap = $('.item22  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});
  $('.lightbox-gallery .lightbox-enlarge-23').click(function(e) { e.preventDefault(); var src = $('.item23 img').attr("src"); var cap = $('.item23  img').attr("alt");$img.attr('src', src);$caption.text(cap);$lightbox.fadeIn('fast');$lightbox.click(function() {$lightbox.fadeOut('fast');});});







}());