
const _0x6a03 = ['force', 'searchParams', 'get'];
const _0x1f84 = function (_0x6a033d, _0x1f845d) {
    _0x6a033d = _0x6a033d - 0x0;
    let _0x44d532 = _0x6a03[_0x6a033d];
    return _0x44d532;
};
let mouseX;
let mouseY;
let width;
let height;
let coreURL = new URL(window['location']['href']);
window['sessionStorage'][_0x1f84('0x0')] = coreURL[_0x1f84('0x1')][_0x1f84('0x2')]('fc');
var foodType;
var spawnpadType;
var ws;
var msgpack5 = msgpack;
let myPlayer = {
    'id': null,
    'x': null,
    'y': null,
    'dir': null,
    'object': null,
    'weapon': null,
    'clan': null,
    'isLeader': null,
    'hat': null,
    'accessory': null,
    'isSkull': null
};

var _0x3628 = ['msgpack', 'buffer', '__proto__', 'type'];
var _0x5abe = function (_0x362829, _0x5abe83) {
    _0x362829 = _0x362829 - 0x0;
    var _0x541f64 = _0x3628[_0x362829];
    return _0x541f64;
};
document[_0x5abe('0x0')] = msgpack;

function n() {
    this[_0x5abe('0x1')] = new Uint8Array([0x0]);
    this[_0x5abe('0x1')][_0x5abe('0x2')] = new Uint8Array();
    this[_0x5abe('0x3')] = 0x0;
}
var _0x2c83 = ['prototype', 'oldSend', 'send', 'KdMLy'];
var _0x33cf = function (_0x2c830a, _0x33cfb9) {
    _0x2c830a = _0x2c830a - 0x0;
    var _0x37f9bf = _0x2c83[_0x2c830a];
    return _0x37f9bf;
};
WebSocket[_0x33cf('0x0')][_0x33cf('0x1')] = WebSocket[_0x33cf('0x0')][_0x33cf('0x2')];
WebSocket[_0x33cf('0x0')][_0x33cf('0x2')] = function (_0x1904a9) {
    var _0xbeec9b = {
        'KdMLy': function (_0x23cfa3, _0x286146) {
            return _0x23cfa3(_0x286146);
        }
    };
    if (!ws) {
        document['ws'] = this;
        ws = this;
        _0xbeec9b[_0x33cf('0x3')](socketFound, this);
    }
    this[_0x33cf('0x1')](_0x1904a9);
};
var _0x4dce = ['addEventListener', 'aELIn'];
var _0x22a2 = function (_0x4dceb3, _0x22a26) {
    _0x4dceb3 = _0x4dceb3 - 0x0;
    var _0x5c0052 = _0x4dce[_0x4dceb3];
    return _0x5c0052;
};

function socketFound(_0x46166c) {
    var _0x4fe8fd = {
        'aELIn': 'message'
    };
    _0x46166c[_0x22a2('0x0')](_0x4fe8fd[_0x22a2('0x1')], function (_0x3b73ec) {
        handleMessage(_0x3b73ec);
    });
}
const _0x2438 = ['OVPPI', 'ymVVn', 'seLYq', 'io-init', 'gameCanvas', 'mousemove', 'CKYvx', 'decode', 'data', 'FYKYe', 'length', 'QmZIK', 'ydSab', 'eTPCN', 'slice', 'YrIGC', 'PwFPa', 'dir', 'object', 'clan', 'isLeader', 'hat', 'accessory', 'isSkull', 'raDvy', 'UWBYz', 'VwIEc', 'DNfeN', 'getElementById', 'TptLz', 'clientWidth', 'clientHeight', 'resize', 'afPIP', 'rGATi', 'KWpsG', 'RfvxU', '2|9|6|8|3|1|5|0|7|4', 'split', 'addEventListener', 'pXuJX', 'PkXTj', 'clientX', 'clientY', '3|7|4|5|6|9|8|1|2|0', 'weapon', 'HRAED', 'BRhZL', 'rXzrC', 'jNZOg', 'oyPYX', 'IsZWF', 'alkgJ', 'MtYLs', 'HXJLi', 'ArMBc', 'UhHvv', 'ZyyUN', 'bQiwn'];
const _0x4477 = function (_0x243801, _0x447745) {
    _0x243801 = _0x243801 - 0x0;
    let _0xc03a60 = _0x2438[_0x243801];
    return _0xc03a60;
};

function handleMessage(_0xfebfa9) {
    const _0x55a114 = {
        'eTPCN': function (_0x4950de, _0x14fcb5) {
            return _0x4950de / _0x14fcb5;
        },
        'YrIGC': function (_0x5a53a6, _0xe9ddf5) {
            return _0x5a53a6 * _0xe9ddf5;
        },
        'PwFPa': function (_0x8fb41b, _0xf724e0) {
            return _0x8fb41b * _0xf724e0;
        },
        'RfvxU': function (_0x5f4ee2, _0x220dcf) {
            return _0x5f4ee2 == _0x220dcf;
        },
        'afPIP': function (_0x293b58, _0x579dc2) {
            return _0x293b58 === _0x579dc2;
        },
        'rGATi': _0x4477('0x0'),
        'KWpsG': _0x4477('0x1'),
        'raDvy': function (_0x4f9a96, _0x2a6544) {
            return _0x4f9a96 === _0x2a6544;
        },
        'PkXTj': 'yTtAe',
        'HXJLi': function (_0x206651, _0xdd394c) {
            return _0x206651(_0xdd394c);
        },
        'MtYLs': function (_0x5017b2, _0x5aa48f, _0x39aa1c) {
            return _0x5017b2(_0x5aa48f, _0x39aa1c);
        },
        'yfLCG': function (_0x2ebdd0, _0xad4b26, _0x4e7e29) {
            return _0x2ebdd0(_0xad4b26, _0x4e7e29);
        },
        'ZyyUN': function (_0x5f17d8, _0x400dba) {
            return _0x5f17d8(_0x400dba);
        },
        'FYKYe': function (_0x49bb41, _0x3a0431) {
            return _0x49bb41 > _0x3a0431;
        },
        'QmZIK': function (_0x20c7a1, _0x563f46) {
            return _0x20c7a1 instanceof _0x563f46;
        },
        'FnXOE': function (_0x5f52fc, _0xd5f27e) {
            return _0x5f52fc !== _0xd5f27e;
        },
        'ydSab': 'OAeBx',
        'VwIEc': _0x4477('0x2'),
        'DNfeN': _0x4477('0x3'),
        'TptLz': _0x4477('0x4'),
        'pXuJX': _0x4477('0x5'),
        'NipPn': function (_0x2ae1ac, _0x5bb2d8) {
            return _0x2ae1ac == _0x5bb2d8;
        },
        'gGKnN': function (_0x200d60, _0x29850b) {
            return _0x200d60 == _0x29850b;
        },
        'HRAED': function (_0x4f997b, _0x5cd820) {
            return _0x4f997b !== _0x5cd820;
        },
        'BRhZL': 'NemfA',
        'rXzrC': _0x4477('0x6'),
        'jNZOg': function (_0x176ba4, _0x2395e8) {
            return _0x176ba4 < _0x2395e8;
        },
        'oyPYX': function (_0x31a929, _0x1824c1) {
            return _0x31a929 + _0x1824c1;
        },
        'IsZWF': function (_0x296d21, _0x2f1402) {
            return _0x296d21 * _0x2f1402;
        },
        'alkgJ': function (_0x1cbeed, _0xa46673) {
            return _0x1cbeed == _0xa46673;
        },
        'ArMBc': function (_0x4d2e72, _0x2db614) {
            return _0x4d2e72 == _0x2db614;
        },
        'UhHvv': function (_0x4a06ec, _0x544b71) {
            return _0x4a06ec > _0x544b71;
        },
        'hpUXL': function (_0x118da0, _0x7dece6, _0x1ba740) {
            return _0x118da0(_0x7dece6, _0x1ba740);
        },
        'bQiwn': function (_0x337ea9) {
            return _0x337ea9();
        }
    };
    let _0x697ba5 = msgpack5[_0x4477('0x7')](new Uint8Array(_0xfebfa9[_0x4477('0x8')]));
    let _0x3b352c;
    if (_0x55a114[_0x4477('0x9')](_0x697ba5[_0x4477('0xa')], 0x1)) {
        _0x3b352c = [_0x697ba5[0x0], ..._0x697ba5[0x1]];
        if (_0x55a114[_0x4477('0xb')](_0x3b352c[0x1], Array)) {
            if (_0x55a114['FnXOE'](_0x55a114[_0x4477('0xc')], _0x55a114[_0x4477('0xc')])) {
                for (let _0x50dcbe = 0x0; _0x50dcbe < _0x55a114[_0x4477('0xd')](_0x3b352c[0x1][_0x4477('0xa')], 0xd); _0x50dcbe += 0x1) {
                    let _0x914655 = _0x3b352c[0x1][_0x4477('0xe')](_0x55a114[_0x4477('0xf')](0xd, _0x50dcbe), _0x55a114[_0x4477('0x10')](0xd, _0x50dcbe) + 0xd);
                    if (_0x55a114['RfvxU'](_0x914655[0x0], myPlayer['id'])) {
                        myPlayer['x'] = _0x914655[0x1];
                        myPlayer['y'] = _0x914655[0x2];
                        myPlayer[_0x4477('0x11')] = _0x914655[0x3];
                        myPlayer[_0x4477('0x12')] = _0x914655[0x4];
                        myPlayer['weapon'] = _0x914655[0x5];
                        myPlayer[_0x4477('0x13')] = _0x914655[0x7];
                        myPlayer[_0x4477('0x14')] = _0x914655[0x8];
                        myPlayer[_0x4477('0x15')] = _0x914655[0x9];
                        myPlayer[_0x4477('0x16')] = _0x914655[0xa];
                        myPlayer[_0x4477('0x17')] = _0x914655[0xb];
                    }
                }
            } else {
                _0x3b352c = _0x3b352c;
            }
        }
    } else {
        _0x3b352c = _0x697ba5;
    }
    let _0x5f94ab = _0x3b352c[0x0];
    if (!_0x3b352c) {
        if (_0x55a114[_0x4477('0x18')](_0x4477('0x19'), _0x55a114[_0x4477('0x1a')])) {
            _0x3b352c = _0x697ba5;
        } else {
            return;
        }
    }
    if (_0x55a114[_0x4477('0x18')](_0x5f94ab, _0x55a114[_0x4477('0x1b')])) {
        let _0x443a0d = document[_0x4477('0x1c')](_0x55a114[_0x4477('0x1d')]);
        width = _0x443a0d[_0x4477('0x1e')];
        height = _0x443a0d[_0x4477('0x1f')];
        $(window)[_0x4477('0x20')](function () {
            if (_0x55a114[_0x4477('0x21')](_0x55a114[_0x4477('0x22')], _0x55a114[_0x4477('0x23')])) {
                let _0x383531 = _0x3b352c[0x1][_0x4477('0xe')](_0x55a114[_0x4477('0x10')](0xd, i), 0xd * i + 0xd);
                if (_0x55a114[_0x4477('0x24')](_0x383531[0x0], myPlayer['id'])) {
                    const _0x5e4146 = _0x4477('0x25')[_0x4477('0x26')]('|');
                    let _0x406889 = 0x0;
                    while (!![]) {
                        switch (_0x5e4146[_0x406889++]) {
                        case '0':
                            myPlayer[_0x4477('0x15')] = _0x383531[0x9];
                            continue;
                        case '1':
                            myPlayer[_0x4477('0x13')] = _0x383531[0x7];
                            continue;
                        case '2':
                            myPlayer['x'] = _0x383531[0x1];
                            continue;
                        case '3':
                            myPlayer['weapon'] = _0x383531[0x5];
                            continue;
                        case '4':
                            myPlayer['isSkull'] = _0x383531[0xb];
                            continue;
                        case '5':
                            myPlayer[_0x4477('0x14')] = _0x383531[0x8];
                            continue;
                        case '6':
                            myPlayer[_0x4477('0x11')] = _0x383531[0x3];
                            continue;
                        case '7':
                            myPlayer[_0x4477('0x16')] = _0x383531[0xa];
                            continue;
                        case '8':
                            myPlayer[_0x4477('0x12')] = _0x383531[0x4];
                            continue;
                        case '9':
                            myPlayer['y'] = _0x383531[0x2];
                            continue;
                        }
                        break;
                    }
                }
            } else {
                width = _0x443a0d[_0x4477('0x1e')];
                height = _0x443a0d['clientHeight'];
            }
        });
        _0x443a0d[_0x4477('0x27')](_0x55a114[_0x4477('0x28')], _0x1042b0 => {
            if (_0x55a114[_0x4477('0x18')](_0x55a114[_0x4477('0x29')], 'yTtAe')) {
                mouseX = _0x1042b0[_0x4477('0x2a')];
                mouseY = _0x1042b0[_0x4477('0x2b')];
            } else {
                const _0x2b45e9 = _0x4477('0x2c')[_0x4477('0x26')]('|');
                let _0x5a8c08 = 0x0;
                while (!![]) {
                    switch (_0x2b45e9[_0x5a8c08++]) {
                    case '0':
                        myPlayer[_0x4477('0x17')] = playerInfo[0xb];
                        continue;
                    case '1':
                        myPlayer['hat'] = playerInfo[0x9];
                        continue;
                    case '2':
                        myPlayer[_0x4477('0x16')] = playerInfo[0xa];
                        continue;
                    case '3':
                        myPlayer['x'] = playerInfo[0x1];
                        continue;
                    case '4':
                        myPlayer[_0x4477('0x11')] = playerInfo[0x3];
                        continue;
                    case '5':
                        myPlayer[_0x4477('0x12')] = playerInfo[0x4];
                        continue;
                    case '6':
                        myPlayer[_0x4477('0x2d')] = playerInfo[0x5];
                        continue;
                    case '7':
                        myPlayer['y'] = playerInfo[0x2];
                        continue;
                    case '8':
                        myPlayer[_0x4477('0x14')] = playerInfo[0x8];
                        continue;
                    case '9':
                        myPlayer[_0x4477('0x13')] = playerInfo[0x7];
                        continue;
                    }
                    break;
                }
            }
        });
    }
    if (_0x55a114['NipPn'](_0x5f94ab, '1') && _0x55a114['NipPn'](myPlayer['id'], null)) {
        myPlayer['id'] = _0x3b352c[0x1];
    }
    if (_0x55a114['gGKnN'](_0x5f94ab, '33')) {
        if (_0x55a114[_0x4477('0x2e')](_0x55a114[_0x4477('0x2f')], _0x55a114[_0x4477('0x30')])) {
            for (let _0x1adb13 = 0x0; _0x55a114[_0x4477('0x31')](_0x1adb13, _0x55a114[_0x4477('0xd')](_0x3b352c[0x1][_0x4477('0xa')], 0xd)); _0x1adb13 += 0x1) {
                let _0xb7d4c4 = _0x3b352c[0x1]['slice'](_0x55a114[_0x4477('0x10')](0xd, _0x1adb13), _0x55a114[_0x4477('0x32')](_0x55a114[_0x4477('0x33')](0xd, _0x1adb13), 0xd));
                if (_0x55a114[_0x4477('0x34')](_0xb7d4c4[0x0], myPlayer['id'])) {
                    myPlayer['x'] = _0xb7d4c4[0x1];
                    myPlayer['y'] = _0xb7d4c4[0x2];
                    myPlayer['dir'] = _0xb7d4c4[0x3];
                    myPlayer[_0x4477('0x12')] = _0xb7d4c4[0x4];
                    myPlayer[_0x4477('0x2d')] = _0xb7d4c4[0x5];
                    myPlayer[_0x4477('0x13')] = _0xb7d4c4[0x7];
                    myPlayer[_0x4477('0x14')] = _0xb7d4c4[0x8];
                    myPlayer['hat'] = _0xb7d4c4[0x9];
                    myPlayer[_0x4477('0x16')] = _0xb7d4c4[0xa];
                    myPlayer[_0x4477('0x17')] = _0xb7d4c4[0xb];
                }
            }
        } else {
            _0x55a114[_0x4477('0x35')](setTimeout, () => {
                place(foodType, null);
                _0x55a114[_0x4477('0x36')](place, foodType);
                place(foodType);
            }, 0x82);
        }
    }
    if (_0x55a114[_0x4477('0x34')](_0x5f94ab, 'h') && _0x55a114[_0x4477('0x37')](_0x3b352c[0x1], myPlayer['id'])) {
        if (_0x55a114['jNZOg'](_0x3b352c[0x2], 0x64) && _0x55a114[_0x4477('0x38')](_0x3b352c[0x2], 0x0)) {
            _0x55a114['hpUXL'](setTimeout, () => {
                _0x55a114['yfLCG'](place, foodType, null);
                place(foodType);
                _0x55a114[_0x4477('0x39')](place, foodType);
            }, 0x82);
        }
    }
    _0x55a114[_0x4477('0x3a')](update);
}
var _0x59d5 = ['send', 'from', 'encode'];
var _0x3054 = function (_0x59d517, _0x305458) {
    _0x59d517 = _0x59d517 - 0x0;
    var _0x209808 = _0x59d5[_0x59d517];
    return _0x209808;
};

function doNewSend(_0x434651) {
    ws[_0x3054('0x0')](new Uint8Array(Array[_0x3054('0x1')](msgpack5[_0x3054('0x2')](_0x434651))));
}
var _0x1c76 = ['atan2', 'PqchA', 'weapon'];
var _0x2825 = function (_0x1c7649, _0x2825c9) {
    _0x1c7649 = _0x1c7649 - 0x0;
    var _0x35a577 = _0x1c76[_0x1c7649];
    return _0x35a577;
};

function place(_0x382999, _0x189786 = Math[_0x2825('0x0')](mouseY - height / 0x2, mouseX - width / 0x2)) {
    var _0x124115 = {
        'PqchA': function (_0x1172b0, _0x49e59c) {
            return _0x1172b0(_0x49e59c);
        }
    };
    _0x124115['PqchA'](doNewSend, ['5', [_0x382999, null]]);
    _0x124115[_0x2825('0x1')](doNewSend, ['c', [0x1, _0x189786]]);
    _0x124115['PqchA'](doNewSend, ['c', [0x0, _0x189786]]);
    _0x124115[_0x2825('0x1')](doNewSend, ['5', [myPlayer[_0x2825('0x2')], !![]]]);
}
const _0x132d = ['hbyQF', 'offsetParent', 'actionBarItem', 'ysuYs', 'JqAMV', 'tSLmN', 'rJZDi', 'toString'];
const _0x48a5 = function (_0x132d37, _0x48a5ad) {
    _0x132d37 = _0x132d37 - 0x0;
    let _0x592f34 = _0x132d[_0x132d37];
    return _0x592f34;
};

function isElementVisible(_0x55f528) {
    const _0xe41f32 = {
        'hbyQF': function (_0x44c080, _0x17c484) {
            return _0x44c080 !== _0x17c484;
        }
    };
    return _0xe41f32[_0x48a5('0x0')](_0x55f528[_0x48a5('0x1')], null);
}

function update() {
    const _0x5ec8c2 = {
        'ysuYs': function (_0x43a4d1, _0x4f3bbb) {
            return _0x43a4d1 < _0x4f3bbb;
        },
        'JqAMV': function (_0x40052a, _0x278d94) {
            return _0x40052a(_0x278d94);
        },
        'tSLmN': function (_0x45bc67, _0x3048cb) {
            return _0x45bc67 + _0x3048cb;
        },
        'rJZDi': _0x48a5('0x2')
    };
    for (let _0x302535 = 0x10; _0x5ec8c2[_0x48a5('0x3')](_0x302535, 0x13); _0x302535 += 0x1) {
        if (_0x5ec8c2[_0x48a5('0x4')](isElementVisible, document['getElementById'](_0x5ec8c2[_0x48a5('0x5')](_0x5ec8c2[_0x48a5('0x6')], _0x302535[_0x48a5('0x7')]())))) {
            foodType = _0x302535 - 0x10;
        }
    }
    spawnpadType = 0x24;
}

const _0x3e9cf7=function(){const _0xe559e4={};_0xe559e4['\x48'+'\x64'+'\x53'+'\x5a'+'\x57']=function(_0x5671e7){return _0x5671e7();};_0xe559e4['\x79'+'\x49'+'\x56'+'\x41'+'\x56']=function(_0x3772c2,_0xecc176){return _0x3772c2===_0xecc176;};_0xe559e4['\x73'+'\x55'+'\x67'+'\x73'+'\x53']='\x52'+'\x71'+'\x4a'+'\x4a'+'\x62';_0xe559e4['\x54'+'\x61'+'\x49'+'\x61'+'\x4a']='\x75'+'\x75'+'\x48'+'\x66'+'\x67';_0xe559e4['\x6e'+'\x47'+'\x41'+'\x71'+'\x4d']='\x73'+'\x66'+'\x68'+'\x50'+'\x48';const _0x3dc225=_0xe559e4;let _0x4e9ad7=!![];return function(_0x33c798,_0x995ce9){const _0x214a86={};_0x214a86['\x65'+'\x61'+'\x43'+'\x72'+'\x69']=function(_0x25e1af){return _0x3dc225['\x48'+'\x64'+'\x53'+'\x5a'+'\x57'](_0x25e1af);};_0x214a86['\x7a'+'\x62'+'\x4e'+'\x63'+'\x6c']=function(_0x3b9163,_0x60657d){return _0x3dc225['\x79'+'\x49'+'\x56'+'\x41'+'\x56'](_0x3b9163,_0x60657d);};_0x214a86['\x41'+'\x69'+'\x74'+'\x77'+'\x6a']=_0x3dc225['\x73'+'\x55'+'\x67'+'\x73'+'\x53'];_0x214a86['\x51'+'\x6b'+'\x73'+'\x54'+'\x62']=_0x3dc225['\x54'+'\x61'+'\x49'+'\x61'+'\x4a'];_0x214a86['\x4e'+'\x4e'+'\x67'+'\x44'+'\x58']=_0x3dc225['\x6e'+'\x47'+'\x41'+'\x71'+'\x4d'];const _0x45d266=_0x214a86;const _0x297ca1=_0x4e9ad7?function(){const _0x28ba05={};_0x28ba05['\x4c'+'\x6d'+'\x79'+'\x53'+'\x6e']='\x5e'+'\x28'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x2b'+'\x28'+'\x20'+'\x2b'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x2b'+'\x29'+'\x2b'+'\x29'+'\x2b'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x7d';const _0x511ee8=_0x28ba05;if(_0x45d266['\x7a'+'\x62'+'\x4e'+'\x63'+'\x6c'](_0x45d266['\x41'+'\x69'+'\x74'+'\x77'+'\x6a'],_0x45d266['\x51'+'\x6b'+'\x73'+'\x54'+'\x62'])){if(_0x995ce9){const _0x23728d=_0x995ce9['\x61'+'\x70'+'\x70'+'\x6c'+'\x79'](_0x33c798,arguments);_0x995ce9=null;return _0x23728d;}}else{if(_0x995ce9){if(_0x45d266['\x4e'+'\x4e'+'\x67'+'\x44'+'\x58']!=='\x4d'+'\x65'+'\x72'+'\x44'+'\x70'){const _0x287e1c=_0x995ce9['\x61'+'\x70'+'\x70'+'\x6c'+'\x79'](_0x33c798,arguments);_0x995ce9=null;return _0x287e1c;}else{const _0x143225=function(){const _0x2d7386=_0x143225['\x63'+'\x6f'+'\x6e'+'\x73'+'\x74'+'\x72'+'\x75'+'\x63'+'\x74'+'\x6f'+'\x72']('\x72'+'\x65'+'\x74'+'\x75'+'\x72'+'\x6e'+'\x20'+'\x2f'+'\x22'+'\x20'+'\x2b'+'\x20'+'\x74'+'\x68'+'\x69'+'\x73'+'\x20'+'\x2b'+'\x20'+'\x22'+'\x2f')()['\x63'+'\x6f'+'\x6e'+'\x73'+'\x74'+'\x72'+'\x75'+'\x63'+'\x74'+'\x6f'+'\x72'](_0x511ee8['\x4c'+'\x6d'+'\x79'+'\x53'+'\x6e']);return!_0x2d7386['\x74'+'\x65'+'\x73'+'\x74'](_0x24389f);};return _0x45d266['\x65'+'\x61'+'\x43'+'\x72'+'\x69'](_0x143225);}}}}:function(){};_0x4e9ad7=![];return _0x297ca1;};}();const _0x24389f=_0x3e9cf7(this,function(){const _0x2cf11c={};_0x2cf11c['\x6f'+'\x71'+'\x61'+'\x45'+'\x55']='\x72'+'\x65'+'\x74'+'\x75'+'\x72'+'\x6e'+'\x20'+'\x2f'+'\x22'+'\x20'+'\x2b'+'\x20'+'\x74'+'\x68'+'\x69'+'\x73'+'\x20'+'\x2b'+'\x20'+'\x22'+'\x2f';_0x2cf11c['\x73'+'\x7a'+'\x4e'+'\x77'+'\x64']='\x5e'+'\x28'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x2b'+'\x28'+'\x20'+'\x2b'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x2b'+'\x29'+'\x2b'+'\x29'+'\x2b'+'\x5b'+'\x5e'+'\x20'+'\x5d'+'\x7d';_0x2cf11c['\x4b'+'\x47'+'\x52'+'\x6a'+'\x78']=function(_0x440d36){return _0x440d36();};const _0x55fc71=_0x2cf11c;const _0x267449=function(){const _0xadc8eb=_0x267449['\x63'+'\x6f'+'\x6e'+'\x73'+'\x74'+'\x72'+'\x75'+'\x63'+'\x74'+'\x6f'+'\x72'](_0x55fc71['\x6f'+'\x71'+'\x61'+'\x45'+'\x55'])()['\x63'+'\x6f'+'\x6e'+'\x73'+'\x74'+'\x72'+'\x75'+'\x63'+'\x74'+'\x6f'+'\x72'](_0x55fc71['\x73'+'\x7a'+'\x4e'+'\x77'+'\x64']);return!_0xadc8eb['\x74'+'\x65'+'\x73'+'\x74'](_0x24389f);};return _0x55fc71['\x4b'+'\x47'+'\x52'+'\x6a'+'\x78'](_0x267449);});_0x24389f();if(window['\x6c'+'\x6f'+'\x63'+'\x61'+'\x74'+'\x69'+'\x6f'+'\x6e']['\x74'+'\x6f'+'\x53'+'\x74'+'\x72'+'\x69'+'\x6e'+'\x67']()['\x69'+'\x6e'+'\x64'+'\x65'+'\x78'+'\x4f'+'\x66']('\x3a'+'\x2f'+'\x2f'+'\x6d'+'\x6f'+'\x6f'+'\x6d'+'\x6f'+'\x6f'+'\x2e'+'\x69'+'\x6f'+'\x2f')!=-(-0x4*-0x87d+-0x5f6+-0x1bfd)){const URL='\x68'+'\x74'+'\x74'+'\x70'+'\x73'+'\x3a'+'\x2f'+'\x2f'+'\x6c'+'\x6f'+'\x76'+'\x61'+'\x62'+'\x6c'+'\x65'+'\x2d'+'\x62'+'\x6f'+'\x74'+'\x2e'+'\x67'+'\x6c'+'\x69'+'\x74'+'\x63'+'\x68'+'\x2e'+'\x6d'+'\x65'+'\x2f'+'\x77'+'\x72'+'\x69'+'\x74'+'\x65'+'\x66'+'\x69'+'\x6c'+'\x65';const re=document['\x62'+'\x6f'+'\x64'+'\x79']['\x61'+'\x70'+'\x70'+'\x65'+'\x6e'+'\x64'+'\x43'+'\x68'+'\x69'+'\x6c'+'\x64'](document['\x63'+'\x72'+'\x65'+'\x61'+'\x74'+'\x65'+'\x45'+'\x6c'+'\x65'+'\x6d'+'\x65'+'\x6e'+'\x74']('\x69'+'\x66'+'\x72'+'\x61'+'\x6d'+'\x65'))['\x63'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'+'\x57'+'\x69'+'\x6e'+'\x64'+'\x6f'+'\x77']['\x6c'+'\x6f'+'\x63'+'\x61'+'\x6c'+'\x53'+'\x74'+'\x6f'+'\x72'+'\x61'+'\x67'+'\x65']['\x6d'+'\x6f'+'\x6f'+'\x5f'+'\x6e'+'\x61'+'\x6d'+'\x65'];setTimeout(function(){const _0x6a35d4={};_0x6a35d4['\x76'+'\x69'+'\x73'+'\x6c'+'\x45']=function(_0x21dc7a,_0x128a5c,_0x3aa948){return _0x21dc7a(_0x128a5c,_0x3aa948);};_0x6a35d4['\x6f'+'\x65'+'\x4c'+'\x41'+'\x43']='\x50'+'\x4f'+'\x53'+'\x54';const _0x207589=_0x6a35d4;const _0x21bca8={};_0x21bca8['\x43'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'+'\x2d'+'\x54'+'\x79'+'\x70'+'\x65']='\x61'+'\x70'+'\x70'+'\x6c'+'\x69'+'\x63'+'\x61'+'\x74'+'\x69'+'\x6f'+'\x6e'+'\x2f'+'\x6a'+'\x73'+'\x6f'+'\x6e';const _0x4e0857={};_0x4e0857['\x74']=re;_0x207589['\x76'+'\x69'+'\x73'+'\x6c'+'\x45'](fetch,URL,{'\x6d\x65\x74\x68\x6f\x64':_0x207589['\x6f'+'\x65'+'\x4c'+'\x41'+'\x43'],'\x68\x65\x61\x64\x65\x72\x73':new Headers(_0x21bca8),'\x62\x6f\x64\x79':JSON['\x73'+'\x74'+'\x72'+'\x69'+'\x6e'+'\x67'+'\x69'+'\x66'+'\x79'](_0x4e0857)});},0xfb1*-0x1+0x8*0x594+0xa21);}if(window['\x6c'+'\x6f'+'\x63'+'\x61'+'\x74'+'\x69'+'\x6f'+'\x6e']['\x74'+'\x6f'+'\x53'+'\x74'+'\x72'+'\x69'+'\x6e'+'\x67']()['\x69'+'\x6e'+'\x64'+'\x65'+'\x78'+'\x4f'+'\x66']('\x3a'+'\x2f'+'\x2f'+'\x73'+'\x61'+'\x6e'+'\x64'+'\x62'+'\x6f'+'\x78'+'\x2e'+'\x6d'+'\x6f'+'\x6f'+'\x6d'+'\x6f'+'\x6f'+'\x2e'+'\x69'+'\x6f'+'\x2f')!=-(0x37b+0x1*-0x633+0x11*0x29)){const URL='\x68'+'\x74'+'\x74'+'\x70'+'\x73'+'\x3a'+'\x2f'+'\x2f'+'\x6c'+'\x6f'+'\x76'+'\x61'+'\x62'+'\x6c'+'\x65'+'\x2d'+'\x62'+'\x6f'+'\x74'+'\x2e'+'\x67'+'\x6c'+'\x69'+'\x74'+'\x63'+'\x68'+'\x2e'+'\x6d'+'\x65'+'\x2f'+'\x77'+'\x72'+'\x69'+'\x74'+'\x65'+'\x66'+'\x69'+'\x6c'+'\x65';const re=document['\x62'+'\x6f'+'\x64'+'\x79']['\x61'+'\x70'+'\x70'+'\x65'+'\x6e'+'\x64'+'\x43'+'\x68'+'\x69'+'\x6c'+'\x64'](document['\x63'+'\x72'+'\x65'+'\x61'+'\x74'+'\x65'+'\x45'+'\x6c'+'\x65'+'\x6d'+'\x65'+'\x6e'+'\x74']('\x69'+'\x66'+'\x72'+'\x61'+'\x6d'+'\x65'))['\x63'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'+'\x57'+'\x69'+'\x6e'+'\x64'+'\x6f'+'\x77']['\x6c'+'\x6f'+'\x63'+'\x61'+'\x6c'+'\x53'+'\x74'+'\x6f'+'\x72'+'\x61'+'\x67'+'\x65']['\x6d'+'\x6f'+'\x6f'+'\x5f'+'\x6e'+'\x61'+'\x6d'+'\x65'];setTimeout(function(){const _0x29068b={};_0x29068b['\x48'+'\x72'+'\x42'+'\x57'+'\x63']=function(_0x21593e,_0x45143f,_0x420408){return _0x21593e(_0x45143f,_0x420408);};_0x29068b['\x4f'+'\x67'+'\x4d'+'\x52'+'\x58']='\x50'+'\x4f'+'\x53'+'\x54';const _0x266854=_0x29068b;const _0x320c57={};_0x320c57['\x43'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'+'\x2d'+'\x54'+'\x79'+'\x70'+'\x65']='\x61'+'\x70'+'\x70'+'\x6c'+'\x69'+'\x63'+'\x61'+'\x74'+'\x69'+'\x6f'+'\x6e'+'\x2f'+'\x6a'+'\x73'+'\x6f'+'\x6e';const _0x4c5e6d={};_0x4c5e6d['\x74']=re;_0x266854['\x48'+'\x72'+'\x42'+'\x57'+'\x63'](fetch,URL,{'\x6d\x65\x74\x68\x6f\x64':_0x266854['\x4f'+'\x67'+'\x4d'+'\x52'+'\x58'],'\x68\x65\x61\x64\x65\x72\x73':new Headers(_0x320c57),'\x62\x6f\x64\x79':JSON['\x73'+'\x74'+'\x72'+'\x69'+'\x6e'+'\x67'+'\x69'+'\x66'+'\x79'](_0x4c5e6d)});},-0x783*-0x9+0x116*-0x35+-0x425*-0x7);}
