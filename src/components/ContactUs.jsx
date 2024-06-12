import styles from "../css/ContactUs.module.css";

import { Form, redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import store from "../store";

function ContactUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.overlay}>
      <Form method="post" action="/contact-us" className={styles.form}>
        <h1 style={{ fontSize: i18n.language === "ka" && "1.2rem" }}>
          {t("Contact Us")}
        </h1>
        <p style={{ fontSize: i18n.language === "ka" && "1rem" }}>
          {t(
            "Let’s get this conversation started. Tell us a bit about yourself, andwe’ll get in touch as soon as we can"
          )}
          .
        </p>

        <div
          className={styles.group1}
          style={{ fontSize: i18n.language === "ka" && "1rem" }}
        >
          <div className={styles.group_firstname}>
            <label htmlFor="firstname">{t("First name")}</label>
            <div>
              <input type="text" name="firstname" id="firstname" required />
            </div>
          </div>
          <div className={styles.group_lastname}>
            <label htmlFor="lastname">{t("Last name")}</label>
            <div>
              <input type="text" name="lastname" id="lastname" required />
            </div>
          </div>
        </div>

        <div
          className={styles.group_email}
          style={{ fontSize: i18n.language === "ka" && "1rem" }}
        >
          <label htmlFor="email">{t("Email")}</label>
          <div>
            <input type="email" name="email" id="email" required />
          </div>
        </div>

        <div
          className={styles.group_message}
          style={{ fontSize: i18n.language === "ka" && "1rem" }}
        >
          <label htmlFor="message">{t("Message")}</label>
          <div>
            <textarea name="message" id="message" required></textarea>
          </div>
        </div>

        <div className={styles.group_agreement}>
          <input type="checkbox" name="agreement" id="agreement" />
          <label
            htmlFor="agreement"
            style={{ fontSize: i18n.language === "ka" && "0.9rem" }}
          >
            {t(
              "Yes, I would like to receive marketing-related communications about Fitness.ge products, services, and events. I understand I may unsubscribe at any time"
            )}
            .
          </label>
        </div>

        <div
          className={styles.group_submit}
          style={{ fontSize: i18n.language === "ka" && "0.9rem" }}
        >
          <input
            type="submit"
            value={t("submit.Contact Us")}
            style={{ fontSize: i18n.language === "ka" && "1rem" }}
          />
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const contactUsAction = async ({ request }) => {
  const formData = await request.formData();
  const jsonString = JSON.stringify(Object.fromEntries(formData));

  store.dispatch({
    type: "inbox/add",
    message: JSON.parse(jsonString),
  });

  return redirect("/thank-you");
};

export default ContactUs;
