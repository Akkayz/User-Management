import axios from "axios";

const FIREBASE_URL =
  "https://firestore.googleapis.com/v1/projects/user-management-bb57d/databases/(default)/documents/users";

export const addUser = async (user) => {
  try {
    // Tạo ID duy nhất bằng cách kết hợp timestamp và số ngẫu nhiên
    const userId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const response = await axios.post(FIREBASE_URL, {
      fields: {
        id: { stringValue: userId }, // Thêm ID vào fields
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
