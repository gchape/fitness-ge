import { useTranslation } from "react-i18next";

function ThankYouPage() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("Thank You")}!</h1>
      <p>
        {t("We have received your message and will get back to you shortly")}.
      </p>
    </div>
  );
}

export default ThankYouPage;
