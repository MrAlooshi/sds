function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

const button = document.querySelector('button');
button.onclick = () => {
    alert('you clicked me');
}



document.addEventListener("DOMContentLoaded", () => {
    // Get all elements with the class 'delete-button'
    const deleteButtons = document.getElementsByClassName('delete-button');

    // Loop through each delete button
    Array.from(deleteButtons).forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the closest parent with the class 'notification-item' and remove it
            const notificationItem = event.target.closest('.notification-item');
            if (notificationItem) {
                notificationItem.remove();  // Remove the notification item
            }
        });
    });
});
