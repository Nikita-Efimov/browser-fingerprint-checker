var user = detect.parse(navigator.userAgent);

  // user.browser.version
  // user.os.name

document.getElementById('user-agent-cont').innerHTML = user.browser.family + ' ' + user.browser.version + ' ' + user.os.name
