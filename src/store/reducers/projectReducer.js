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
            console.log('created proj',action.project)
    }
    return state
}

export default projectReducer