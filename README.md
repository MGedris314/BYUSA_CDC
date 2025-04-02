# Your startup name here

[My Notes](notes.md)

A brief description of the application here.

The application I plan on building will be a web page based around the Country Swing dance club here at BYU.  It will function in a few ways, the first will be more of a calandar that updates as the weeks go and it will mention the moves covered in instruction and the line dance taught.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Being a part of this club has been fun for the first semester, but I've also had a few moments over break and even in the semester where I couldn't remember some of the things we taught.  What I'm looking to accomplish with this website is to give refreshers for steps and moves taught durring certain week.  I also want it to say what the line dance(s) taught that week were, and if I can I'd like to link videos as they get uploaded.

### Design

![Design image](Rough_Sketch.png)

This will be coming later when I understand how to use the mermaid language.
```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
```

### Key features

- A semester long calandar that will update weekly with what is going to be taught/ what has been taught.
- A club comitee sign in option to update the calandar.
- Possibly videos/tutorials of certain dance steps; if that doesn't work, links to places that do.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Five different view ports.  Main page with schedule and lessons, Admin log in page, Video page, page for Admins to adjust the calandar, club information page.
- **CSS** - Help build out a country esc feel to the page.
- **React** - Roating views with a root to a single page, interaction to move back and forth between months and possible links to tutiorials.
- **Service** -  Authorizing committee members and make sure they are the only ones changing things on the calandar.
- **DB/Login** - Store log in info for the club committee.
- **WebSocket** - Give latest updates for lessons taught that week and who updated it.


[]: # (Stop Here for Tuesday!!!!)

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Built out the required pages for functionality
- [x] **Proper HTML element usage** - As far as I can tell the HTML syntax is correct.
- [x] **Links** - I've linked buttons to other HTML pages.
- [x] **Text** - Not sure what you want on this one, but there's text on my pages.
- [x] **3rd party API placeholder** - Place holder is on the Calandar page.
- [x] **Images** - Place holding images at this point, but they're there.
- [x] **Login placeholder** - See Admin_login.
- [x] **DB data placeholder** - There will be a place on the calandar page that holds information for when admins are loged in to edit the calandar.
- [x] **WebSocket placeholder** - On the calandar page where updates will be posted.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Didn't feel there was a need for a footer for this project, but head and body are there.
- [x] **Navigation elements** - Buttons from last time.
- [x] **Responsive to window resizing** - They respond.
- [x] **Application elements** - Not entirely sure what this was supposed to be, but I think I got it done.
- [x] **Application text content** - Not entirely sure what this was supposed to be, but I think I got it done.
- [x] **Application images** - Not entirely sure what this was supposed to be, but I think I got it done.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I was told that it bundles automatically with the push code.
- [x] **Components** - All have been moved over.
- [x] **Router** - Routers are working.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I have mapped using Express functions.
- [x] **Hooks** - I believe I have used hooks correctly, please correct me if I'm wrong.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Up and running.
- [x] **Static middleware for frontend** - Up and running.
- [x] **Calls to third party endpoints** - This should be working
- [x] **Backend service endpoints** - Up and running.
- [x] **Frontend calls service endpoints** - This should be working

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **User registration** - Works and is connected to the database
- [x] **User login and logout** - Works works with the database
- [x] **Stores data in MongoDB** - Storage is functioning
- [x] **Stores credentials in MongoDB** - Storage is working
- [x] **Restricts functionality based on authentication** - Doesn't allow for changes in a certain place if they aren't an admin.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.