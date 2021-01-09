import React from "react";
import PropTypes from "prop-types";
import styles from "./editor.module.css";

export function JsonEditor(props) {
	// Props
	const { jsonObjsStr, setJsonObjsStr } = props;

	// DOM
	return (
		<textarea
			className={styles.editor}
			value={jsonObjsStr}
			onChange={(event) => {
				setJsonObjsStr(event.target.value);
			}}
			placeholder="Start writing JSON..."
		/>
	);
}

JsonEditor.propTypes = {
	jsonObjsStr: PropTypes.string.isRequired,
	setJsonObjsStr: PropTypes.func.isRequired
};
