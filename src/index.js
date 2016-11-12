var input = document.querySelector('input[type="file"]');

input.onchange = function (event) {
    var files = event.target.files;
    if (files.length) {
        uploadFiles(Array.prototype.slice.call(files)); // transform from array-like to array
    }
}

function uploadFiles(files) {
    var request = new XMLHttpRequest();
    var form = new FormData();
    var fields = {
        file: files[0],
        name: 'James',
        surname: 'Akwuh'
    };

    for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
            form.append(key, fields[key]);
        }
    }

    request.open('post', '/upload', true);
    request.send(form);
}
