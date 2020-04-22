const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(new Date(date));

export default formatDate;
