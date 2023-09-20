/* eslint-disable react/prop-types */
import { useEffect } from "react"



const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000)
    }, [closeModal]);

    return (
        <div className="w-full px-3">
            <div
                className={"max-w-6xl mt-2 mx-auto px-5 py-5 bg-gray-200 text-green-600 items-center rounded-xl"}>
                <div className="flex gap-2 flex-row items-center">
                    <i className="fas fa-check"></i>
                    <h2 className="text-base font-semibold">{modalContent}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal