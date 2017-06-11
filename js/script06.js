/**
 * Created by Alex on 09.06.2017.
 */
jQuery('document').ready(function () {
    jQuery('div, h2').remove();
    var p_clon, p1, p2, x1;
    p_clon = jQuery('h3').clone();
    p1 = 5;
    p2 = 10;
    x1 = p1 * p2;
    jQuery('body').append(p_clon);
    jQuery('body').append('<a href="../index.html">Перейти на главную</a>');
    jQuery('body').append('<br/>X равна ', x1);
});