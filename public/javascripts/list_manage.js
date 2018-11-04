var list_count = 10;
var list_index = 0;

$(function(){
    $("#modal_button").click(function(){
        var memoTitle = $("#memoTitle");
        var date = $("#memoDate");
        var memoContent = $("#memoContent");
        var priority_buton = $("#modal-priority-button");
        var colorArray = ["rgb(244, 67, 54)","rgb(255, 193, 7)","rgb(76, 175, 80)", ""];
        var colorArray2 = [ "#f44336", "#ffc107", "#4CAF50", ""]; // w3-red, w3-amber, w3-green
        var color = colorArray.indexOf(priority_buton.css("background-color"));
        console.log(memoTitle.val());
        console.log(date.val());
        console.log(memoContent.val());
        console.log(priority_buton.css("background-color"));
        console.log(color);
        $("#id01").css("display","none");

        if(color === -1){ color = 3}
        
        // alert("hi there~");
        var html = '<li><div class="notice-box" , id="'+"test"+list_count+'"><div class="priority-layout"><div class="priority" id="priority-color'+color+'"></div></div>'
        html += '<div class="memo-layout"><div class="metadata-layout"><div class="title-layout"><div>'+memoTitle.val()+'</div></div>'
        html += '<span id="close">&times;</span><!-- &times; == x button --></div>'
        html += '<div class="content-layout"><p>'+memoContent.val()+'</p></div></div></div></li>'

        $("#list").append(html);
        memoTitle.val('');
        date.val('');
        memoContent.val('');
        priority_buton.css("background-color", "");
    });

    $("#list").on("click", "#close", function(){
        $(this).parent().parent().parent().parent().remove();
    })

    // $("#list").on("click", ".btnDel", function(){
    //     $(this).parent().parent().remove();
    // });

})