"use client";

import { addUserToWaitList, fetchUserFromWaitlist } from "@/utils/firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaitlistForm = () => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const processForm = async (e) => {
    e.preventDefault();

    const toastPopUp = toast.loading("Please wait...", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
    });

    const userEmail = e.target.email.value;

    if (!validateEmail(userEmail)) {
      toast.update(toastPopUp, {
        render: "Email is invalid!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: true,
      });

      return false;
    }

    try {
      const user = await addUserToWaitList({ email: userEmail });
      console.warn(user);

      let status = "success";
      switch (user.status) {
        case "00":
          status = "error";
          break;
        case "10":
          status = "info";
          break;
        default:
          status = "success";
          break;
      }

      toast.update(toastPopUp, {
        render: user.message,
        type: status,
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error submitting email");
    }
  };

  return (
    <>
      <form
        className="w-full mx-auto max-w-screen-sm"
        // action={addUserToWaitList}
        onSubmit={processForm}
        autoComplete="no"
      >
        <div className="w-full bg-gray-900a border border-gray-600 px-3 py-2 ps-5 rounded-full flex">
          <input
            type="email"
            placeholder="johndoe@company.xyz"
            name="email"
            required
            className="w-full bg-transparent text-sm sm:text-base px-2 sm:ms-4 border-gray-600 focus:border-b focus:outline-none focus:bg-transparent autofill:bg-transparent"
          />
          <button
            type="submit"
            className="bg-blue-700 text-sm sm:text-base px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default WaitlistForm;
