window.onload = () => {
    print()
}

function print() {
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
    add_str('WEB RTC', 'don\'t forget to block it')
    add_str('Canvas', 'don\'t forget to block it')
    print_geolocation()
}

function print_geolocation() {
    $.getJSON('https://ipinfo.io', (data) => {
        add_str('geolocation and ip', data.country + '<br/>' + data.ip)
    });
}

function get_plugins() {
    let plugins = ''
    for (let i = 0; i < navigator.plugins.length; i++)
        plugins += navigator.plugins[i].name
    return plugins
}