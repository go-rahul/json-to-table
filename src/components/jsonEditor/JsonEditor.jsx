import React from "react";
import styles from "./editor.module.css";

export function JsonEditor() {
	return (
		<textarea
			className={styles.editor}
			placeholder="Start writing JSON..."
		/>
	);
}
