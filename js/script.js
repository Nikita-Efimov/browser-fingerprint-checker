window.onload = setTimeout(() => {
    var user = detect.parse(navigator.userAgent);

    add_str('browser', user.browser.family + ' ' + user.browser.version)
    add_str('os', user.os.name)
    add_str('device type', user.device.type)
    add_str('manufacturer', user.device.manufacturer)
}, 500)
