require('fomantic-ui-css/semantic.js');

document.addEventListener('DOMContentLoaded', function() {
    // do your setup here
    console.log('Initialized app');

    $('.ui.dropdown').dropdown({
        on: 'click'
    });

    $('.ui.buttons .dropdown.button').dropdown({
        action: 'combo'
    });

    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });

    $('.ui.menu a.item').on('click', function() {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
        ;
    });

    $('.special.card .image').dimmer({
        on: 'hover'
    });

    $('.star.rating').rating();

    $('.card .dimmer').dimmer({
        on: 'hover'
    });

    // add popup to show name
    $('.ui:not(.container, .grid)').each(function() {
        $(this).popup({
            on        : 'hover',
            variation : 'small inverted',
            exclusive : true,
            content   : $(this).attr('class')
        });
    });
});