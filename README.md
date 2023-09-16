# Project Features

I built a course registration website with react. In my website , I have some
exciting features:

- **Course Selection:** Users can easily add courses to Course Name list for future reference or planning. The website simplifies the process of selecting courses of interest and provides an intuitive interface for managing their selections.

- **Credit Hour Management:** The website offers users the ability to add credit hours for each course they select. It simplifies the process of tracking and managing the credit hours associated with their chosen courses.

- **Remaining Credit Hour Display:** The website displays the remaining credit hours prominently, allowing users to easily monitor and keep track of their available hours as they add courses to their list. This feature helps users stay within their credit hour limits and make informed decisions when selecting additional courses.

- **Interactive User Interface:** The website provides an interactive and visually appealing user interface. Users can view course details, including images, names, prices, and credit hours, and make selections with a "Select" button.

# How I managed the state in my assignment project

&emsp;&emsp;&emsp;In my course registration assignment project, I managed state using React's useState hook. I declared and controlled several state variables, including **cards**, **listName**, **addCredit**, and **remainingCredit**. When I interacted with the project, such as adding a course, I updated these state variables as needed. For example, with the **cards** state variable, I rendered all the cards. I used **setCards** function to set the data in **cards** . Then, when I added a course, I updated the **listName** to maintain a list of selected courses. The **addCredit** state variable kept track of the total credit hours selected, and **remainingCredit** reflected the available credit hours after my course selections.

&emsp;&emsp;&emsp;These state variables, once updated, dynamically influenced the rendering of components and UI elements in response to my actions, ensuring that the project remained interactive and responsive.
