import React from "react";
import styles from "./ContactsPage.module.scss";

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <h1>Контакты</h1>
      <p>
        Если у вас возникли вопросы или предложения, вы можете связаться со мной
        любым удобным способом:
      </p>
      <ul>
        <li>
          <strong>Электронная почта:</strong>{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </li>
        <li>
          <strong>Телефон:</strong> +380 XX XXX XXXX
        </li>
        <li>
          <strong>Telegram:</strong>{" "}
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yourusername
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourusername
          </a>
        </li>
      </ul>
      <p>Буду рад любому обратному связи!</p>
    </div>
  );
};

export default ContactsPage;
