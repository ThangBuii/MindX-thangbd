function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây
    button.addEventListener("click",function () {
        button.innerHTML = "Tôi giàu sau khi học lập trình tại Mindx";
    })

    nope.addEventListener("mouseover",function () {
        nope.style.backgroundColor = "#ff0000";
        nope.style.color = "#ffffff"
    })

    nope.addEventListener("mouseout",function () {
        nope.style.backgroundColor = "";
        nope.style.color = "";
    })

    nope.addEventListener("click",function () {
        if(confirm("Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?") == true){
            nope.innerHTML = "Toi rat tiec";
        }else{
            nope.innerHTML = "Ban giau co";
        }
    })
    
}

window.addEventListener("load", init);
// load Event là 