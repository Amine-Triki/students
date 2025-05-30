
import type { Student } from "../pages/students/Students";

const API_URL =`${import.meta.env.VITE_API_URL}/students`;
export const fetchStudents = async () => {

// eslint-disable-next-line no-useless-catch
try {
    const reponse = await fetch(API_URL)

if (!reponse.ok) {
    throw new Error(`${reponse.status} : ${reponse.statusText}`)
}

return await reponse.json();

} catch (error) {
    throw error;
}
};

export const createSudent = async (data: Student) => {

// eslint-disable-next-line no-useless-catch
try {
    const reponse = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    },
})

if (!reponse.ok) {
    throw new Error(`${reponse.status} : ${reponse.statusText}`)
}
return await reponse.json();

} catch (error) {
    throw error;;
}
}