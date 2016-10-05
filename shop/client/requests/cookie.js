function setCookieCart(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var masCookieCart = getMasCookieCart(cname);
    console.log(masCookieCart);
    if (masCookieCart.length!=0) {
        masCookieCart.push(+cvalue);
        var  strCookieCart = masCookieCart.join(' ').trim();
        document.cookie = cname + "=[" + strCookieCart + "]; " + expires;
    } else {
        document.cookie = cname + "=[" + cvalue + "]; " + expires;
    }

}
function getSizeCart(cname) {
    return getMasCookieCart(cname).length;
}

function getMasCookieCart(cname) {
    var cookieCard = document.cookie;
    var result = cookieCard.match(/cart=\[([\d ]+)\]/i);
    if (result && result.length == 2) {
        if(result[1].indexOf(''))
            console.log(result[1].trim().split(' '));
        return result[1].trim().split(' ');
    } else {
        return [];
    }
}