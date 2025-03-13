import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { BlockSaveProps } from "@wordpress/blocks";
import { ResponsiveWrapper } from "@wordpress/components";

import { BlockAttributesType } from "./types";

export default function save({
	attributes,
}: BlockSaveProps<BlockAttributesType>) {
	const { prefix, showPrefix } = attributes;
	// Do not include the currentDate in the Save function, otherwise every time it is changed, the block will 'attemt recovery'
	// save only static value
	// const currentDate = new Date().toLocaleDateString();
	return (
		<p {...useBlockProps.save()}>
			{showPrefix ? `${prefix} ` : ""}
			%current date%
			{typeof attributes.media !== "undefined" && (
				<ResponsiveWrapper
					naturalWidth={attributes.media.width}
					naturalHeight={attributes.media.height}
				>
					<img src={attributes.media.url} alt={attributes.media.alt} />
				</ResponsiveWrapper>
			)}
			<InnerBlocks.Content />
		</p>
	);
}
