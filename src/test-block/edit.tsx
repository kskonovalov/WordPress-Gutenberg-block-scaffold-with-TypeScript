import { __ } from "@wordpress/i18n";
import { BlockEditProps } from "@wordpress/blocks";
import {
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ResponsiveWrapper,
	ToggleControl,
	Button,
} from "@wordpress/components";

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
					{/*{showPrefix && (
						<TextControl
							label={__("Prefix", "test-block")}
							value={prefix}
							onChange={(value) => {
								setAttributes({ prefix: value });
							}}
						/>
					)}*/}
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<PanelBody title={__("Test settings", "test-block")}>
					<ToggleControl
						label={__("Prefix Enabled", "test-block")}
						checked={showPrefix}
						onChange={() => {
							setAttributes({ showPrefix: !showPrefix });
						}}
					/>
				</PanelBody>
			</BlockControls>
			<p {...useBlockProps()}>
				<RichText
					tagName="span"
					value={prefix}
					onChange={(value) => {
						setAttributes({ prefix: value });
					}}
					placeholder={__("Prefix", "test-block")}
					style={{ opacity: showPrefix ? 1 : 0.3 }}
				/>
				{currentDate}
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(mediaObject) => {
							setAttributes({
								media: {
									id: mediaObject.id,
									url: mediaObject.url,
									alt: mediaObject.alt,
									title: mediaObject.title,
									width: mediaObject.width,
									height: mediaObject.height,
								},
							});
						}}
						allowedTypes={["image"]}
						multiple={false}
						render={({ open }) => (
							<>
								{typeof attributes.media !== "undefined" && (
									<ResponsiveWrapper
										naturalWidth={attributes.media.width}
										naturalHeight={attributes.media.height}
									>
										<img
											src={attributes.media.url}
											alt={attributes.media.alt}
										/>
									</ResponsiveWrapper>
								)}
								<Button
									onClick={open}
									variant="primary"
									icon={"upload"}
									iconSize={20}
									iconPosition="right"
								>
									{__("Upload Image", "test-block")}
								</Button>
							</>
						)}
					/>
					{attributes.media && (
						<Button
							onClick={() => {
								setAttributes({ media: undefined });
							}}
							variant="primary"
							isDestructive={true}
							icon={"trash"}
							iconSize={20}
							iconPosition="right"
							style={{ marginLeft: "10px" }}
						>
							{__("Remove Image", "test-block")}
						</Button>
					)}
				</MediaUploadCheck>
			</p>
		</>
	);
}
