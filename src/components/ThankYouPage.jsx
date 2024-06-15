import { useTranslation } from "react-i18next";

function ThankYouPage() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("Thank You")}!</h1>
      <p>
        {t("thankYou.prompt")}.
      </p>
    </div>
  );
}

export default ThankYouPage;
