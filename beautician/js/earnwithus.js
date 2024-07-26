
function checkFileSize() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const maxSize = 1024 * 1024; // 1 MB

    for (let i = 0; i < files.length; i++) {
        if (files[i].size > maxSize) {
            alert('File size exceeds 1MB. Please choose a smaller file.');
            fileInput.value = ''; // Clear the selected file
            return;
        }
    }
}
