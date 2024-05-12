"use server";

import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

const addUserToWaitList = async (formData) => {
  try {
    const isUserRegistered = await fetchUserFromWaitlist(formData);
    if (isUserRegistered == false) {
      try {
        const collectionRef = collection(db, "waitlists");

        const docRef = await addDoc(collectionRef, {
          email: formData.email,
        });

        return { message: "Registered successfully!", status: "11" };
      } catch (error) {
        return {
          message: "Something went wrong! Please try again.",
          status: "00",
        };
      }
    } else {
      return { message: "User is already registered!", status: "10" };
    }
  } catch (error) {
    return { message: "Something went wrong! Please try again.", status: "00" };
    console.warn(error);
  }
};

const fetchUserFromWaitlist = async (formData) => {
  try {
    const waitlistCollection = collection(db, "waitlists");
    const q = query(waitlistCollection, where("email", "==", formData.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // If no document matches the query
      return false;
    }

    const userData = {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    };
    // const userData = querySnapshot.docs;
    return userData;
  } catch (error) {
    console.error("Error fetching user from waitlist:", error);
    return false;
  }
};

export { addUserToWaitList, fetchUserFromWaitlist };
