import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { DollarSign } from "lucide-react"
import { Slider } from "@mantine/core"
export const SetPricePopup = ({ isOpen, onClose, initialPrice }) => {
    const [price, setPrice] = useState(initialPrice)
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow">
                    <DollarSign className="text-gray-500 mb-4" size={24} />
                    <h3 className="font-medium text-gray-900">Set Price</h3>
                    <p className="text-gray-600">Set price to item you wish to sell.</p>
                </div>
                <div className="space-y-4">
                    <Slider
                        value={price}
                        onChange={setPrice}
                        min={0}
                        max={5000}
                        step={50}
                        label={value => `$${value.toLocaleString()}`}
                        styles={{
                            markLabel: {
                                display: "none"
                            }
                        }}
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    )
}
