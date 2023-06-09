import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { validation } from "../../utils/helper";
import useLoginForm from "../../hooks/useLoginForm";

const LoginForm = () => {
    const { handleSubmit, isLoading } = useLoginForm();
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const handleFormSubmit = (values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting, navigate);
    }

    return (
        <div className="login_form_container">
            <Formik
                initialValues={initialValues}
                validate={validation}
                onSubmit={handleFormSubmit}
            >
                {({
                    isSubmitting,
                }) => (
                    <Form>
                        <div className="login_form_hed_con">
                            <h1 className="login_form_heding">Welcome Back ⚡</h1>
                        </div>
                        <div className="login_form_input">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="email or username" className="common_style_inputs_or_btn" />
                            <ErrorMessage name="email" component="div" className="login_form_error" />
                        </div>
                        <div className="login_form_input">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" placeholder="password" className="common_style_inputs_or_btn" />
                            <ErrorMessage name="password" component="div" className="login_form_error" />
                        </div>
                        <button
                            type="submit"
                            className="login_form_button common_style_inputs_or_btn"
                            disabled={isSubmitting}
                        >
                            {isLoading ? "Loding.." : "click"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
