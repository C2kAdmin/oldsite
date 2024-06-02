function submitForm(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    var form = document.getElementById('order-form');
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insertar_orden.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('recent-entry').innerHTML = xhr.responseText;
        }
    };
    xhr.send(formData);
}
