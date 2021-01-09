import React, { useState } from "react";
import { JsonEditor } from "./jsonEditor/JsonEditor";

export function App() {
	// State
	const [jsonObjsStr, setJsonObjsStr] = useState("");

	// DOM
	return (
		<JsonEditor jsonObjsStr={jsonObjsStr} setJsonObjsStr={setJsonObjsStr} />
	);
}
