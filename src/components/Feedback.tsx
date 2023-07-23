import { useTranslation } from "react-i18next";
import { Headline } from "./Headline";

export const Feedback = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="feedback">
      <div className="link">{t("feedback.link")}</div>
      <div className="content" lang={i18n.language}>
        <Headline>{t("feedback.highlight")}</Headline>
        <div className="quote">{t("feedback.text")}</div>
        <div className="source">{t("feedback.source")}</div>
      </div>
    </div>
  );
};
