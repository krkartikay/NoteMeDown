function CreateNewNote() {
    // get note entered and clear it
    var cmd_bar = $("#cmd_bar")
    var note = cmd_bar.val()
    cmd_bar.val("")
    // now we gotta show it
    var notes = $("#notes")
    var timestamp = moment().format("MMM Do h:mma")
    var new_note = `<li><span class="timestamp">${timestamp}</span> ${note}</li>`
    notes.append(new_note)
}

function Refocus() {
    $("#cmd_bar").focus()
}

function onDocumentLoad() {
    // set up evt listeners
    $("#cmd_bar").keypress(onCmdBarKeyPress)
    // focus cmd bar
    Refocus()
}

function onCmdBarKeyPress(evt) {
    if (evt.key == "Enter") {
        CreateNewNote()
    }
    Refocus()
}

$(onDocumentLoad)