$(document).ready(function(){
    $(".quantity").bind('change keyup',function(e){
        var key= String.fromCharCode(e.which);
        var len = $(this).val()
        var stt = this.id
        stt=stt.toUpperCase();
        var price = $('#'+stt).html();
        price = parseFloat(price)
        var total = (len * price).toLocaleString()
        $("#total"+stt).text("$"+total);
         
    });
    
    
});