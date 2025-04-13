// Tab functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// File upload functionality
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadedFiles = document.getElementById('uploadedFiles');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--primary-color)';
});

dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = 'var(--border-color)';
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--border-color)';
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <span>${file.name}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        uploadedFiles.appendChild(fileItem);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const aiTabButton = document.querySelector('[data-tab="aisuggestion"]');
    const aiSuggestionContainer = document.getElementById("aisuggestion");
    let aiLoaded = false;

    aiTabButton.addEventListener("click", async function () {
        if (aiLoaded) return; // Prevent multiple calls
        aiLoaded = true;
        aiSuggestionContainer.innerHTML = "<p>Loading AI suggestions...</p>";

        try {
            const response = await fetch("/get-ai-suggestion");
            if (!response.ok) throw new Error("Failed to fetch AI suggestions");

            const data = await response.json();
            aiSuggestionContainer.innerHTML = `<p>${data.suggestion}</p>`;
        } catch (error) {
            console.error("Error fetching AI suggestions:", error);
            aiSuggestionContainer.innerHTML = "<p>Failed to fetch AI suggestions.</p>";
        }
    });
});