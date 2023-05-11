<!-- the common folder hads all of the react components, hooks, type definitions, and all of the basic features of our app that dont belong to one specific FEATURE and we wil make modules for them
common folder contains general items that beloong to one of these main features like the home page or some typed definition or buttons or navbar that could be used evrywhere-->

<!-- MODULES or FEATURES folder has components that perform specific and probably user specific features  -->

<!-- layout wraps around or is like a wrapper for other elements -->

<!-- Home page may be under module if you have a lot of functionalities under it, ESPECIALLY user controlled functionalities -->

<!-- if possible, we do not want to add the router in the main file beacuse we may want other components to wrap around all the pages for example lets say we have user accounts, so we want to have in our user account, WHICH USER IS LOGGED IN AS A VARIABLE, and I want to be able to give all the pages and components access to that user so that we could use something like react CONTEXT. So we will have some kind of context component in the main.jsx wrapping around the Router. We may need the context for other things and as such we may need it for other stuff and as such there may be 5 or 6 or more elements -->

<!-- CONTEXT IS A COMPONENT THAT IS USED TO WRAP AROUND OTHER THINGS and provide context to sub components. ie it allows you to expose values to multiple components or even a global value. basing it to all components -->

<!-- Instead of having the Routes inn the main file which is the react process starter, I'll create the Providers folder in the common folder. And then create an AppProvider which takes any provider we want to give globally to the whole application and just render them around all of the other child components of that provider -->

<!-- anything in public folder is accessible as though it was in the root folder with '/item -->

<!-- PAGES should be used to get information idealy through hooks because data fetching can be many lines of code -->

<!-- We need to store in a global accessible state the user that is logged in and then consume the user in the profile page so that we can for example read information about the user like the username, remove the LOGIN and SIGNUP options, etc. To achieve this, I set up a CONTEXT provider for the user MODULE it stores which user is logged in ad then expose that data to any component that needs it (maximum of 15 components deep) and then I want to consume the CONTEXT in the component where I need it -->

<!-- LOGIN is part of the USER module because loging in has to do with users -->

<!-- UserContextProvider recieves information from the server (or wherever) for the user -->