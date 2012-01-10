$(function() {
  
  // TODO: Determine if this can be delegated.
  $('ul.flyout-list > li > a').each(function(evt) {
    var $this = $(this);
    var listItem = $this.parent();
    var href = $this.attr('href');
    var modal = $(href);
    var primaryButton = modal.find('a.btn.primary');
    
    modal.bind('hidden', function(evt) {
      listItem.removeClass('active');
    });
    
    primaryButton.bind('click', function(evt) {
      modal.modal('hide');
    });
  });
  
  $('ul.flyout-list').delegate('a', 'click', function(evt) {
    var $this = $(this);
    var listItem = $this.parent();
    var href = $this.attr('href');
    var modal = $(href);
    
    listItem.addClass('active');
    
    modal.modal({
      backdrop: true,
      keyboard: true,
      show: true
    });
  });
});
