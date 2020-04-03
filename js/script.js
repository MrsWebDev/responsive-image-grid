function change_bg_black(btn) {
    var bg_color = document.getElementById("wrapper");
    bg_color.style.backgroundColor = "black";
    bg_color.style.color = "white"; 

    reset_active("color-button");
    btn.classList.add("active");
}

function change_bg_white(btn) {
    var bg_color = document.getElementById("wrapper");
    bg_color.style.backgroundColor = "white";
    bg_color.style.color = "black";

    reset_active("color-button");
    btn.classList.add("active");
}

// declare a loop variable i
var i;

function change_cln_narrow(btn) {
    document.getElementById("row").style.padding = "0 2px";

    var cln_wide = document.getElementsByClassName("column");
    for (i = 0; i < cln_wide.length; i++) {
    cln_wide[i].style.padding = "0 2px";
    }

    var cln_img = document.getElementsByTagName("img");
    for (i = 0; i < cln_img.length; i++) {
    cln_img[i].style.marginTop = "4px";
    } 

    reset_active("size-button");
    btn.classList.add("active");
}

function change_cln_middle(btn) {
    document.getElementById("row").style.padding = "0 10px";

    var cln_wide = document.getElementsByClassName("column");
    for (i = 0; i < cln_wide.length; i++) {
    cln_wide[i].style.padding = "0 10px";
    }

    var cln_img = document.getElementsByTagName("img");
    for (i = 0; i < cln_img.length; i++) {
    cln_img[i].style.marginTop = "20px";
    } 

    reset_active("size-button");
    btn.classList.add("active");
}

function change_cln_wide(btn) {
    document.getElementById("row").style.padding = "0 20px";

    var cln_wide = document.getElementsByClassName("column");
    for (i = 0; i < cln_wide.length; i++) {
    cln_wide[i].style.padding = "0 20px";
    }

    var cln_img = document.getElementsByTagName("img");
    for (i = 0; i < cln_img.length; i++) {
    cln_img[i].style.marginTop = "40px";
    } 

    reset_active("size-button");
    btn.classList.add("active");
}

function reset_active(requestedClassName) {
    var buttons = document.getElementsByClassName(requestedClassName);

    // Remove .active class
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
    };
}