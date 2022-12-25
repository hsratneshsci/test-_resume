document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/process-resume');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Resume submitted successfully!');
        } else {
            alert('An error occurred. Please try again.');
        }
    };
    xhr.send(formData);
});