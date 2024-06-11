import styles from "../css/ContactUs.module.css";

import { Form, redirect } from "react-router-dom";
import store from "../store";

function ContactUs() {
  return (
    <div className={styles.overlay}>
      <Form method="post" action="/contact-us" className={styles.form}>
        <h1>Contact Us</h1>
        <p>
          Let’s get this conversation started. Tell us a bit about yourself, and
          we’ll get in touch as soon as we can.
        </p>

        <div className={styles.group1}>
          <div className={styles.group_firstname}>
            <label htmlFor="firstname">First name</label>
            <div>
              <input type="text" name="firstname" id="firstname" required />
            </div>
          </div>
          <div className={styles.group_lastname}>
            <label htmlFor="lastname">Last name</label>
            <div>
              <input type="text" name="lastname" id="lastname" required />
            </div>
          </div>
        </div>

        <div className={styles.group_email}>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" name="email" id="email" required />
          </div>
        </div>

        <div className={styles.group_message}>
          <label htmlFor="message">Message</label>
          <div>
            <textarea name="message" id="message" required></textarea>
          </div>
        </div>

        <div className={styles.group_agreement}>
          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement">
            Yes, I would like to receive marketing-related communications about
            <strong> Fitness.ge</strong> products, services, and events. I
            understand I may unsubscribe at any time.
          </label>
        </div>

        <div className={styles.group_submit}>
          <input type="submit" value="Contact Us" />
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
