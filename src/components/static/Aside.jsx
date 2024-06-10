import styles from "../../css/Aside.module.css";
import Facebook from "../social/Facebook";

import Phone from "../social/Phone";
import WhatsApp from "../social/WhatsApp";

function Aside() {
  return (
    <>
      <Facebook className={styles.blue} />
      <WhatsApp className={styles.green} />
      <Phone className={styles.yellow} />
    </>
  );
}

export default Aside;
