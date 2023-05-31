  // Get the grid container element
  const gridContainer = document.getElementById('gridContainer');

  // Create 3 rows and 3 columns
  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      // Create a new grid item element
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';

      // Create an h1 or h2 element based on the row number
      const heading = document.createElement(row === 1 ? 'h1' : 'h2');
      heading.textContent = `Row ${row}, Column ${col}`;

      // Append the heading to the grid item element
      gridItem.appendChild(heading);

      // Append the grid item to the grid container
      gridContainer.appendChild(gridItem);
    }
  }