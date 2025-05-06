import React from "react"
import { Modal } from "@mantine/core"
import { ArrowLeft } from "lucide-react"
export const PopupWrapper = ({ isOpen, onClose, children, title }) => {
    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            size="lg"
            padding="xl"
            title={
                <div className="flex items-center">
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full mr-4"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    {title && <h2 className="text-xl font-semibold">{title}</h2>}
                </div>
            }
        >
            {children}
        </Modal>
    )
}
