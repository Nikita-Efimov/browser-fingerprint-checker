var user = detect.parse(navigator.userAgent);

  // user.browser.version
  // user.os.name

document.getElementById('user-agent-browser').innerHTML = user.browser.family + ' ' + user.browser.version
document.getElementById('user-agent-os').innerHTML = user.os.name
