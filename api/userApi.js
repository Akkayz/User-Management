import axios from "axios";

const FIREBASE_URL =
  "https://firestore.googleapis.com/v1/projects/user-management-bb57d/databases/(default)/documents/users";

export const addUser = async (user) => {
  try {
    const response = await axios.post(FIREBASE_URL, {
      fields: {
        name: { stringValue: user.name },
        email: { stringValue: user.email },
        age: { integerValue: user.age },
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding user: ", error);
    throw error;
  }
};
