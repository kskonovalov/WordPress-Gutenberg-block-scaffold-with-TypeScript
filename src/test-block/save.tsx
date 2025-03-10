import { useBlockProps } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import { ResponsiveWrapper } from "@wordpress/components";

import { BlockAttributesType } from "./types";

export default function save({
	attributes,
}: BlockSaveProps<BlockAttributesType>) {
	const { prefix, showPrefix } = attributes;
	console.log("save", prefix);
	const currentDate = new Date().toLocaleDateString();
	return (
		<p {...useBlockProps.save()}>
			{showPrefix ? `${prefix} ` : ""}
			{currentDate}
			{typeof attributes.media !== "undefined" && (
				<ResponsiveWrapper
					naturalWidth={attributes.media.width}
					naturalHeight={attributes.media.height}
				>
					<img src={attributes.media.url} alt={attributes.media.alt} />
				</ResponsiveWrapper>
			)}
		</p>
	);
}
