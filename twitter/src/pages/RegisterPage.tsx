import * as Yup from "yup";
import axios from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, FormikProps } from "formik";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("username is required!"),
  email: Yup.string()
    .email("invalid email format!")
    .required("email is required!"),
  password: Yup.string()
    .min(6, "password must have at least 6 characters!")
    .required("password is required!"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate();
  const initialValue: FormValues = { username: "", email: "", password: "" };

  const handleAdd = async (user: FormValues) => {
    try {
      await axios.post("/users", user);
      alert("ID has been created");
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[url('/twitter.jpg')] h-[100vh] w-full bg-opacity-75 flex justify-center items-center">
      <div className="bg-black h-[100vh] w-full bg-opacity-75 flex justify-center items-center">
        <div className="bg-black h-[550px] w-[600px] rounded-3xl text-white">
          <div className="ml-[20px] mr-[20px] mt-[40px]">
            <div className="flex">
              <svg
                className="w-[50px] h-[50px] text-gray-800 dark:text-white mr-[80px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-bold text-4xl text-center">
                Create an account
              </p>
              <a href="http://localhost:5173/" className="font-bold text-xl ml-[80px]">back</a>
            </div>
            <Formik
              initialValues={initialValue}
              validationSchema={RegisterSchema}
              onSubmit={async (values, action) => {
                await handleAdd(values);
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
                        className="block mb-2 text-sm font-medium text-white mt-10"
                      >
                        Username :
                      </label>
                      <Field
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Username"
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
                        className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="email"
                      />
                      {touched.email && errors.email ? (
                        <div className="text-red-500 text-xs">
                          {errors.email}
                        </div>
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
                        placeholder="password"
                      />
                      {touched.password && errors.password ? (
                        <div className="text-red-500 text-xs">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-sky-600 hover:bg-teal-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Create Account
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
