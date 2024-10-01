import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ videoUrl, title, description, isOpen, onClose }) => {
  if (!isOpen) return null;

  const truncateTitle = (title, maxLines = 4) => {
    const maxLength = 260;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
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
        <h2>{title}</h2>
        <p>{truncateTitle(description)}</p>
        <Link to={`newsVideo/`} class="button">
          <div class="arrow"></div>
          <span>Maqolani o'qish</span>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
