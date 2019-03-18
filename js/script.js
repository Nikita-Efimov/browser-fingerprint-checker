window.onload = setTimeout(() => {
    let user = detect.parse(navigator.userAgent);

    add_str('browser', user.browser.family + ' ' + user.browser.version)
    add_str('os', user.os.name)
    add_str('manufacturer', user.device.manufacturer)
    add_str('device type', user.device.type)
    add_str('language', navigator.language)
    add_str('platform', navigator.platform)
    add_str('are cookies enabled?', navigator.cookieEnabled)
    add_str('resolution', screen.width + 'x' + screen.height + 'x' + screen.pixelDepth)
    add_str('timezone', 'GMT' + new Date().getTimezoneOffset() / 60)
    add_str('plugins', get_plugins())
}, 200)

function get_plugins() {
    let plugins = ''
    for (let i = 0; i < navigator.plugins.length; i++)
        plugins += navigator.plugins[i].name
    return plugins
}
