import styles from "../css/ContactUs.module.css";

import { Form, redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import store from "../store";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className={styles.overlay}>
      <Form method="post" action="/contact-us" className={styles.form}>
        <h1>{t("Contact Us")}</h1>
        <p>{t("contactUs.intro")}.</p>

        <div className={styles.group1}>
          <div className={styles.group_firstname}>
            <label htmlFor="firstname">{t("contactUs.First Name")}</label>
            <input type="text" name="firstname" id="firstname" required />
          </div>
          <div className={styles.group_lastname}>
            <label htmlFor="lastname">{t("contactUs.Last Name")}</label>
            <input type="text" name="lastname" id="lastname" required />
          </div>
        </div>

        <div className={styles.group_email}>
          <label htmlFor="email">{t("contactUs.Email")}</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className={styles.group_message}>
          <label htmlFor="message">{t("contactUs.Message")}</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>

        <div className={styles.group_submit}>
          <input type="submit" value={t("Submit")} />
        </div>
      </Form>
    </div>
  );
}

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
