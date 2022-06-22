import { Button, PageHeader } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import softupLogo from "../../../assets/images/softupLogo.png";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="headerWrapper">
      <PageHeader
        className="header"
        title="Softup Bookstore"
        avatar={{
          src: `${softupLogo}`,
          style: { width: 70 },
        }}
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => {
              navigate("/auth/logout");
            }}
          >
            {t("logout")}
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};
export default Header;
