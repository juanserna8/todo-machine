import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>There was changes</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Reload the information
                </button>
            </div>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };