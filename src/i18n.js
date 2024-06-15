import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          submit: {
            "Contact Us": "Contact Us",
          },
          Menu: "Menu",
          "log in": "log in",
          "Vaki and Saburtalo Branch": "Vaki and Saburtalo Branch",
          "Nino Ramishvili 20": "Nino Ramishvili 20",
          "Cardio Zone": "Cardio Zone",
          "Heavy Weights Zone": "Heavy Weights Zone",
          "Outdoor Exercise Area": "Outdoor Exercise Area",
          "Techno Gym Machines": "Techno Gym Machines",
          "Member Lounge": "Member Lounge",
          "City Mall and Mziuri Branch": "City Mall and Mziuri Branch",
          "Petre Kavtaradze 1 (City Mall)": "Petre Kavtaradze 1 (City Mall)",
          "Life Fitness": "Life Fitness",
          "Functional Training Zone": "Functional Training Zone",
          "Ergoline Solarium": "Ergoline Solarium",
          "Batumi Branch": "Batumi Branch",
          "Sherif Khimshiashvili 29 (Grand Mall)":
            "Sherif Khimshiashvili 29 (Grand Mall)",
          "Massage Area": "Massage Area",
          "Closed Parking": "Closed Parking",
          month: "month",
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
          "Vaki and Saburtalo Branch": "ვაკის და საბურთალოს ფილიალი",
          "Nino Ramishvili 20": "ნინო რამიშვილის 20",
          "Cardio Zone": "კარდიო ზონა",
          "Heavy Weights Zone": "მძიმე წონების ზონა",
          "Outdoor Exercise Area": "გარე სავარჯიშო სივრცე",
          "Techno Gym Machines": "Techno Gym ტრენაჟორები",
          "Member Lounge": "წევრთა ლაუნჯი",
          "City Mall and Mziuri Branch": "სითი მოლის და მზიურის ფილიალი",
          "Petre Kavtaradze 1 (City Mall)": "პეტრე ქავთარაძე 1 (სითი მოლი)",
          "Life Fitness": "Life Fitness",
          "Functional Training Zone": "ფუნქციონალური ვარჯიშების ზონა",
          "Ergoline Solarium": "Ergoline სოლარიუმი",
          "Batumi Branch": "ბათუმის ფილიალი",
          "Sherif Khimshiashvili 29 (Grand Mall)":
            "შერიფ ხიმსიაშვილის 29 (გრანდ მოლი)",
          "Massage Area": "მასაჟის სივრცე",
          "Closed Parking": "დახურული პარკინგი",
          month: "თვე",
        },
      },
    },
  });

export default i18n;
