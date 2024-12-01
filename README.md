# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Dev Notes

[This is the Figma design](https://www.figma.com/design/Lf57jfEvFsQjNZdQi07qyv/Soar-Front-End-Dev-Task?node-id=0-1&node-type=canvas&t=Wl1OJOXC4MFsdmtj-0) that needed to be replicated. I tried to get as close as possible to the original design, but there are some parts, that I think they needed some improvements that I think they needed some adjustments to be more visually appealing.

I will explain them part by part.

## Sidebar

The desing doesn't show up this looks like on mobile when it's open. I respected the desktop design, but made the Soar Task area clickable to hide the menu on mobile.

## Header

For desktop we have settings and notifications buttons, but the desing looses them when moving to smaller screens, so I though to make room for these 2 buttons as well. So instead of having a row with a full searchbar, I added these buttons for small screens too.

Avatar is updated after saving profile.

## Dashboard

Here I chose [Chart.js](https://www.chartjs.org) for the graphics. These charts are quite customizable, but not completely. This means that some of the charts don't look exactly the same as the ones we have in the design, but some changes, were impossible to achieve with real code. For example, Balance History shows Jul as 150 and next month, Aug as 210 (aprox). In between we have a curve around 260 but we have no value there.

# My Cards

2 cards are shown but it is addapted to show multiple within an horizontal scroll. Since the instructions mentioned "appropriate feedback when clicked", the "See All" button just shows a simple message inside the component.
In this component, you can find a comment with the text `NOTE`, so you can easily test it with more cards.

This comment is added also in other components, so you can easily test mocks or different approaches as well.

# Recent Transactions

I replicated the same style but I addapted for even smaller screens. Since it contains 3 columns, I moved the value below the deposit type to save more space. Mock can be tested with more elements.

# Week Activity

Similar to design.

# Expense Statistics

Again, this is not shown for mobile, and having the values on top of the pie, is not a good approach for small screens, so I added the legend and removed the values from the pie for those screens.

# Quick Transfer

This is the component that I changed the most. Design shows a vertically center arrow on the right. This implies that another one on the left should be displayed, but design didn't leave space on the left. I have followed this design, however, this reduces the space dramatically (specially for small screens), because we have arrow + contacts + arrow in same line.

So I also prepared a different approach, following what we had in My Cards and Recent Transactions: a simple and scrollable element. Check the `NOTE` to try both approaches.

The Write Ammount text also moves to top of the input, to leave more space for mobile.

# Balance History

Similar to design.

## Settings

Similar to design showing the 3 tabs with the markers. On mobile I displayed the tabs on top of each other to save again some space and cover ever smaller devices.

# Edit Profile

Enabled view showing 2 columns for tablet.

## Global

# Alerts

Created service to show callback messages (used after saving profile and when See All is clicked). It supports different kind of messages to inform users.

# Responsiveness

As mentioned aboce, extra changes were done taking in consideration missing design, improvements or even much smaller screens.

# Accessibility

The page is completely tested using just the keyboard and it is supported by screen readers.
