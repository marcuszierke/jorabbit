import { useTranslation } from "react-i18next";

export const PrivatePolicy = () => {
  const { t } = useTranslation();
  const policyHtml = t("policy");

  return (
    <div className="policy">
      <div className="link">{t("footer.policy")}</div>
      <div
        className="text"
        dangerouslySetInnerHTML={{ __html: policyHtml || "" }}
      />
    </div>
  );
};
