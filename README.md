# Real_W_Vue3_app_1

- from the Vue Mastery course: Real Worl Vue 3



# Part 1 

- set up the base for the app
	-- initialize the project and the basic foldrs and components

- customize the vue app and the components as needed


# Part 2

1. create a mock DB for the events


- to access the fake server (https://my-json-server.typicode.com/) with the dummy data we are providing (data/db.json) use the following URL:

	-- my-json-server.typicode.com/{GithubUserName}/{RepoName}/events

	my-json-server.typicode.com/Carlosdvp/Real_W_Vue3_app_1/real_w_vue_app_1/data/events



2. install Axios to make API calls

- To write our API call, we’ll head into the EventList.vue component, delete out the hard-coded events data, import Axios, then add the created lifecycle hook.



3. implement a getEvents() api call

- In our case, we want to make our API call and get our events when the component is created, so we’ll run the get method available to us on axios, passing in the my-json-server url as the argument (where we want to get from).



4. Refactor api code into service layer