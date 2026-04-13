

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


// const addApps = (id) => {
    
//     const getStoredApps = getApps();
    
//     if (getStoredApps.includes(id)) {

//         alert('This app already exists');
        
//     } else {

//         const newStoredApps = [...getStoredApps, id];
//         saveApps(newStoredApps)
        
//     }
// }
const addApps = (app) => {
    
    const getStoredApps = getApps();
    // console.log(getStoredApps)
    // console.log(app);

    const getExistingAppIds = getStoredApps.map(theApp => theApp.id);
    const isExistingApp = getExistingAppIds.includes(app.id);
    console.log(isExistingApp);
    if (isExistingApp) {
        return alert("App is already installed");
    } else {
        
        const newApps =[...getStoredApps, app]
        saveApps(newApps)
    }


    // console.log(getStoredApps.includes(app.id))
    
    // if (getStoredApps.includes(id)) {

    //     alert('This app already exists');
        
    // } else {

    //     const newStoredApps = [...getStoredApps, id];
    //     saveApps(newStoredApps)
        
    // }
}


const removeApp = (id) => {
    
    const getStoredApps = getApps();

    const theApps = getStoredApps.map(app => app);
    console.log(theApps)

    const remainedapps = theApps.filter(app => app.id !== id);

    saveApps(remainedapps);
}


export {
    addApps,
    getApps,
    removeApp,
}