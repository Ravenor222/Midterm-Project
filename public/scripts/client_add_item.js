$(document).ready(()=> {

   $('header').on('click','.prevention',function(event) {
     event.preventDefault();
   });

  $('#menu-container').on('click', '.prevention',function(event) {
    event.preventDefault();
    // console.log($(this).siblings()[0]);
    const $cartName = $('<td>')
    .text($(this).siblings()[0]);
    const $cartPrice = $('<td>')
    .text($(this).siblings()[1]);
    const $cartCalories = $('<td>')
    .text($(this).siblings()[2]);

    const $cartItem = $('<tr>')
    .append($cartName,$cartPrice,$cartCalories);

    const $shoppingCart = $('#shopping-cart')
    .append($cartItem);
  });

});
