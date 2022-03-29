export function paginate(items, currPage, pageSize) {
  // Start Index
  const index = (currPage - 1) * pageSize;
  // StartIndex & endIndex
  return items.slice(index, index + pageSize);
}
