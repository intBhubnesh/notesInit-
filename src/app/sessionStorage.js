export const loadState = (key, defaultValue) => {
    try{
        const serializedState = sessionStorage.getItem(key);
        if(!serializedState){
            return defaultValue;
        }
        return JSON.parse(serializedState)
    } catch (e) {
        console.error("Could not load state :", error);
        return defaultValue;
    }
}

export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem(key, serializedState)
    } catch (error) {
        console.error("Could not save state:", error);
    }
}
