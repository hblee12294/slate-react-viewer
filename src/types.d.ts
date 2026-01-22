import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

/* Custom Element Types */
export type ParagraphElement = {
  type: "paragraph";
  align?: string;
  children: CustomText[];
};

export type HeadingElement = {
  type: "heading-one" | "heading-two";
  align?: string;
  children: CustomText[];
};

export type BlockQuoteElement = {
  type: "block-quote";
  align?: string;
  children: CustomText[];
};

export type ListElement = {
  type: "bulleted-list" | "numbered-list";
  align?: string;
  children: ListItemElement[];
};

export type ListItemElement = {
  type: "list-item";
  align?: string;
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | BlockQuoteElement
  | ListElement
  | ListItemElement;

/* Custom Text Types */
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
