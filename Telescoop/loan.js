$(document).ready(function(){
    $('[name^=loanforms').click(function(){
        $('[id^=FORM-]').removeClass("form visible").addClass("form");
        var inputValue = "#FORM-" + $(this).attr("value");
        $(inputValue).removeClass("form").addClass("form visible");
        /*var targetBox = $("." + inputValue);
        $(".form").not(targetBox).hide();
        $(targetBox).show();*/
    });
});
