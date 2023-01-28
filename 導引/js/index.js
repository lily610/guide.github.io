$("#Bathroom").click(function(){
    $("#Answer1").dialog("open");

    if($("#Answer1").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer1").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#EightAndNineFloor").click(function(){
    $("#Answer2").dialog("open");

    if($("#Answer2").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer2").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#ThirtyFiveFloor").click(function(){
    $("#Answer5").dialog("open");

    if($("#Answer5").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer5").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#Restaurant").click(function(){
    $("#Answer4").dialog("open");

    if($("#Answer4").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer4").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#Eat").click(function(){
    $("#Answer3").dialog("open");

    if($("#Answer3").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer3").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#AnthonyRestaurant").click(function(){
    $("#Answer6").dialog("open");

    if($("#Answer6").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer6").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})
$("#AboutTicket").click(function(){
    $("#Answer7").dialog("open");

    if($("#Answer7").dialog("isOpen")){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:none")
    }

    $("#Answer7").dialog({close:function(){
        $("#Chosen,.QuestionUp,.QuestionDown").attr("style","display:block")
    }})
})