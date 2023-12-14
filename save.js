document.getElementById('save-button').addEventListener('click', function () {
    exportWorkspaceAsJPEG();
});

function exportWorkspaceAsJPEG() {
    var workspace = document.getElementById('workspace');

    html2canvas(workspace).then(function (canvas) {
        var imageDataUrl = canvas.toDataURL('image/jpeg');

        var link = document.createElement('a');
        link.href = imageDataUrl;
        link.download = 'workspace.jpg';

        // Simulating a click on the link to trigger the download
        var clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });

        link.dispatchEvent(clickEvent);
    });
}