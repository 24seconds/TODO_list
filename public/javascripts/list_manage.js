var list_count = 10;
var list_index = 0;

$(function(){
    $("#append").click(function(){

        // alert("hi there~");
        var html = '<li> added items 3</li>';
        // test += 1;
        // console.log(test);

        $("#list").append(html);
        
    });

    // $("#list").on("click", ".btnDel", function(){
    //     $(this).parent().parent().remove();
    // });

})

$(function(){
    $("#modal_button").click(function(){
        var memoTitle = $("#memoTitle");
        var date = $("#memoDate");
        var memoContent = $("#memoContent");
        var priority_buton = $("#modal-priority-button");
        console.log(memoTitle.val());
        console.log(date.val());
        console.log(memoContent.val());
        console.log(priority_buton.css("background-color"));
        $("#id01").css("display","none");
        
        // alert("hi there~");
        var html = '<li><div class="notice-box" , id="'+"test"+list_count+'"><div class="priority-layout"><div class="priority"></div></div>'
        html += '<div class="memo-layout"><div class="metadata-layout"><div class="title-layout"><div>'+memoTitle.val()+'</div></div>'
        html += '<span id="close">&times;</span><!-- &times; == x button --></div>'
        html += '<div class="content-layout"><p>'+memoContent.val()+'</p></div></div></div></li>'
        // test += 1;
        // console.log(test);
        $("#list").append(html);
        memoTitle.val('');
        date.val('');
        memoContent.val('');
        priority_buton.css("background-color", "");
    });

    $("#list").on("click", "#close", function(){
        $(this).parent().parent().parent().remove();
    })

    // $("#list").on("click", ".btnDel", function(){
    //     $(this).parent().parent().remove();
    // });

})