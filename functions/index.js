const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello sri!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification)
        .then(doc=> console.log('notify added',doc));
})

exports.projectCreated = functions.firestore.document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added New Project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.projectDeleted = functions.firestore.document('projects/{projectId}')
    .onDelete(doc => {
        const project = doc.data();
        const notification = {
            content: 'Project Deleted',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.projectUpdated = functions.firestore.document('projects/{projectId}')
    .onUpdate((doc,eventContext) => {
        const project = doc.after.data();
        console.log(eventContext.params);
        const notification = {
            content: 'Project Updated',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
});

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users').doc(user.uid)
            .get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'New User Joined',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
            }
        return createNotification(notification)
    })
});