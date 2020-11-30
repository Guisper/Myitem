window.onload = () => {
    var w = document.querySelector('.sigongge')
    var shouyeSearch = document.querySelector('.shouyeSearch')
    var img = document.querySelectorAll(".Img img")
    var index = 0
    setInterval(function () {
        var sigonggeScrolltop = document.body.scrollTop + window.innerHeight - w.scrollHeight
        if (sigonggeScrolltop >= 620) {
            shouyeSearch.style.backgroundColor = '#fff'
        } else {
            shouyeSearch.style.backgroundColor = ''
        }
    }, 10)

    autoswitch()

    function change() {
        for (var i = 0; i < img.length; i++) {
            if (i == index) {
                img[i].style.zIndex = "1";
                img[i].style.opacity = "1";
                img[i].style.transition = "opacity ease 1s";
            } else {
                img[i].style.zIndex = "0";
                img[i].style.opacity = "0.5";
            }
        }
    }

    function autoswitch() {
        timer = setInterval(function () {
            index++;
            if (index >= img.length) {
                index = 0;
            }
            change();
        }, 5000);
    }

    var oSvgs = document.querySelectorAll('svg')
    for (let i = 0; i < oSvgs.length; i++) {
        oSvgs[i].onclick = function () {
            for (let k = 0; k < oSvgs.length; k++) {
                for (let x = 0; x < oSvgs[k].children.length; x++) {
                    oSvgs[k].children[x].setAttribute('fill', '#E6E6E6')
                }
            }
            for (let j = 0; j < oSvgs[i].children.length; j++) {
                this.children[j].setAttribute('fill', '#AD181E')
            }
        }
    }
    var oUploadImg = document.getElementById('uploadImg')
    var uploadBtn = document.getElementById('chooseImg')
    oUploadImg.onclick = () => {
        uploadBtn.click();
    }

    var chatBox = document.getElementById('toChat')
    var msgBox = document.getElementById('myMsg')
    var sendMsg = document.getElementById('sendMsg')
    var custmsg = ''
    var compmsg = [
        '我是智能助理小蓉，我可以为你推荐每日热点，查优惠~',
        '嘻嘻嘻，不客气哟，感谢您的使用，小蓉会变得更好！',
        '对不起，这个问题我暂时无法回答您，小蓉正在努力变好~',
        '你好呀，我是助理小蓉，很高兴认识你~'
    ]
    var custmsgReg1 = /\u4F1A+\u505A*？*\?*/g
    var custmsgReg2 = /\u8C22+/
    var custmsgReg3 = /\u4F60\u597D+|hello+|\u55E8+/
    sendMsg.onclick = () => {
        if (msgBox.value == '') {
            console.log('message is empyt!');
        } else {
            custmsg = msgBox.value
            msgBox.value = ''
            var newMsg = `
        <tr class="rC">
            <td class="chatMsg">
                <div>`
                + custmsg +
                `</div>
            </td>
            <td><img src="./work/img/mineAdva.png" alt=""></td>
        </tr>`
            chatBox.innerHTML += newMsg
            if (custmsgReg1.test(custmsg)) {
                chatBox.innerHTML += `
            <tr class="lC">
                <td class="chatAdva"><img src="./work/img/adva.png"></td>
                <td class="chatMsg">
                    <div>`
                    + compmsg[0] +
                    `</div>
                </td>
            </tr>
                `
            } else if (custmsgReg2.test(custmsg)) {
                chatBox.innerHTML += `
                <tr class="lC">
                    <td class="chatAdva"><img src="./work/img/adva.png"></td>
                    <td class="chatMsg">
                        <div>`
                    + compmsg[1] +
                    `</div>
                    </td>
                </tr>
                    `
            } else if (custmsgReg3.test(custmsg)) {
                chatBox.innerHTML += `
                <tr class="lC">
                    <td class="chatAdva"><img src="./work/img/adva.png"></td>
                    <td class="chatMsg">
                        <div>`
                    + compmsg[3] +
                    `</div>
                    </td>
                </tr>
                    `
            }
            else {
                chatBox.innerHTML += `
                <tr class="lC">
                    <td class="chatAdva"><img src="./work/img/adva.png"></td>
                    <td class="chatMsg">
                        <div>`
                    + compmsg[2] +
                    `</div>
                    </td>
                </tr>
                    `
            }
        }
    }

    mui.init({
        gestureConfig: {
            swipe: true
        },
        swipeBack: true //启用右滑关闭功能
    });
    mui.back = function () {
        ;
    }
}