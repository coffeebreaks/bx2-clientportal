document.getElementById('home-logo').addEventListener('click', function () {
    document.getElementById('current-order').style.display = 'none'
    document.getElementById('user-manager').style.display = 'none'
    document.getElementById('associate-manager').style.display = 'none'
    document.getElementById('login-form').style.display = 'none'
    document.getElementById('place-order').style.display = 'none'
    document.getElementById('landing-page').style.display = 'block'

});


document.getElementById('new-order-open-add-units-dialog').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      myButton.click();
    }
  });