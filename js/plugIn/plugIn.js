$(function(){
    $('.plugobj').click(function(){
        var link = $(this).attr('link');
        $('.layer-box').show();
        $('.layer-box').load(link);
    })
    $('.layer-box').on('click','.layer-mark',function(){
        $('.layer-main').removeClass('in').removeClass('out').addClass('out');
        $('.layer-mark').removeClass('in').removeClass('out').addClass('out');
        setTimeout(function(){$('.artical-layer-wrap').remove();$('.layer-box').hide();},700)
    })
    var btnEnlarge = document.getElementById('btnEnlarge');
    function openHtml(){
        var PlugInhHtmlPage = document.getElementById('PlugInhHtmlPage');
        var link = PlugInhHtmlPage.getAttribute('src');
        window.open(link, 'newwindow', 'height=600, width=800, top=0, left=0, toolbar=no, menubar=no');
    }
});