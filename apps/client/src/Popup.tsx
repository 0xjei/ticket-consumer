import { useZupassPopupSetup } from "@pcd/passport-interface"
import React from "react"

export default function Popup() {
    const error = useZupassPopupSetup()

    return <div>{error}</div>
}
