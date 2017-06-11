/**
 * Created by Alex on 09.06.2017.
 */
jQuery('document').ready(function(){

        var value1;
        value1 = prompt('What is your Name?', 'Alex');

        if (value1 == 'Alex'){
            value2 = 'Здравствуй, ' + value1 + '.<br/>Перейдите на главную.';
            jQuery('#result').html(value2);
            alert('Вы зашли как\nАдминистратор');
        }else {
            jQuery('#result').html(value1);
        }
});