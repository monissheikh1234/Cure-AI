

// document.getElementById('medicineForm').addEventListener('submit', function(e) {
//     // e.preventDefault();
    
    
//     // Here you would typically send the form data to a server
//     // For this example, we'll just show a success message
//     document.getElementById('successMessage').style.display = 'block';
//     document.getElementById('successMessage').classList.add('pulse');
    
//     // Reset form
    

//     // Hide success message after 3 seconds
//     setTimeout(function() {
//         document.getElementById('successMessage').style.display = 'none';
//         document.getElementById('successMessage').classList.remove('pulse');
//         document.getElementById('medicineForm').reset();
//     }, 3000);
    
// });
document.getElementById('medicineForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/addmedication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
        // document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').classList.add('pulse');
    
        setTimeout(function() {
                    document.getElementById('successMessage').style.display = 'none';
                    document.getElementById('successMessage').classList.remove('pulse');
                    document.getElementById('medicineForm').reset();
                }, 3000);
    } else {
        alert(result.message || "Failed to add medication");
    }
});
