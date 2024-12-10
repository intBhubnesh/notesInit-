// persistMiddleware.js
import { saveState } from '../app/sessionStorage'; // Assuming you already have a saveState function.

const pasteSessionKey = "pasteList";
const categorySessionKey = "categoryList"

// Middleware to persist `pasteList` to session storage
export const persistMiddleware = store => next => action => {
    const result = next(action); // Process the action
    const state = store.getState(); // Get the updated state

    // Save `pasteList` if the action belongs to `Paste` slice
    saveState(pasteSessionKey, state.Paste.pasteList);
    saveState(categorySessionKey, state.Category.categoryList); // Assuming you have a Category slice
    
    return result; // Pass the result
};
