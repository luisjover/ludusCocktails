# 🍸​ LUDUS Team Party 🍸​


<img width="200"  alt="iphoneApp" src="https://github.com/luisjover/ludusCocktails/assets/129792624/3dbff5a6-a5b5-4df5-9a17-6a4b123a145c">
<img width="600"  alt="macbookApp" src="https://github.com/luisjover/ludusCocktails/assets/129792624/19d86629-728d-4b58-a968-eafdcabc163f">
<img width="200"  alt="ipadApp" src="https://github.com/luisjover/ludusCocktails/assets/129792624/82d3c4e4-1733-4cd9-b1fa-598e4f5f1e65">




## Table of Content:

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [Future Improvements](#future-improvements)

## About

Small application that consumes data from a drinks and cocktails API and returns it in an interface prepared to search by main ingredient and return six drinks at random, offering non-alcoholic ones first (if you drink, don't drive).

It is fully responsive, working correctly on any device, whether mobile, tablet or desktop.

Check deployed project <a href="">here</a>


## Technologies
- HTML
- CSS
- TypeScript
- Vite
- React.js
- react-icons
- react-spinners
- react-router-dom
- Axios
- Tailwind CSS


## Setup
```
git clone https://github.com/luisjover/ludusCocktails.git

```

```
npm install

```

```
npm run dev
```


## Future Improvements
- Authenticate the user: I would like to implement a login with Auth0 or some similar tool. Using the login email (login with GitHub) the application is prepared to, with a few simple adaptations, show its own repositories to the user who logs in, instead of mine.
- Replace authentication with Github token with authentication with App: I would like to make the authentication process dynamic, so that you would not have to go to GitHub to generate the access token, replacing it with a JWT, in this case for example Auth0.
- Being able to see the repositories of other users: the two queries (userData and repositoriesData) have been built with variables, so that in the future it would be easy to add a small search engine to see not only my repositories, but those of any user.
- Implement tests
- Implement StoryBook and create variants for components


## 🍸​ <a href="">Grab your drink!</a> 🍸​
