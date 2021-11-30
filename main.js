var mouseEvent="";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x;
var last_position_of_y;
canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    color = document.getElementById("select_color").value;
    line_width = document.getElementById("select_width").value;
    radius = document.getElementById("select_radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    color = document.getElementById("select_color").value;
    line_width = document.getElementById("select_width").value;
    radius = document.getElementById("select_radius").value;
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    color = document.getElementById("select_color").value;
    line_width = document.getElementById("select_width").value;
    radius = document.getElementById("select_radius").value;
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    current_positionx = e.clientX - canvas.offsetLeft;
    current_positiony = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color
        ctx.lineWidth=line_width;
        ctx.arc(current_positionx,current_positiony,radius,0,2*Math.PI);
        console.log("lastx = "+last_position_of_x+"lasty = "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("currentx = "+current_positionx+"currenty = "+current_positiony);
        ctx.stroke();
    }
    last_position_of_x=current_positionx;
    last_position_of_y=current_positiony;
}