import { useBlockProps } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";

import { BlockAttributesType } from "./types";

export default function save({
	attributes,
}: BlockSaveProps<BlockAttributesType>) {
	const { prefix, showPrefix } = attributes;
	const currentDate = new Date().toLocaleDateString();
	return (
		<p {...useBlockProps.save()}>
			{showPrefix ? `${prefix} ` : ""}
			{currentDate}
		</p>
	);
}
