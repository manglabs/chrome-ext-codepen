// Strangely, jQuery's #trigger method doesn't work in an extension context. Shrug.
function triggerChangeEvent(el) {
  var changeEvent = document.createEvent("HTMLEvents");
  changeEvent.initEvent("change",true,true);
  el.dispatchEvent(changeEvent);
}

// Open the dialog
$('.button-cover[data-type="js"]').click();

// JQuery
$('select#js-select>option[value="jquery"').prop('selected', true);  
triggerChangeEvent($('select#js-select')[0]);

// Underscore.js
$('#external-js').val('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js')
triggerChangeEvent($('#external-js')[0]);

// Backbone.js
$('#add-js-resource').click()
$('.js-resource').last().val('https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js');
triggerChangeEvent($('.js-resource').last()[0]);

// Close the dialog (commented out because it seems better to make it clear what happened)
//$('.button-cover[data-type="js"]').click();
