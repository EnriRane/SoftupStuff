import "./NotFound.scss";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImage from "../../../assets/images/notFound.png";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="notFoundWrapper">
      <img className="notFoundImage" src={notFoundImage} alt="notFound"></img>
      <p className="code">404</p>
      <span style={{ color: "gray" }}>{t("notFound.description")}</span>
      <Button
        onClick={() => navigate(`/app/books`)}
        style={{ marginTop: 20 }}
        type="primary"
      >
        {t("notFound.button")}
      </Button>
    </div>
  );
};
export default NotFound;
