import { PageHeader, Dropdown, Menu } from "antd";
import { TranslationOutlined } from "@ant-design/icons";
import i18n from "../../../services/translationService";
import { useTranslation } from "react-i18next";
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
              {t("language.english")}
            </div>
          ),
          key: "en",
        },
        {
          label: (
            <div className="label" onClick={sqLanguageHandler}>
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
