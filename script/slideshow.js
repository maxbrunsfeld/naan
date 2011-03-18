$(function() {

  // To add a picture to the slideshow, add its name to the list below.
  var slidesPath = 'images/slides/';
  var slideNames = [
    'big_naan.jpg',
    'tents.jpg',
    'heart_samosa.jpg',
    'lassi_sippin.jpg',
    'night_tents.jpg',
    'eat_in_rain.jpg'
  ];

  // This ken burns effect will be applied to every picture unless you specify
  // a different effect for that picture.
  var kenBurnsEffects = [];
  var defaultKenBurnsEffect = {
    from: 'left top',
    to: '20% 40%',
    time: 6
  };

  // If you want to have a different ken burns effect for a particular slide,
  // add an entry to this list. put the file name in the square brackets.
//  kenBurnsEffects['big_naan.jpg'] = {
//    from: '20% 20%',
//    to: '80% 100%',
//    time: 6
//  };
//  kenBurnsEffects['night_tents.jpg'] = {
//    from: '20% 20%',
//    to: '80% 100%',
//    time: 6
//  };


  var slides = [], effect;
  for (var i = 0, n = slideNames.length; i < n; i++) {
    slides[i] = {src: slidesPath + slideNames[i]};
    effect = kenBurnsEffects[slideNames[i]] || defaultKenBurnsEffect;
    slides[i].from = effect.from;
    slides[i].to   = effect.to;
    slides[i].time = effect.time;
  }
  var options = {
    fade: 1,
    variant: true
  };

  $("#noSlideShow").hide();
  $("#slideShow").show();
  $("#slideShow").crossSlide(options, slides);
});