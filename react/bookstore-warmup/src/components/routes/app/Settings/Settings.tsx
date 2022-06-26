import "./Settings.scss";
import { Layout, Select } from "antd";
import i18n from "../../../../services/translationService";
import { useTranslation } from "react-i18next";
import britishFlag from "../../../../assets/images/united-kingdom.png";
import albanianFlag from "../../../../assets/images/albania.png";

const { Content } = Layout;
const { Option } = Select;

const Settings = () => {
  const { t } = useTranslation();
  const languageHandler = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  return (
    <>
      <Layout style={{ padding: "24px 24px 24px", height: "100vh" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "12vh",
            marginBottom: "30px",
          }}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24, fontSize: 30 }}
          >
            {t("settings")}
          </p>
        </Content>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            maxHeight: "30vh",
          }}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24, fontSize: 20 }}
          >
            {t("language.change")}
          </p>

          <Select
            defaultValue={`${t("chooseLanguage")}`}
            style={{ width: "20%", textAlign: "start" }}
          >
            <Option value="English">
              <div
                onClick={() => {
                  languageHandler("en");
                }}
              >
                <img src={britishFlag} style={{ marginRight: 5 }} alt="" />
                <b>{t("language.english")}</b>
              </div>
            </Option>
            <Option value="Albanian">
              <div
                onClick={() => {
                  languageHandler("al");
                }}
              >
                <img src={albanianFlag} style={{ marginRight: 5 }} alt="" />{" "}
                <b>{t("language.albanian")}</b>
              </div>
            </Option>
          </Select>
        </Content>
      </Layout>
    </>
  );
};
export default Settings;
