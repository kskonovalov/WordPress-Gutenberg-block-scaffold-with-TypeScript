import { __ } from "@wordpress/i18n";
import { BlockEditProps } from "@wordpress/blocks";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

import { BlockAttributesType } from "./types";
import "./editor.scss";

export default function Edit({
	attributes,
	setAttributes,
}: BlockEditProps<BlockAttributesType>) {
	const currentDate = new Date().toLocaleDateString();
	const { prefix, showPrefix } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Test settings", "test-block")}>
					<ToggleControl
						label={__("Prefix Enabled", "test-block")}
						checked={showPrefix}
						onChange={() => {
							setAttributes({ showPrefix: !showPrefix });
						}}
					/>
					{showPrefix && (
						<TextControl
							label={__("Prefix", "test-block")}
							value={prefix}
							onChange={(value) => {
								setAttributes({ prefix: value });
							}}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
				{showPrefix ? `${prefix} ` : ""}
				{currentDate}
			</p>
		</>
	);
}
