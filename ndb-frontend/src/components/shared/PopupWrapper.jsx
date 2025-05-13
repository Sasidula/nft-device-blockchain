import React from "react";
import { Modal } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import "./PopupWrapper.css";

export const PopupWrapper = ({ isOpen, onClose, children, title }) => {
    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            size="xl"
            padding="xl"
            yOffset="100px"
            title={
                <div className="popup-header">
                    <button
                        onClick={onClose}
                        className="popup-close-button"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    {title && <h2 className="popup-title">{title}</h2>}
                </div>
            }
        >
            {children}
        </Modal>
    );
};
