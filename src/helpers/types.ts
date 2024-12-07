export type Tool = "fraud-detector" | "audit" | "rug-pull-detector";
export type Network = "ETH" | "POLYGON" | "BNB";

export type OptionType = {
    value: Network;
    label: string;
    icon: string;
};