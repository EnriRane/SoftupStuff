import { PageHeader, Dropdown, Menu } from "antd";
import { TranslationOutlined } from "@ant-design/icons";
import i18n from "../../../services/translationService";
import { useTranslation } from "react-i18next";
import albanianFlag from "../../../assets/images/albania.png";
import britishFlag from "../../../assets/images/united-kingdom.png";
import "./Translator.scss";

const Translator = () => {
  const { t } = useTranslation();
  const enLanguageHandler = async () => {
    await i18n.changeLanguage("en");
  };

  const sqLanguageHandler = async () => {
    await i18n.changeLanguage("al");
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div className="label" onClick={enLanguageHandler}>
              <img src={britishFlag} alt="british" />
              {t("language.english")}
            </div>
          ),
          key: "en",
        },
        {
          label: (
            <div className="label" onClick={sqLanguageHandler}>
              <img src={albanianFlag} alt="albanian" />
              {t("language.albanian")}
            </div>
          ),
          key: "al",
        },
      ]}
    />
  );

  return (
    <div>
      <PageHeader
        extra={[
          <Dropdown overlay={menu} trigger={["click"]}>
            <TranslationOutlined className="translation-outlined" />
          </Dropdown>,
        ]}
      />
    </div>
  );
};

export default Translator;
