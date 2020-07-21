const initState = {
    projects: [
        {id: 1, title: "hello world", content: "hey sup!"},
        {id: 2, title: "hell with u", content: "hey sup!"},
        {id: 3, title: "hey Bbautiful", content: "hey sup!"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created proj',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            return state;
        case 'DELETE_PROJECT':
            console.log('deleted proj',action.projectId);
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('deleted proj error',action.err);
            return state;
        case 'UPDATE_PROJECT':
            console.log('proj updated',action.project);
            return state;
        case 'UPDATE_PROJECT_ERROR':
            console.log('proj updated error', action.err);
            return state;
        case 'RETRIVE_PROJECT':
            console.log('proj retriveded',action.projectId);
            return state;
        case 'RETRIVE_PROJECT':
            console.log('proj retrive error',action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer