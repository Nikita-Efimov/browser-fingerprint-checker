function add_str(head, body) {
    let dd = document.createElement('dd')
    let dt = document.createElement('dt')
    dd.innerHTML = head
    dt.innerHTML = body
    container.appendChild(dd)
    container.appendChild(dt)
}
