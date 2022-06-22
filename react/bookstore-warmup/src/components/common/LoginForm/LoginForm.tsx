import { useTranslation } from "react-i18next";
import softupLogo from "../../../assets/images/softupLogo.png";
import { Button, Form, Input, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./LoginForm.scss";

const LoginForm = () => {
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

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
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            className="fields-field-style"
            rules={[{ required: true, message: `${t("login.usernameError")}` }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              className="login-input-style"
              placeholder={t("login.username")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            className="fields-field-style"
            rules={[{ required: true, message: `${t("login.passwordError")}` }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              className="login-input-style"
              type="password"
              placeholder={t("login.password")}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="rememberMe">
                {t("login.rememberMe")}
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {t("login.log")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
