// Open the dialog
$('.button-cover[data-type="js"]').click();

// JQuery
$('select#js-select>option[value="jquery"').prop('selected', true);  

// Underscore.js
$('#external-js').val('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js');

// Backbone.js
$('#add-js-resource').click()
$('.js-resource').last().val('https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js');

// Close the dialog (commented out because it seems better to make it clear what happened)
//$('.button-cover[data-type="js"]').click();
