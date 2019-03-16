function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}


(function($){

  $('#header-post-search-form').on('keyup', function(){
    var searchText = $(this).val().toLowerCase();
    if(searchText) {
      $('.mew___components_header_header-search-form').find('.search-results').removeClass('hidden');
    }
    else {
      $('.mew___components_header_header-search-form').find('.search-results').addClass('hidden');
    }


    $('.header-post-search-item').each(function(){
        
      var postContent = $(this).find('.post-content').text().toLowerCase();
      if(postContent.includes(searchText)) {
        var occurCount = occurrences(postContent, searchText);
        $(this).removeClass('hidden');
        $(this).find('.occur-count span').text(occurCount);
      }
      else {
        $(this).addClass('hidden');
      }

    });
  });

})(jQuery);


(function($){
  $('.mew___components_header_header-search-form .search-form-input').focusout(function(){
    $(document).click(function(event) {
      var clickedClassName = $(event.target).attr('class');

      if(clickedClassName != 'search-block' && clickedClassName != 'search-form-input'){
        $('.mew___components_header_header-search-form .search-results').addClass('hidden');
      }
    });
  });

  $('.mew___components_header_header-search-form .search-form-input').focusin(function(e){
    if($(this).val()){
      $('.mew___components_header_header-search-form .search-results').removeClass('hidden');
    }
  });
})(jQuery);




