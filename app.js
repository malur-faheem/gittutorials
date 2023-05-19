// Assume the JSON data is stored in a variable called 'jobData'
const featuredJobsContainer = document.getElementById('featured-jobs');
const searchForm = document.getElementById('search-form');

// Function to filter jobs based on keyword and location
function filterJobs(keyword, location) {
  // Clear the existing job listings
  featuredJobsContainer.innerHTML = '';

  // Iterate through each job in the featuredJobs array
  jobData.featuredJobs.forEach((job) => {
    // Check if the job title or location matches the keyword and location
    if (
      job.title.toLowerCase().includes(keyword.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    ) {
      // Create the elements for each job listing (same as before)
      // ...
      // Append the elements to the jobItem (same as before)
      // ...
      // Append the jobItem to the featuredJobsContainer (same as before)
      // ...
    }
  });
}

// Function to handle form submission and perform filtering
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the keyword and location values from the form
  const keyword = document.getElementById('keyword-input').value;
  const location = document.getElementById('location-input').value;

  // Filter jobs based on the keyword and location
  filterJobs(keyword, location);
}

// Add event listener to the search form submit event
searchForm.addEventListener('submit', handleFormSubmit);
