import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import axios from "../helpers/axioss";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required !"),
  email: Yup.string()
    .email("Invalid email format !")
    .required("Email is required !"),
  password: Yup.string()
    .min(3, "Password is to weak !")
    .required("Password is required !"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate();

  const handleAdd = async (user: FormValues) => {
    try {
      await axios.post("/user", user);
      alert("user has been add!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const initialValue: FormValues = { username: "", email: "", password: "" };

  return (
    <div className="flex justify-center mt-10">
      <div className=" bg-[#FF4191] font-bold w-[16rem] text-center">
        <p className=" mb-4 text-2xl">Register Form</p>
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
              <Form className="">
                <div className="">
                  <label htmlFor="username" className=" star">
                    Username :
                  </label>
                  <Field
                    className=""
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500">{errors.username}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password :</label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className=" bg-gray-500 w-[100px] rounded-md mt-5"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterPage;
