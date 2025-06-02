import { initializeConfigurationWatcher, loadConfigurationFromStorage } from '$lib/stores/config.js';

// Initialize configuration system when the app starts on the client
initializeConfigurationWatcher();

// Try to load saved configuration from localStorage
loadConfigurationFromStorage(); 