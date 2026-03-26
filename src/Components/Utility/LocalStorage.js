

const getApps = () => {
    
    const storedApps = localStorage.getItem('apps');

    if (storedApps) {
        
        const stroredAppsTP = JSON.parse(storedApps);
        return stroredAppsTP;
    }
    return [];
}




const saveApps = (app) => {

    const appsToStr = JSON.stringify(app);

    localStorage.setItem('apps', appsToStr);
    
}


const addApps = (id) => {
    
    const getStoredApps = getApps();
    
    if (getStoredApps.includes(id)) {

        alert('This app already exists');
        
    } else {

        const newStoredApps = [...getStoredApps, id];
        saveApps(newStoredApps)
        
    }
}


const removeApp = (id) => {
    
    const getStoredApps = getApps();

    const remainedapps = getStoredApps.filter(appId => appId !== id);

    saveApps(remainedapps);
}


export {
    addApps,
    getApps,
    removeApp,
}