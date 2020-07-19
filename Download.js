
let mouseX;
let mouseY;
let width;
let height;
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");
var foodType;
var spawnpadType;
var ws;
var msgpack5 = msgpack;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};
document.msgpack = msgpack;
function n() {
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array();
    this.type = 0
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function (m) {
    if (!ws) {
        document.ws = this;
        ws = this;
        socketFound(this)
    }
    this.oldSend(m)
};
function socketFound(socket) {
    socket.addEventListener("message", function (message) {
        handleMessage(message)
    })
}
function handleMessage(m) {
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if (temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array) {
            data = data
        }
    } else {
        data = temp
    }
    let item = data[0];
    if (!data) {
        return
    }
    if (item === "io-init") {
        let cvs = document.getElementById("gameCanvas");
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function () {
            width = cvs.clientWidth;
            height = cvs.clientHeight
        });
        cvs.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY
        })
    }
    if (item == "1" && myPlayer.id == null) {
        myPlayer.id = data[1]
    }
    if (item == "33") {
        for (let i = 0; i < data[1].length / 13; i += 1) {
            let playerInfo = data[1].slice(13 * i, 13 * i + 13);
            if (playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11]
            }
        }
    }
    if (item == "h" && data[1] == myPlayer.id) {
        if (data[2] < 100 && data[2] > 0) {
            setTimeout(() => {
                place(foodType, null)
                place(foodType)
                place(foodType)
            }, 130)
        }
    }
    update()
}
function doNewSend(sender) {
    ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))))
}
function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]])
}
function isElementVisible(e) {
    return e.offsetParent !== null
}
function update() {
    for (let i = 16; i < 19; i += 1) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            foodType = i - 16
        }
    }
    spawnpadType = 36
}
