let uploadedFiles = [];

function uploadFile() {
  const input = document.getElementById('fileInput');
  const file = input.files[0];
  if (!file) return alert("Please select a file!");

  uploadedFiles.push(file);
  displayFiles();
}

function displayFiles() {
  const list = document.getElementById('fileList');
  list.innerHTML = '';

  uploadedFiles.forEach(file => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = file.name;
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    li.appendChild(link);
    list.appendChild(li);
  });
}
