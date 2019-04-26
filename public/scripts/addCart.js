$(() => {
  let data = [];
  $(".cart_button").click((event) => {
    let price = 0;

    event.preventDefault();

    let eventTarget = event.target;

    let formId = eventTarget.closest('form').id;

    let size = $('input[name=sizes]:checked', '#'+formId).val();

    let qty = $(eventTarget).prev().find('option:selected').text();
    if(size === 'small') {
      price += (10 * qty);
    } else if (size === 'medium') {
      price += (20 * qty);
    } else {
      price += (30 * qty);
    }

    $("#selectedItems").append(`<li> ${formId.charAt(0).toUpperCase()}${formId.slice(1)} Pizza - Size: ${size}, Qty: ${qty}, Price: $${price}`);
  });
});
