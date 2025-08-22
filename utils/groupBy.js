export default function groupBy(arr, groupKey) {
  return arr.reduce((groupedEls, el) => {
    if (!el) return groupedEls; // skip null/undefined

    // Group initialization
    if (!groupedEls[el[groupKey]]) {
      groupedEls[el[groupKey]] = [];
    }

    // Grouping
    groupedEls[el[groupKey]].push(el);

    return groupedEls;
  }, {});
}
