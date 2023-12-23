
export interface UIElement {
  api_name: string,
  type: string,
  lable?: string,
  required?: boolean,
  readonly?: boolean,
  max_length?: number,
  min_length?: number,
  default_value?: string
  placeholder?: string,
}