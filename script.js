function black(){
    var b = ["pink", "blue", "orange", "yellow", "purple"]
    var colorIndex = Math.floor(Math.random() * b.length)
    var a = document.getElementById("background")
    a.style.backgroundColor= b[colorIndex]
}

