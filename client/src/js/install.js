const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Store the deferred prompt event

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default browser prompt
  deferredPrompt = event; // Store the event for later use
  showInstallButton(); // Show the install button
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    // Check the user's choice
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferred prompt variable
    deferredPrompt = null;
    hideInstallButton(); // Hide the install button
  }
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
  // Perform any necessary actions after the app is installed
});

// Helper function to show the install button
function showInstallButton() {
  butInstall.style.display = 'block';
}

// Helper function to hide the install button
function hideInstallButton() {
  butInstall.style.display = 'none';
}
