import React from "react";
import styles from "./dirty.module.css";

export function DirtyView() {
	return (
		<textarea
			className={styles.editor}
			placeholder="Start writing JSON..."
		/>
	);
}
