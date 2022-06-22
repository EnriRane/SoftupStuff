import { useTranslation } from "react-i18next";
import softupLogo from "../../../assets/images/softupLogo.png";
import { Form, Input, SubmitButton } from "formik-antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { Formik } from "formik";
import "./LoginForm.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, `${t("validation.username.min")}`)
      .max(50, `${t("validation.username.max")}`)
      .required(`${t("validation.username.required")}`),
    password: Yup.string()
      .min(2, `${t("validation.password.min")}`)
      .max(50, `${t("validation.password.max")}`)
      .required(`${t("validation.password.required")}`),
  });

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <div className="login-logo">
          <img src={softupLogo} style={{ width: "80px" }} alt="Softup"></img>
          <div className="app-title">
            <h1>Softup Bookstore</h1>
          </div>
        </div>
      </div>
      <span className="descripton-login">{t("login.description")}</span>
      <div className="login-container">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(
              loginUser(
                {
                  username: values.username,
                  password: values.password,
                },
                navigate
              ) as any
            );
          }}
        >
          {({ errors, values }) => (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                className="fields-field-style"
                rules={[{ required: true, message: `${errors.username}` }]}
              >
                <Input
                  name="username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  className="login-input-style"
                  placeholder={t("login.username")}
                />
              </Form.Item>
              <Form.Item
                name="password"
                className="fields-field-style"
                rules={[
                  {
                    required: true,
                    message: `${errors.password}`,
                  },
                ]}
              >
                <Input.Password
                  name="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  className="login-input-style"
                  type="password"
                  placeholder={t("login.password")}
                />
              </Form.Item>

              <Form.Item name="fields-field-style">
                <Form.Item
                  className="check"
                  name="remember"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox className="rememberMe" name="remember">
                    {t("login.rememberMe")}
                  </Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item name="fields-field-style">
                <SubmitButton
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {t("login.log")}
                </SubmitButton>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
