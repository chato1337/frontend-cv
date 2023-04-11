// Import the necessary modules from the Appwrite SDK.
import { Client, Storage, Databases } from 'appwrite';

// Create an Appwrite client for connecting to the server.
const appwriteClient = new Client();
const databases = new Databases(appwriteClient);
// const appwriteAccount = new Account(appwriteClient);

// Assign the server's API endpoint and the project ID.
const awEndpoint = process.env.REACT_APP_AWENDPOINT ?? ''
const awProject = process.env.REACT_APP_AWPROJECT ?? ''
const awBucket = process.env.REACT_APP_AWBUCKET ?? ''
const awBD = process.env.REACT_APP_AWDB ?? ''

const storage = new Storage(appwriteClient);


export async function getCollection(id) {
    const data = await databases.listDocuments(awBD, id)
    return data
}

appwriteClient
    .setEndpoint(awEndpoint)
    .setProject(awProject);

export const createFile = (file) => storage.createFile(awBucket, file.name, file)
export const viewFile = (id) => storage.getFileView(awBucket, id)
export const deleteFile = (id) => storage.deleteFile(awBucket, id)