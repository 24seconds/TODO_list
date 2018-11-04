// var test = 0;

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
        // var html = '<li> added items 3</li>';
        // test += 1;
        // console.log(test);

        // $("#list").append(html);

        memoTitle.val('');
        date.val('');
        memoContent.val('');
        priority_buton.css("background-color", "");

    });

    // $("#list").on("click", ".btnDel", function(){
    //     $(this).parent().parent().remove();
    // });

})