$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show(); 
    $('tab-navigation__link').click(function () {
        tabContainers.hide(); 
        tabContainers.filter(this.hash).show();
        console.log(tabContainers); 
        $('tab-navigation__link').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
});