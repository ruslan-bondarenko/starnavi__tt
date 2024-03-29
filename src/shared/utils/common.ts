export const formatDate = (timestamp: string): string => {
  const date = new Date(parseInt(timestamp));
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};

export function generateRandomNumber(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getIdFromUrl = (url: string) => url.split('/').reverse()[1];