export const Display = {
  // chiếm nguyên 1 dòng, như div
  block: "block",
  // nằm cùng dòng, như span
  inline: "inline",
  // cùng dòng nhưng chỉnh width/height được
  inlineBlock: "inline-block",
  // layout theo hàng/cột, rất hay dùng
  flex: "flex",
  // flex nhưng nằm cùng dòng
  inlineFlex: "inline-flex",
  // layout dạng lưới
  grid: "grid",
  // layout dạng lưới
  inlineGrid: "inline-grid",
  // ẩn element
  none: "none",
} as const;