import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
export const AddRepairLogPopup = ({ isOpen, onClose }) => {
    const [nftCode, setNftCode] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = () => {
        // Handle submission logic here
        onClose()
    }
    const isNFTValid = nftCode.length > 0
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">Repair Logs</h2>
                <p className="text-gray-600">
                    Entered repair logs will be added to the respective device
                </p>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        NFT Code
                    </label>
                    <input
                        type="text"
                        value={nftCode}
                        onChange={e => setNftCode(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter NFT code"
                    />
                </div>
                {isNFTValid && (
                    <div className="bg-white rounded-lg p-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter repair title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter repair description"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </PopupWrapper>
    )
}
