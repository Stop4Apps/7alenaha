$(function() {
    $('#inlineFormCustomSelect').change(function(){
      $('.question').hide();
      $('#' + $(this).val()).show();
    });
  });


  
