export const loadStorage = () => {
    try{
        const serializeState = loadStorage.getItem('setting');
        if(serializeState === null ) return undefined;
        return JSON.parse(serializeState);

    }catch(e){
        return undefined;
    }
}


export const saveStorage = state => {
    try{
        const serializedState = JSON.stringify({
            settings:{...state}
        });
        localStorage.setItem('setting',serializedState)
    }catch(e){
        console.error('failed to save to localstorage');
    }
}