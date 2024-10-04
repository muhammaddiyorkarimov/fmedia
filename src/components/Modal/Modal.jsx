import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Modal = ({ videoUrl, title, description, isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  if (!isOpen) return null;

  const truncateTitle = (title, maxLines = 4) => {
    const maxLength = 260;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };
  const getTitleByLanguage = (item) => {
    switch (i18n.language) {
      case "en":
        return item?.title_en_us || item?.title;
      case "uz-latn":
        return item?.title_uz_Latn || item?.title;
      case "ru":
        return item?.title_ru || item?.title;
      default:
        return item?.title;
    }
  };

  return (
    <div className="modal-overlays" onClick={onClose}>
      <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
        <div className="iframe-wrapper">
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <h2>{getTitleByLanguage(title)}</h2>
        <p>{getTitleByLanguage(truncateTitle(description))}</p>
        <Link to={`newsVideo/`} class="button">
          <div class="arrow"></div>
          <span>{t("Maqolani o'qish")}</span>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
