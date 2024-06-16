import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Menu: "Menu",
          auth: {
            "log in": "log in",
          },
          sort: {
            by: "Sort by",
            Ascending: "Ascending",
            Descending: "Descending",
          },
          Price: "Price",
          "Search product...": "Search product...",
          navbar: {
            Supplements: "Supplements",
            Accessories: "Accessories",
            Weights: "Weights",
          },
          "Contact Us": "Contact Us",
          Submit: "Submit",
          contactUs: {
            intro:
              "Let's start this conversation. Tell us a bit about yourself and we'll get in touch with you as soon as possible.",
            "First Name": "First Name",
            "Last Name": "Last Name",
            Email: "Email",
            Message: "Message",
          },
          "Thank You": "Thank You",
          thankYou: {
            prompt:
              "We have received your message and will get back to you shortly",
          },
          month: "month",
        },
      },
      ka: {
        translation: {
          Menu: "მენიუ",
          auth: {
            "log in": "შესვლა",
          },
          sort: {
            by: "დახარისხება",
            Ascending: "ზრდადობით",
            Descending: "კლებადობით",
          },
          Price: "ფასი",
          "Search product...": "პროდუქტის ძებნა...",
          navbar: {
            Supplements: "საკვები დანამატები",
            Accessories: "აქსესუარები",
            Weights: "სიმძიმეები",
          },
          "Contact Us": "დაგვიკავშირდით",
          Submit: "გაგზავნა",
          contactUs: {
            intro:
              "დავიწყოთ ეს საუბარი. გვითხარით ცოტა თქვენს შესახებ და ჩვენ დაგიკავშირდებით როგორც კი შევძლებთ",
            "First Name": "სახელი",
            "Last Name": "გვარი",
            Email: "ელფოსტა",
            Message: "შეტყობინება",
          },
          "Thank You": "გმადლობთ",
          thankYou: {
            prompt: "ჩვენ მივიღეთ თქვენი შეტყობინება და მალე დაგიკავშირდებით",
          },
          "Vaki and Saburtalo Branch": "ვაკის და საბურთალოს ფილიალი",
          "City Mall and Mziuri Branch": "სითი მოლის და მზიურის ფილიალი",
          "Petre Kavtaradze 1 (City Mall)": "პეტრე ქავთარაძე 1 (სითი მოლი)",
          "Functional Training Zone": "ფუნქციონალური ვარჯიშების ზონა",
          "Outdoor Exercise Area": "გარე სავარჯიშო სივრცე",
          "Techno Gym Machines": "Techno Gym ტრენაჟორები",
          "Nino Ramishvili 20": "ნინო რამიშვილის 20",
          "Sherif Khimshiashvili 29 (Grand Mall)":
            "შერიფ ხიმსიაშვილის 29 (გრანდ მოლი)",
          "Heavy Weights Zone": "მძიმე წონების ზონა",
          "Ergoline Solarium": "Ergoline სოლარიუმი",
          "Closed Parking": "დახურული პარკინგი",
          "Batumi Branch": "ბათუმის ფილიალი",
          "Member Lounge": "წევრთა ლაუნჯი",
          "Massage Area": "მასაჟის სივრცე",
          "Cardio Zone": "კარდიო ზონა",
          "Life Fitness": "Life Fitness",
          month: "თვე",
        },
      },
    },
  });

export default i18n;
