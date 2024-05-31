![](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/66ed8c6f-c0d1-4d3a-9a28-d7bb961827d9)

---            

![](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white) ![](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white) ![](https://img.shields.io/badge/Swiper-6332F6.svg?style=for-the-badge&logo=Swiper&logoColor=white)

![documentation topics](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/0c7da6f7-e8f9-4f7a-a123-dd42d65da2c3)


# ![page icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/d1f791b3-42bb-4b96-9082-d5fc7dfe898e)  [Pages](#pages)

> ## [Layout](#layout)
+ About
+ Components
   1. *Nav*
   2. *Aside*
   3. *Footer*


> ## [Home Page](#homePage)
+   About
 + Components
   1.  *DevChoices banner*
   2.  *Genders Cards*
   3.  *Trending*

#  ![style icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/810f91e7-06cd-4890-835c-0641e4b0e6d1)  [Styling](#styling)

##  [Tailwind](#tailwind)
   1. Why Tailwind?
   2. Style Organization
	
## [Swiper](#swiper-style)
 



![documentation](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/7e234108-0bd0-462a-bc64-28c7ed0ed273)


# ![page icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/d1f791b3-42bb-4b96-9082-d5fc7dfe898e) <a name="pages"></a> Pages  


## <a name="layout"></a>Layout

### ![text svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/b1b615c1-2cae-47fa-8456-32b2901df02b)  About 	    

The Layout is the archive where you will find 3 components shared in every page
Basicaly, elements used in the `Layout` are default components that any page need to have, being `<Nav>, <Aside>,` and `<Footer>`


###  ![component svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/ea3b068e-345d-4414-ab86-a4fc5f24cafe) Components 


> ### Nav

  The `Nav` component will display:

1. The site logo

2. Two elements that redirect the user to pages where they can know more about the project

3. The search movie field
> ###   Aside
   The `Aside` component is used like a menu bar. The user can navegate there to interact with some site funcionalites, like see his own profile, see his reviews not finished, configuration and etc
   This tipe of menu was inspired from the social media [Twiter](https://twitter.com/home?lang=pt)

> ###   Footer
   The `Footer` component will provide the copyright of the page and links to the user see the site repository



###  <a name="homePage"></a>Home Page

###  ![text svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/b1b615c1-2cae-47fa-8456-32b2901df02b)  About  

Resonance is projected to focus in movies and users interactions. With that in mind, the site principal page was designed to make users find movies ( *or genders*) to discover and rate. The user can also search a movie, where he will can interact to in his own page

You can also interact with a banner called "Dev choices", where our devs create a special sections with movies that they like and recommend

In future, we will add components that will interact with the movies that the users friend's are watching, rating or saving. Some examples are componentes that show recent movies rated by your friends, where you can comment, like or quote to make a new rate about a movie 


### ![component svg](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/ea3b068e-345d-4414-ab86-a4fc5f24cafe)  Components 


> ###  "Dev Choices" banner
	Path: `src/app/components/Home\ Page/Dev\ Choice`

   This component is responsible to redirect the user to a page, where a section of movies choiced by the devs will display. Interact with that movies will redirect to the movie page   

   In that component is used the `Next` componet `<Link>` to redirect user 
   
> ### Genders Cards
	Path: `src/app/components/Home\ Page/GenderCarrousel`

   This component is a slider of card that represent each gender that suport the api routes. 
   
   For the creation of the slider, we decide to use the library [Swiper Js](https://swiperjs.com/), to create slides with more responsive and practicals. 
   
   Each slide is composed with a `Link` component, where they receive a `object` in his `href`, being:
   
   + **`href`**: The path to redirect
   
   + **`querry`**:  A querry of the gender from the item selected. That querry will be used to define, in the `search page`, what gender will be searched in the `TMDB api`
   
   (You can see supported genders from the `TMDB api`  [here](https://developer.themoviedb.org/reference/genre-movie-list) for movies, and [here](https://developer.themoviedb.org/reference/genre-tv-list) for tv)

#### Example: 

   In the object above, we are passing the redirect page to `/searchPage` and the gender `action` to the querry

![Gender Object](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/81c259c6-9ea7-4b7b-a9eb-eb80a392cac9)

> ### Trending
	Path: `src/app/components/Home\ Page/Trendings`

   The `Trending` component is created with movies that are trending in `TMDB api`.  It is a simple component that collect a response `Get` result and display then in the `Home Page`
   Each elemente represented with a image, when clicked, will `redirect` the user to the movie page


# ![style icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/810f91e7-06cd-4890-835c-0641e4b0e6d1) <a name="styling"></a>Styling

## <a name="tailwind"></a> Tailwind 

### Why Tailwind?

Since its beginning, **Resonance** was conceived and planned to train and learn some programming skills, including API requests, single-page applications, and new technologies. With that in mind, we agreed to work with Tailwind because that framework is becoming popular, providing simple and truly impressive results in web projects, simplifying the process of styling and programming



### Style Organization 

Even though simplicity and good results, Tailwind can look a little confusing when used with more and more items in attribute `class`. Thinking about that, we have decided to separate every different style into a specific hierarchy. Above you can see an example of how values are separated

![style order img](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/55a93323-138b-41f0-9907-064cbf49b1a7)

 + ### ***Values:***
	  1. **Class** : In the first line of `values`, we reserved to place `classes` that will be used to stylezation, or, in a programing language  
	  
	  2. **Position** : In the second line, we reserved to place `positions` atributes. In that line you can find `values` like: `pading`, `margin`, `position` ....
	  
	  3. **Element sizes** : In the  thirdy line, we reserved to place `sizes` atributes. In that line you can find `values` like: `widht`, `min-widht`, `max-width`, `height`, `max-height`, `min-height` ....
	  
	  4. **Display** : In the fourth line, we reserved to place `display` atributes. In that line you can find `values` like: `flex`, `flex-direction`, `grid`, `grid-columns` ....
	  
	  6.  **Text decoration** : In the fived line, we reserved to place `text-decoration` atributes. In that line you can find `values` like: `font-size`, `font-family`, `text-align` .... (**Note:** That line is not suposstad to recive any text-color atribute)
	  
	  7.  **Border** : In the sixed line, we reserved to place `border` atributes. In that line you can find `values` like: `border-size`, `border-color`, `border-style` ....
	  
	  8. **Background** : In the seventen line, we reserved to place `background` atributes. In that line you can find `values` like: `background-color`, `background-image`, `box-shadows` .... (**Note:** Everything relationed to the `background` should be here) 
	  
	  9.  ** Pseudo class** : In the nineten line, we reserved to place `pseudo class` atributes. In that line you can find `values` like: `hover`, `focus` ....

## <a name="#swiper-style"></a> SwiperJS

### Why SwiperJS?

**Resonance** is a training project. This means that every element, module, component is designed to exercise and acquire more knowledge in front-end development. In the first slides developed for **Resonance**, we encountered a problem: `Next` does not allow developers to use DOM elements in their framework. For that reason, we decided to use an external module to train module import, style definition, and componentization of external frameworks. Besides that, we chose that framework because of its good design and responsiveness.

### Swiper styles config

For now, a single slide is on the homepage, which is the gender carousel (`src/app/components/Home Page/GenderCarrousel/index.tsx`).

The configuration of this slide can be found in its own component directory with the syntax:

![Swiper Configuration](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/640b7171-44d6-4467-a909-b6eb912173f7)


Being:

1.  Direction: The direction of the slide
2.  Loop: Determine if the slide show will end on the last slide or not
3.  Slides per view: How many slides will be shown on the user's screen
4.  Effect: Define an effect style for the slides
5.  Coverflow Effect: Define values for the defined effect
6.  Pagination: Define that we will use pagination under the slides
7.  Navigation: Define what elements will be used to navigate in the slides
8.  Modules: Modules for SwiperJS to work

You can change those values by referring to the [Swiper documentation](https://swiperjs.com/swiper-api).

For a better explanation of how the slides redirect the users, you can see the topic `Pages/Home Page/components`.

![favicon-icon](https://github.com/natanaelRibeiro0/Resonance/assets/137962473/0bd224bf-7740-46b7-b7c6-50bffe160fd8)
> [!Tip]
>You can follow the process [here]([https://resonance-lemon.vercel.app/](https://resonance-ten.vercel.app/))
