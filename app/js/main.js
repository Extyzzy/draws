$('.nav__list__more').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('nav__list__more_rotate');
    $(this).siblings('.nav__list__sub-menu').toggleClass('nav__list__sub-menu_block');
    $(this).siblings('.nav__list__sub-menu').toggleClass('nav__list__sub-menu_opacity');
});
$('.nav__list-link').click(function(event) {
    event.preventDefault();
    $(this).siblings('.nav__list').toggleClass('nav__list__height');
});