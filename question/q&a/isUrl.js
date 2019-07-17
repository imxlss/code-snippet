/**
 * @todo 判断是否是一个正确的网址
 */

function isUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}