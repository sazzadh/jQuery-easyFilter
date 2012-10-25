(function( $ ){

  $.fn.easyFilter = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'items'       : '',
	  'filter'     : '',
	  'filterItem' : ''
    }, options);

    return this.each(function() {        

      $(settings.filterItem).click(function() {
		$(this).css('outline','none');
		
		var cur = settings.filterItem + '.current';
		$(cur).removeClass('current');
		$(this).addClass('current');
		
		
		var filterVal = $(this).attr('rel');
				
		if(filterVal == 'all') {
			$(settings.items).fadeIn('slow').removeClass('hidden');
		} else {
			
			$(settings.items).each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	  });

    });

  };
})( jQuery );