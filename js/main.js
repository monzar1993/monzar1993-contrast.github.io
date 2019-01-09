$(document).ready(function () {
    //header sub menu toggle
    $('.sub-menu').click(function (){
      $('.toggle-menu').fadeToggle('fast', 'linear');
    });
    $('#sale-link').click(function(){
      $('li.t1').click();
    });
    $('#buy-link').click(function(){
      $('li.t2').click();
    });
    $('#rent-link').click(function(){
      $('li.t3').click();
    });

    // Price tabs
    $('#menu-tabs li').click(function () {
        var thisClass = this.className.slice(0, 2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#menu-tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();
    
    //Price tabs responsive
    $('#menu-tabs-responsive li').click(function () {
        var thisClass = this.className.slice(0, 2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#menu-tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();

    //bottom-slider #1
    $('.single-item').slick({
      fade: true,
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
    });


    //bottom-slider #2
    $('.our-team-slider').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      respondTo: 'slider',
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i>',
    });


    //popup footer
    $('#collect-data').click(function(){
      $('.popup').fadeIn('fast', 'linear', function (){
        setTimeout(function (){
          $('.popup').fadeOut('fast', 'linear');
        }, 2000);
      });
    });

});
