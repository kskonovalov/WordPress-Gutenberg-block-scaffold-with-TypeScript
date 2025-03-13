import { registerBlockType, BlockConfiguration } from "@wordpress/blocks";

import metadata from "./block.json";
import edit from "./edit";
import save from "./save";
import { BlockAttributesType } from "./types";

import "./style.scss";

registerBlockType<BlockAttributesType>(metadata.name, {
	...(metadata as Partial<BlockConfiguration<BlockAttributesType>>),
	edit,
	save,
} as BlockConfiguration<BlockAttributesType>);
