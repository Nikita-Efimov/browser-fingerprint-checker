function add_str(head, body) {
    let dd = document.createElement('dd')
    dd.innerHTML = head
    let dt = document.createElement('dt')
    dt.innerHTML = body.toString().trim() == '' ? 'undefined' : body
    let div = document.createElement('div')
    div.classList.add('note-cont')
    div.appendChild(dd)
    div.appendChild(dt)
    container.appendChild(div)
}
