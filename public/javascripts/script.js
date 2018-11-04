// http://52.79.56.206:3000

window.onload = function(){
    var hw = document.getElementById('hw');    
    var close = document.getElementById('close');
    var modal_close = document.getElementById('modal-close');
    var append_modal = document.getElementById('append-modal');
    var priorities = document.getElementsByClassName('w3-bar-item');

    for(let i=0; i < priorities.length; i++)
    {
        priorities[i].addEventListener("click", function(){
            change_modal_priority_color(i);
        });
    }
    // var modal_button = document.getElementById('modal_button');
    // var lists = $('#list'); // id가 'my-box'인 객체 찾기
    hw.addEventListener('click', delay);
    close.addEventListener('click', hide);
    modal_close.addEventListener('click',hide_modal);
    append_modal.addEventListener('click', show_modal);
    // modal_button.addEventListener('click',pickDate);

    if(Notification)
    {
        Notification.requestPermission();
    }
}

function change_modal_priority_color(priority_index){
    var modal_priority_button = document.getElementById("modal-priority-button");
    let colorArray = [ "#f44336", "#ffc107", "#4CAF50"]; // w3-red, w3-amber, w3-green
    console.log("change modal priority color"+priority_index);
    if(modal_priority_button.style.backgroundColor === "")
    {
        console.log("color null");
    }
    console.log(modal_priority_button.style.backgroundColor);
    modal_priority_button.style.backgroundColor = colorArray[priority_index];
}

function show_modal(){
    document.getElementById('id01').style.display='block';
}

function hide_modal(){
    document.getElementById('id01').style.display='none';
}

function pickDate(){
    var date = document.getElementById("memoTitle2").value;
    console.log(date)
}

function delay(){
    setTimeout(function(){
        notify();
    }, 3000);
}

function hide(){
    var notice_box = document.getElementById('test');
    notice_box.style.display = 'none';
    // this.parentNode.parentNode.parentNode.style.display = 'none'
}

function notify(){
    if (!Notification)
    {
        alert("Notification is NOT available");
    }
    else
    {
        var newValue;
        newValue = Notification.permission;
        // alert(newValue);
        if(Notification.permission === "default")
        {
            alert(newValue);
        }
    }

    if(Notification.permission === "granted")
    {
        var notification = new Notification('Notification title', {
            icon : 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body : 'notification text',
        });

        notification.onclick = function(){
            window.open('http://google.com');
        }
    }
}