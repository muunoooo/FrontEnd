"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be 3 characters at minimum")
    .required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not match")
    .required("confirm password is required"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormRegister() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValue: FormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleAdd = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center text-white h-[45vw]"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="text-3xl font-bold my-5">
          Welcome Genin 🐱‍👤
          <br />
          fill this form new ninja!
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="flex flex-col gap-2 min-w-[400px]">
                <div className="mb-2">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username :
                  </label>
                  <Field
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your ninja name*"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email :
                  </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your ninja email*"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password :
                  </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your ninja password*"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ConfirmPassword :
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your ninja password*"
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="text-white bg-teal-700 hover:bg-teal-800 
                  focus:ring-4 focus:outline-none focus:ring-teal-300 
                  font-medium rounded-lg text-sm w-full sm:w-auto 
                  px-5 py-2.5 text-center"
                >
                  {isLoading ? "Loading ...." : "Register"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
