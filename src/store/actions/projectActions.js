export const createProject = (project) => {
    return (dispatch,getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};

export const updateProject = (project,projectId) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).update({
            ...project,
            title: project.title,
            content: project.content
        }).then(() => {
            dispatch({type: 'UPDATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROJECT_ERROR', err });
        });
    }
};

export const deleteProject = (projectId) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete()
        .then(() => {
            dispatch({type: 'DELETE_PROJECT', projectId });
        }).catch((err) => {
            dispatch({type: 'DELETE_PROJECT_ERROR', err });
        });
}
};