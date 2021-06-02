$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active')
    $('.header__nav').slideToggle().toggleClass('d-block')
  })

  $('.tab').on('click', function (e) {
    e.preventDefault()

    $('.tab').removeClass(['tab_active', 'border-none'])
    $(this).addClass('tab_active').prev('.tab').addClass('border-none')
  })

  $('.list__link').on('click', function (e) {
    e.preventDefault()

    const dataNav = $(this).attr('data-nav')

    $('html, body').animate(
      {
        scrollTop: $('#' + dataNav).offset().top - 70
      },
      1000
    )
  })
})
