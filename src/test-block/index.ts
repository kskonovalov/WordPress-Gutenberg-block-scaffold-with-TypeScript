import { registerBlockType, BlockConfiguration } from "@wordpress/blocks";

import metadataRaw from "./block.json";
import edit from "./edit";
import save from "./save";
import { BlockAttributesType } from "./types";

import "./style.scss";

type BlockAttributesType = typeof metadataRaw.attributes;
const metadata: BlockConfiguration<BlockAttributesType> = {
	...metadataRaw,
};

const blockConfig: BlockConfiguration<BlockAttributesType> = {
	...metadata,
	edit,
	save,
};

registerBlockType(metadata.name, blockConfig);
