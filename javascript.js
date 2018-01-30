function createScrollCounter(section, counter) {
  $(window).scroll(scrollCounter);

  function scrollCounter() {
    if ($(window).scrollTop() > $(section).offset().top - $(window).height() + 0) {
      $(window).off("scroll", scrollCounter);
      $(counter).each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $this.text(now.toFixed(0));
          }
        });
      });
    }
  }
}

createScrollCounter('#states', '#count_num1');
createScrollCounter('#concerts', '#count_num2');
createScrollCounter('#fans', '#count_num3');
