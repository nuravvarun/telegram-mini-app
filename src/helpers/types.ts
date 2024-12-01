export type Tool = "fraud-check" | "wallet-audit" | "rug-pull-check";
export type Network = "ETH" | "POLYGON" | "BNB";

export type OptionType = {
    value: Network;
    label: string;
    icon: string;
};