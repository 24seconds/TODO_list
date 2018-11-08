// http://52.79.56.206:3000

window.onload = function () {
    var hw = document.getElementById('hw');
    var modal_close = document.getElementById('modal-close');
    var append_modal = document.getElementById('append-modal');
    var priorities = document.getElementsByClassName('w3-bar-item');
    var w3_dropdown_hover = document.getElementById('priority-dropdown');

    setTimeout(function () {
        for (let i = 0; i < priorities.length; i++) {
            priorities[i].addEventListener("click", function () {
                change_modal_priority_color(i);
            });
            priorities[i].addEventListener("click", function (){
                console.log("test priority event listener");
            })
        }
        hw.addEventListener('click', delay);
        modal_close.addEventListener('click', hide_modal);
        append_modal.addEventListener('click', show_modal);
        w3_dropdown_hover.addEventListener('mouseover', show_option);
        w3_dropdown_hover.addEventListener('mouseout', hide_option);
    }, 0);
    // var modal_button = document.getElementById('modal_button');
    // var lists = $('#list'); // id가 'my-box'인 객체 찾기
    // modal_button.addEventListener('click',pickDate);
    if (Notification) {
        Notification.requestPermission();
    }
}


function show_option(){
    var modal_priority_option = document.getElementById("modal-priority-option");
    modal_priority_option.style.display = 'block';
} 

function hide_option(){
    var modal_priority_option = document.getElementById("modal-priority-option");
    modal_priority_option.style.display = 'none';
}

// click, priorities
function change_modal_priority_color(priority_index) {
    var modal_priority_button = document.getElementById("modal-priority-button");
    let colorArray = ["#f44336", "#ffc107", "#4CAF50"]; // w3-red, w3-amber, w3-green
    console.log("change modal priority color" + priority_index);
    let priorityArray = ["URGENT", "NORMAL", "MINOR"];
    if (modal_priority_button.style.backgroundColor === "") {
        console.log("color null");
    }
    modal_priority_button.style.backgroundColor = colorArray[priority_index];
    modal_priority_button.innerText = priorityArray[priority_index];
    console.log(modal_priority_button.style.backgroundColor);
    hide_option();
}

function show_modal() {
    document.getElementById('id01').style.display = 'block';
}

function hide_modal() {
    document.getElementById('id01').style.display = 'none';
}

function pickDate() {
    var date = document.getElementById("memoTitle2").value;
    console.log(date)
}

function delay() {
    setTimeout(function () {
        notify();
    }, 3000);
}

function notify() {
    if (!Notification) {
        alert("Notification is NOT available");
    }
    else {
        var newValue;
        newValue = Notification.permission;
        // alert(newValue);
        if (Notification.permission === "default") {
            alert(newValue);
        }
    }

    if (Notification.permission === "granted") {
        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: 'notification text',
        });

        notification.onclick = function () {
            window.open('http://google.com');
        }
    }
}