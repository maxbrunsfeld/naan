$(function() {

  var defaultSection = '#news';

  var showCurrentSection = function() {
    var hash  = window.location.hash || defaultSection;
    var links = $('#navigation').children('a');
    var sections = $('.section');
    var currentLink = links.filter('[href=' + hash + ']');
    var currentSection = sections.filter(hash);
    links.removeClass('selected');
    currentLink.addClass('selected');
    sections.hide();
    currentSection.show();
  };

  $(window).bind('hashchange', function(event) {
    event.preventDefault();
    showCurrentSection();
  });
  showCurrentSection();
});