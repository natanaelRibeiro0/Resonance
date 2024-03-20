>[!Tip]
>You can follow the process [here](https://resonance-lemon.vercel.app/)


![favicon-icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/0bd224bf-7740-46b7-b7c6-50bffe160fd8)


## [Layout](#layout)
+ About
+ Components
	1. *Nav*
	2. *Aside*
	3. *Footer*


## [Home Page](#homePage)
 + Components
	  1.  *DevChoices banner*
	  2.  *Genders Cards*
	  3.  *Trending*

# <a name="layout"></a>Layout


## About 	  ![text svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/b1b615c1-2cae-47fa-8456-32b2901df02b)  

The Layout is the archive where you will find 3 components shared in every page
Basicaly, elements used in the `Layout` are default components that any page need to have, being `<Nav>, <Aside>,` and `<Footer>`


## Components ![component svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/ea3b068e-345d-4414-ab86-a4fc5f24cafe)


> ### Nav

   The `Nav` component will display the site logo, two elements that redirect the user to pages where they can know more about the project, and the search movie field

> ###   Aside
   The `Aside` component is used like a menu bar. The user can navegate there to interact with some site funcionalites, like see the profile, reviews not finished, configuration and etc
   This tipe of menu was inspired from the social media [Twiter](https://twitter.com/home?lang=pt)

> ###   Footer
   The `Footer` component will provide the copyright of the page and links to the user see the site repository



#  <a name="homePage"></a>Home Page

## About  ![text svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/b1b615c1-2cae-47fa-8456-32b2901df02b)

Resonance is projected to focus in movies and users interactions. With that in mind, the site principal page was designed to make users find movies ( *or genders*) to discover and rate. The user can also search a movie, where he will can interact to in his own page

You can also interact with a banner called "Dev choices", where our devs create a special sections with movies that they like and recommend

In future, we will add components that will interact with the movies that the users friend's are watching, rating or saving. Some examples are componentes that show recent movies rated by your friends, where you can comment, like or quote to make a new rate about a movie 


## Components ![component svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/ea3b068e-345d-4414-ab86-a4fc5f24cafe)


> ###  "Dev Choices" banner
	Path: `src/app/components/Home\ Page/Dev\ Choice`

   This component is responsible to redirect the user to a page, where a section of movies choiced by the devs will display. Interact with that movies will redirect to the movie page   

   In that component is used the `Next` componet `<Link>` to redirect user 
   
> ### Genders Cards
	Path: `src/app/components/Home\ Page/GenderCarrousel`

   This component is a slider of card that represent each gender that suport the api routes. 
   
   For the creation of the slider, we decide to use the library [Swiper Js](https://swiperjs.com/), to create slides with more responsive and practicals. 
   
   The configuration of slides can be found in his own component page with the sintax:
   
![Swiper Configuration](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/640b7171-44d6-4467-a909-b6eb912173f7)
   
   Each slide is composed with a `Link` component, where they receive a `object` in his `href`, being:
   
   1. The path to redirect
   
   2.  A querry of the genders from the item selected. That querry will be used to define, in the `search page`, what gender will be searched in the `TMDB api`

#### Example: 

   In the object above, we are passing the redirect page to `/searchPage` and the gender `action` to the querry

![Gender Object](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/81c259c6-9ea7-4b7b-a9eb-eb80a392cac9)

> ### Trending
	Path: `src/app/components/Home\ Page/Trendings`

   The `Trending` component is created with movies that are trending in `TMDB api`.  It is a simple component that collect a response `Get` result and display then in the `Home Page`
   Each elemente represented with a image, when clicked, will `redirect` the user to the movie page