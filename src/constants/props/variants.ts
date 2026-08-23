export const ButtonVariant = {
  text: "text",
  outlined: "outlined",
  contained: "contained",
} as const;

export const ChipVariant = {
  filled: "filled",
  outlined: "outlined",
} as const;

export const TextVariant = {
  // Tiêu đề chính lớn nhất, thường dùng cho tiêu đề trang hoặc hero title
  h1: "h1",

  // Tiêu đề cấp 2, dùng cho section lớn dưới h1
  h2: "h2",

  // Tiêu đề cấp 3, dùng cho nhóm nội dung lớn
  h3: "h3",

  // Tiêu đề cấp 4, dùng cho tiêu đề khu vực hoặc card lớn
  h4: "h4",

  // Tiêu đề cấp 5, thường dùng cho topbar page, dialog title, card title
  h5: "h5",

  // Tiêu đề cấp 6, dùng cho tiêu đề nhỏ trong section/card
  h6: "h6",

  // Text phụ lớn, thường dùng cho mô tả ngắn dưới tiêu đề
  subtitle1: "subtitle1",

  // Text phụ nhỏ hơn subtitle1, dùng cho mô tả phụ hoặc metadata
  subtitle2: "subtitle2",

  // Nội dung chính, dùng cho đoạn văn hoặc text bình thường
  body1: "body1",

  // Nội dung phụ nhỏ hơn body1, dùng cho mô tả, note, thông tin phụ
  body2: "body2",

  // Chữ rất nhỏ, dùng cho ghi chú, trạng thái, timestamp, helper text
  caption: "caption",

  // Text dùng trong button, thường in đậm hơn và tối ưu cho label hành động
  button: "button",

  // Label nhỏ, thường viết hoa, dùng cho nhãn nhóm hoặc tiêu đề phụ rất nhỏ
  overline: "overline",
} as const;