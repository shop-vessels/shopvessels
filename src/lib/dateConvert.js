// Function to format a date string from ISO format to "JULY 18, 2023" format
export function dateFormateForBlog(dateString) {
  // Create a new Date object from the ISO date string
  const date = new Date(dateString);

  // Define the desired formatting options
  const options = {
    month: "long", // Full month name (e.g., "July")
    day: "numeric", // Day of the month (e.g., "18")
    year: "numeric", // Full year (e.g., "2023")
  };

  // Use Intl.DateTimeFormat to format the date according to the options
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Convert the formatted date string to uppercase
  return formattedDate.toUpperCase();
}
