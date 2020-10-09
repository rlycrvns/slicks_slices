const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function formateMoney(cents) {
  return formatter.format(cents / 100);
}
