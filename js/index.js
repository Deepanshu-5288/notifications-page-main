var numberOfUnreadMsgs = document.querySelectorAll(".notification-div-unread").length;
var numberOfMsgs = document.querySelectorAll(".notification-div").length;
document.querySelector(".mark-read").addEventListener("click", handleClick);



for(let i= 0; i <numberOfUnreadMsgs; i++){
    document.querySelectorAll(".notification-div-unread")[i].addEventListener("click", () =>{
        document.querySelectorAll(".notification-div")[i].classList.remove("notification-div-unread");
        document.querySelectorAll(".unread-dot")[i].classList.add("unread-dot-hide");
        changeNumber();
    });
}

function changeNumber(){
    var num = document.querySelectorAll(".notification-div-unread").length;
    document.querySelector(".number").innerText = num;
}



function handleClick(){
    for(let i=0; i< numberOfMsgs;i++){
        document.querySelectorAll(".notification-div")[i].classList.remove("notification-div-unread");
        document.querySelectorAll(".unread-dot")[i].classList.add("unread-dot-hide");
        changeNumber();
    }
    

}

