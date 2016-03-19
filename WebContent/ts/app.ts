///<reference path="./def/jquery.d.ts" />
///<reference path="./User.ts" />
$(function() {
    var jqueryMessage: string = 'JQuery is included!';
    $('body').append('<h3>' + jqueryMessage + '<h3>');

    var user: User = new User('John', 'Smith');
    $('body').append('<span>' + user.firstName + ' ' + user.lastName + '</span>');
});