## folder structure
- node_modules = > stores module of projects such as react,bable,react-dom other packages
- public => stores static file or data such as assests,favicons , scripts to add in index.hmtl
- src => this is the main source of our react app
  - assets ==> stores images and other files 
  - App.css ==> stylesheet file (name can be changed)
  - main.css ==> main stylesheet file (name can be changed)
  - Main.jsx ==> this is the entry point file to index.html (ye main file h js ki project k liye )
  - App.jsx => this is the main component file for our react app
     -dir: components ===> component files e.g Navbar , MyButton 
           pages or screen ===> pages files (components) of website  

- .gitingnore => this is the file for git hub to ignore items tracked by git 
- eslint ==> error and syntax error detection
- index.html ==> this is the main file which is read by browser
- vite.config.js == > this holds vite config settings

###  jsx rules
 class ===> className
 style ===> style uses and takes a object instead of strings
 js use ==> can use js in html code i.e jsx  by curly bracket {// write js code }


### architecture react follows
 -- atomic architecture 
 -- atom === > small codes like button , card
 -- molecules ===> NavBar 
 -- organ ==> page 
 -- body ==> app


### props == > properties passed to any component (input ,arguments )

```function NavBar({title,imageUrl}){
  return(<>
    <h1>{title}</h1>
    <img src={imageUrl}>
    </img>)
}
<NavBar title={"navigation bar"} imageUrl={"https://image.com/123.png"}/>
<NavBar title={"sub menu"}/>

```



### state management and HOOks 
- Hooks ==> hooks are predefined function in react js 
 -- how to identify a hook --> a hook always starts with use . example useState, useEffect,useLayoutEffect,useRef many more...

 #### state management 
 - hook 1 - useState