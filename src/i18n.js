import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "ka",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          submit: {
            "Contact Us": "Contact Us",
          },
        },
      },
      ka: {
        translation: {
          Menu: "მენიუ",
          "log in": "შესვლა",
          "Search product...": "პროდუქტის ძებნა...",
          Supplements: "საკვები დანამატები",
          Accessories: "აქსესუარები",
          Weights: "სიმძიმეები",
          "First name": "სახელი",
          "Last name": "გვარი",
          Email: "ელფოსტა",
          Message: "შეტყობინება",
          "Contact Us": "დაგვიკავშირდით",
          submit: {
            "Contact Us": "გაგზავნა",
          },
          "Thank You": "გმადლობთ",
          "We have received your message and will get back to you shortly":
            "ჩვენ მივიღეთ თქვენი შეტყობინება და მალე დაგიკავშირდებით",
          "Let’s get this conversation started. Tell us a bit about yourself, andwe’ll get in touch as soon as we can":
            "დავიწყოთ ეს საუბარი. გვითხარით ცოტა თქვენს შესახებ და ჩვენ დაგიკავშირდებით როგორც კი შევძლებთ",
          "Yes, I would like to receive marketing-related communications about Fitness.ge products, services, and events.":
            "დიახ, მსურს მივიღო მარკეტინგთან დაკავშირებული კომუნიკაციები Fitness.ge-ს პროდუქტების, სერვისებისა და ღონისძიებების შესახებ",
        },
      },
    },
  });

export default i18n;
