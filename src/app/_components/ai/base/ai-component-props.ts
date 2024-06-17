export type TemplateTheme =
  | "minimal"
  | "gradient"
  | "dark"
  | "corporate"
  | "neo-brutal";

export type AiComponentProps = {
  theme?: TemplateTheme;
  title?: string;
  subtitle?: string;
};
