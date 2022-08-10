

function init() {
    let buttons = document.querySelectorAll(".buttons button")
    for (let bnt of buttons){
        bnt.addEventListener("click", function() {
            let prefix = bnt.getAttribute("rel");
            let name = document.querySelectorAll(".select > div:first-child")
            for (let t of name){
                let h = `Cà phê phin ${prefix} nóng`
            }
        })
    }
}