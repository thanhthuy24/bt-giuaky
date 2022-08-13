function init() {
   let m = document.getElementById("mainImg1");
    let buttons = document.querySelectorAll(".bnt1 > input")
    for (let bnt of buttons){
        bnt.addEventListener("click", function() {
            let prefix = bnt.getAttribute("rel");
                m.src=`/bt-giuaky/imgs/circlek/drink2${prefix}.png`
        })
    }

    let m1 = document.getElementById("mainImg2");
    let buttons1 = document.querySelectorAll(".bnt2 > input")
    for (let bnt1 of buttons1){
        bnt1.addEventListener("click", function() {
            let prefix1 = bnt1.getAttribute("rel");
                m1.src=`/bt-giuaky/imgs/circlek/drink3${prefix1}.png`
        })
    }

    let m2 = document.getElementById("mainImg3");
    let buttons2 = document.querySelectorAll(".bnt3 > input")
    for (let bnt2 of buttons2){
        bnt2.addEventListener("click", function() {
            let prefix2 = bnt2.getAttribute("rel");
                m2.src=`/bt-giuaky/imgs/circlek/drink4${prefix2}.png`
        })
    }

    let m3 = document.getElementById("mainImg4");
    let buttons3 = document.querySelectorAll(".bnt4 > input")
    for (let bnt3 of buttons3){
        bnt3.addEventListener("click", function() {
            let prefix3 = bnt3.getAttribute("rel");
                m3.src=`/bt-giuaky/imgs/circlek/drink6${prefix3}.png`
        })
    }

    $(document).ready(function(){
        $("#cmt").click(function(){
            alert("Đã thêm vào cửa hảng yêu thích của bạn!")
            $("#cmt").addClass("cmt")
        })
    })

    $(document).ready(function(){
        $(".close").click(function(){
            $("div.popup").hide();
        })
    })

    $(document).ready(function(){
        $("span.add-to-cart").click(function(){
            $(".confirm-box").show();
        })
    })

}

