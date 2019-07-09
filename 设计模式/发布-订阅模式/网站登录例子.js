$.ajax('http:xxx.com', function (data) {
    login.trigger('loginSucc', data);
})

let header = (function () {
    login.listen('loginSucc', function (data) {
        header.setAvatar(data.avatar);
    })

    return {
        setAvatar: function (avatar) {
            console.log('设置头像');
        }
    }
})()


let nav = (function () {
    login.listen('loginSucc', function (data) {
        nav.setAvatar(data.avatar);
    })

    return {
        setAvatar: function (avatar) {
            console.log('设置头像');
        }
    }
})()


/* 使用发布-订阅模式。降低登录模块和其他模块的耦合性 */

/* 如果再在增加一个address模块，只要订阅登录成功事件即可 */

let address = (function () {
    login.listen('loginSucc', function (data) {
        address.refresh(data);
    })

    return {
        refresh: function (data) {
            console.log('登录成功');
        }
    }
})()