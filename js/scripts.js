$(document).ready(function(){
    $("#button01").click(function(){
        $(".slide_01").addClass("hidden");
        $(".slide_02").removeClass("hidden");
    });
    $("#button02").click(function(){
        $(".slide_02").addClass("hidden");
        $(".slide_03").removeClass("hidden");
    });
    $("#button03").click(function(){
        $(".slide_03").addClass("hidden");
        $(".slide_04").removeClass("hidden");
    });
    $("#button04").click(function(){
        $(".slide_04").addClass("hidden");
        $(".slide_05").removeClass("hidden");
    });
    $("#button05").click(function(){
        $(".slide_05").addClass("hidden");
        $(".slide_06").removeClass("hidden");
    });
    $("#button06").click(function(){
        $(".slide_06").addClass("hidden");
        $(".slide_07").removeClass("hidden");
    });
    $("#button07").click(function(){
        $(".slide_07").addClass("hidden");
        $(".slide_08").removeClass("hidden");
    });
    $("#button08").click(function(){
        $(".slide_08").addClass("hidden");
        $(".slide_09").removeClass("hidden");
    });
    $("#button09").click(function(){
        $(".slide_09").addClass("hidden");
        $(".slide_10").removeClass("hidden");
    });
    $("#button11").click(function(){
        $(".slide_10").addClass("hidden");
        $(".slide_01").removeClass("hidden");
    });
    $("#left01").click(function(){
        $("#button08").attr("disabled", false);
    });
    $("#left01").click(function(){
        $(".popup_01").removeClass("hidden");
    });
    $("#right01").click(function(){
        $(".popup_02").removeClass("hidden");
    });
    $("#right02").click(function(){
        $("#button09").attr("disabled", false);
    });
    $("#left02").click(function(){
        $(".popup_03").removeClass("hidden");
    });
    $("#right02").click(function(){
        $(".popup_04").removeClass("hidden");
    });
    $("#button11").click(function(){
        $(".popup_01").addClass("hidden");
        $(".popup_02").addClass("hidden");
        $(".popup_03").addClass("hidden");
        $(".popup_04").addClass("hidden");
        $("#button08").attr("disabled", true);
        $("#button09").attr("disabled", true);
    });
});
