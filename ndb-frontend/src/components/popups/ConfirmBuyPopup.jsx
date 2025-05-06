import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import {
    DollarSign,
    Cpu,
    HardDrive,
    Monitor,
    Battery,
    BoxIcon
} from "lucide-react"
import { IconListItem } from "../shared/IconList"
export const ConfirmBuyPopup = ({ isOpen, onClose }) => {
    const [publicKey, setPublicKey] = useState("")
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow">
                    <DollarSign className="text-gray-500 mb-4" size={24} />
                    <h3 className="font-medium text-gray-900">Request Item</h3>
                    <p className="text-gray-600">
                        Buy and transfer a device from another user.
                    </p>
                    <div className="mt-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Device public key
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    value={publicKey}
                                    onChange={e => setPublicKey(e.target.value)}
                                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    onClick={onClose}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Specifications</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <IconListItem icon={Cpu} label="Processor" value="Apple M3 Pro" />
                        <IconListItem icon={HardDrive} label="Storage" value="512GB" />
                        <IconListItem icon={BoxIcon} label="RAM" value="32GB" />
                        <IconListItem
                            icon={Monitor}
                            label="Display"
                            value='16" Liquid Retina XDR'
                        />
                        <IconListItem
                            icon={Battery}
                            label="Battery"
                            value="Up to 22 hours"
                            showDivider={false}
                        />
                    </div>
                </div>
            </div>
        </PopupWrapper>
    )
}
