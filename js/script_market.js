let rand = ['1', '2', '3','4','5','6', '7', '8','9','10','11', '12', '13','14','15']

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

        $(".close").click(function(){
            $("div.popup").hide();
        })

        $("span.add-to-cart").click(function(){
            $(".confirm-box").show();
        })

        /*chọn giỏ hàng sẽ hiện lên page confirm*/

        $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15").click(function(){
            $("div.page-confirm").show();
        })

        $("#16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28, #29, #30").click(function(){
            $("div.page-confirm").show();
        })

        $("#arrow").click(function(){
            $("div.page-confirm").hide();
        })

        /*chọn đường, đá*/
        $("div.selection-suga div").click(function(){
            $("div.selection-suga div").removeClass("afterClick")
            $(this).addClass("afterClick");
        })

        $("div.selection-ice div").click(function(){
            $("div.selection-ice div").removeClass("afterClick")
            $(this).addClass("afterClick");
        })

        /*chọn mỗi giỏ hàng, đổi ảnh đại diện sản phẩm đó*/

        $(".add-to-cart > i").click(function(){
            let m = document.getElementById("mainImg1");
            let buttons = document.querySelectorAll(".bnt1 > input")
            for (let bnt of buttons){
                bnt.addEventListener("click", function() {
                    let prefix = bnt.getAttribute("rel");
                        m.src=`/bt-giuaky/imgs/circlek/drink2${prefix}.png`
                        $("#title-img").attr("src", m.src);
                })
            }
         });

         $(".add-to-cart > i").click(function(){
            let m1 = document.getElementById("mainImg2");
            let buttons1 = document.querySelectorAll(".bnt2 > input")
            for (let bnt1 of buttons1){
                bnt1.addEventListener("click", function() {
                    let prefix1 = bnt1.getAttribute("rel");
                        m1.src=`/bt-giuaky/imgs/circlek/drink3${prefix1}.png`
                        $("#title-img").attr("src", m1.src);
                })
            }
         });

         $(".add-to-cart > i").click(function(){
            let m2 = document.getElementById("mainImg3");
            let buttons2 = document.querySelectorAll(".bnt3 > input")
            for (let bnt2 of buttons2){
                bnt2.addEventListener("click", function() {
                    let prefix2 = bnt2.getAttribute("rel");
                        m2.src=`/bt-giuaky/imgs/circlek/drink4${prefix2}.png`
                        $("#title-img").attr("src", m2.src);
                })
            }
         });

         $(".add-to-cart > i").click(function(){
            let m3 = document.getElementById("mainImg4");
    let buttons3 = document.querySelectorAll(".bnt4 > input")
    for (let bnt3 of buttons3){
        bnt3.addEventListener("click", function() {
            let prefix3 = bnt3.getAttribute("rel");
                m3.src=`/bt-giuaky/imgs/circlek/drink6${prefix3}.png`
                        $("#title-img").attr("src", m3.src);
                })
            }
         });

    })
}

