function init() {
    let m = document.getElementById("mainImg1");

    let buttons = document.querySelectorAll(".buttons > input")
    for (let bnt of buttons){
        bnt.addEventListener("click", function() {
            let prefix = bnt.getAttribute("rel");
                m.src=`/bt-giuaky/imgs/circlek/drink2${prefix}.png`
        })
    }
}

