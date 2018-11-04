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
        var memoTitle = $("#memoTitle").val();
        var date = $("#memoDate").val();
        var memoContent = $("#memoContent").val();
        var priority_buton = $("#modal-priority-button");
        var priority = priority_buton.css("background-color");
        console.log(memoTitle);
        console.log(date);
        console.log(memoContent);
        console.log(priority);
        $("#id01").css("display","none");
        priority_buton.css("background-color", "");
        
        // alert("hi there~");
        // var html = '<li> added items 3</li>';
        // test += 1;
        // console.log(test);

        // $("#list").append(html);
        
    });

    // $("#list").on("click", ".btnDel", function(){
    //     $(this).parent().parent().remove();
    // });

})