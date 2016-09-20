$(function(){
    $('.artical-layer-box').on('click','.artical-layer-close',function(){
        $('.artical-layer-main').removeClass('in').removeClass('out').addClass('out');
        $('.artical-layer-mark').removeClass('in').removeClass('out').addClass('out');
        setTimeout(function(){$('.artical-layer-wrap').remove();$('.artical-layer-box').hide();},700)
    });
    $('.main-nav>div').click(function(){
        $('.page-header').removeClass('hide').addClass('hide');
        $('body').animate({scrollTop:0},300);
        var link = $(this).attr('link');
        $('.main-nav-content').show();
        $('.main-nav-content').load(link);
    })
    $('.main-nav>div#home').click(function(){
        $('.page-header').removeClass('hide');
    })
});