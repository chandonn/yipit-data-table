## Pros:

- Lightweight solution with minimum libraries
- Pure CSS
- CSS variables, giving more reusability
- Uses Context API
- Uses TypeScript
- Mostly typed
- Similar representation of the base design

## Cons:

- The data table component is not dynamic enough
- Table cells could have their component or builders
- An icon library with unnecessary icons
- Not 100% typed

## The most complex/time-consuming feature:

- Spend more time on the visuals and styles to get the most pixel-perfect possible without a design file to follow up with.

## How much time it took to build the test:

- Took about 5 hours, counting only the working time and removing the pauses.

## What would I have done differently provided more time:

- Add light and dark color scheme
- Add async services
- Improve on mobile experience: display table cells as a list with a button on every data row, preventing the need to scroll the table
- Add action to the "Plus button": open details of that particular row, such as financial information on that company
- Add action to the "Document button", one or both:
    + open the financial raw data that leads to the aggregated information
    + download the full report
- Build the Data Table more dynamic, rendering the data cells by their cell props
- Create a cell component to render complex data in a dynamic and independent way
- Type the full application codes
- Add the ordering functionality to order by the column value, as presumed from the second column head with a down arrow
- Replace the icon library with only one, and replace the aggregated icons
- Improve the `dateFormat` function, from the `utils` folder, to calculate the relative date and return the relative time string dynamically
