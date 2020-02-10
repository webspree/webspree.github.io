var $form = $('#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbzVv4Dr5Uw2QWZfkFo092okFfm3NUdUw-3FnRww0LvlH7BzNF2V/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    alert("done")
  );
})