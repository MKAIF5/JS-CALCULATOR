function clk(e) {
    document.getElementById("textPerform").innerHTML += e
}


function clr() {
    document.getElementById("textPerform").innerHTML = " "

}

function eql() {
    let a = document.getElementById("textPerform")
    a.innerHTML = eval(a.innerHTML)
}