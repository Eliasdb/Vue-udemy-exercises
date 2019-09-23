# Learning Vue

## Chapter 1: Getting Started

**Properties**

- Runs in the browser
- Very reactive
- Extremely lean file size(16kb)
- Great runtime performance(fast)
- Feature-rich


**Installation**

CDN: copy link and import it


**First application(hello world)**

- New Vue(argument) is the instance of an object(data-object). 
- El: #app refers to the div where we output the JS data, it's the location of a Vue object.

**Extending the application**

- v-on directive -> special Vue command Vue/eventlistener
- input -> name of event
- input=“” -> what you want to happen at that event
- changeTitle -> method you can create in JS(method!)
- this.title -> access to all the data(title) + methods
- event.target.value -> title equals input value


**Course structure(4 projects + quick exercises)**

Intro -> DOM(templates) -> understanding VueJS instance -> Vue CLI -> components -> forms -> directives, filters and mixins -> animations and transitions -> working with HTTP -> routing -> state management -> deployment
	

**Setting up locally**

Adding vue.js file in project folder, link it on top!



## Chapter 2: DOM interaction


**Understanding VueJS templates**

Vue creates templates based on HTML, stores it internally and uses it to create the real HTML code, which is then rendered as the DOM.  Vue basically is the layer in the middle.


**Vue Template Syntax and instance**

You can execute functions in between the curly braces, too. It returns something that can be output in the DOM, it has to be something which can be converted to a string though. Take a look at ‘sayHello’. Here we see we can also access anything in the methods property.


**Accessing data in the Vue instance**

This.title refers to ‘title’ in the object ‘data’, we can use it in the function to display it in the DOM.


**Binding to attributes**

If you try to add a hyper link through the instance, it gives you a 404. It tries to parse the curly braces as a link. This is normal; we can’t use curly braces in any HTML element attribute. Only where you would normally use text.

*How do you bind it dynamically?*

V-bind directive: so it knows not to use the normal attribute, instead bind it. 
By setting it up like this, we can now pass a link without curly braces, because we are in the VueJS template language.


**Understanding and using directives**

A directive is basically an instruction you place in your code. There are not that many, but it’s all you need for most cases. You can also write them yourself. The v-bind directive tells Vue to bind something to its data which is stored in the Vue instance. You’re passing arguments after the semi colon, which is the href here, then in the quotation marks you pass the property, function, whatever you want to bind from your Vue instance, the link in this case.


**Disable re-rendering with v-once**

You can overwrite the value of title on execution, with whatever you want. All usages get re-rendered. There is a directive which is called v-once, by adding this to an element, all the content inside of this element will only be rendered once, it will not be updated if it changes later on. It keeps its initial value. 


**Outputting raw HTML with v-html**

By default, VueJS escapes HTML. It doesn’t render its elements, it only renders text. This behaviour ensures that we don’t run into any problems with cross-site scripting attacks. With v-html, another directive, placed on the element where you want to output the code, you can pass the name of the property which holds the HTML code. This is to be done only if you know the source is clean or sanitised though.


**Listening to events**

V-on listens to something, an event. For example ‘click’, ‘mouse enter, ‘mouse leave’ and other default DOM events are on the element. In quotation marks you put the code you want to execute when clicking on the button. 


**Getting event data from the event object**

The default event created by JavaScript or by the DOM which holds information, for example the coordinates of where this click event happened. This shows us that we can listen to events other than click and it shows how we can pass this event object which is created automatically and use it as we do in the exercise.


**Passing own arguments with events**

We can add our own arguments and automatically created events at ‘increase’. See 2.2 for a clearer view.


**Modifying an event**

We can use stopPropagation which means only handle the element here in this handler, don’t let it propagate up to any elements which might hold this element

• event.stopPropagation = The dead spot works, it’s not being propagated from the previous function.

Another thing you can use is a modifier, an event modifier, stopping the propagation of the event. Adding .stop after the event, will do the same thing without having to add the dummy function. Another modifier for example is .prevent, it prevents default. 

*Side note: You can chain them if need be by adding .prevent right after .stop. Check [further documentation](https://vuejs.org/v2/guide/events.html#Event-Modifiers).*


**Listening to keyboard events**

We also have key modifiers. For example, v-on:keyup.enter: enter is the key modifier here. There are also other ones like .tap, .esc, .space. You can also chain these, like the other event modifiers. These modifiers enable us to listen to specific keys. Check [this](http://vuejs.org/v2/guide/events.html#Key-Modifiers).


**Writing Javascript code in the templates**

You could add ‘counter++’ on a button and it will do it, the same for {{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10' }}.
If it’s greater than 1	0, it will tell you, otherwise the latter. It’s easier to just see the code. Just keep in mind that you can use JS and HTML combined in the template as long as you use template expressions like the double curly braces. It creates a strong connection between your template(HTML) and your Vue instance(JS).


**Two-way-binding**

We saw how we could output data. For example string interpolation, like Max is output through ‘name’. We saw eventlisteners, where they listen to key up for example. Here’s a way of doing both: two-way-databinding.

v-model directive: Setting up two way data binding for the input. Between the quotation marks, the property which we want to bind in both directions. In this case ‘name’.
This does two things: 
1. Output the name in the input field
2. Listen to changes and update the name property
-> this does v-on + v-bind at the same time


**Reacting to changes with computed properties**

To reiterate: A vue instance consists of
1. el: connect to DOM	
2. data: store data to be used
3. methods: the methods of this due instance
4. computed: dependent properties

The computed property or object here also allows us to store properties for example output, do not reuse result(2.4). But here it is not directly the data, it is also a function.
It looks the same, but we use it differently. We use it like a property, not like a function. Everything stored in computed can be used just like you use a property in the data object. It doesn’t even execute on clicking ‘increase second’. 


**An alternative to computed properties: watching for changes**

The fifth new object we are learning about is watch: it executes code upon data changes. You set the property you want to watch, for example counter. Then as a function you specify what you want to execute whenever the counter changes. It passes the value of the upcoming change to the function. This is great if you need asynchronous tasks to run. Computed properties always need to run synchronously, which means that needs to happen as soon as possible or immediately. You can’t do an asynchronous task in between. You can add a timeout function. It reacts on changes of whatever property you set as a key, in this case the counter.


**Saving time with shorthands**

- @click = v-on
- : = v-bind
Basically just shorter ways of writing code.


**Dynamic styling with CSS classes - basics**

Attaching CSS classes in the application is pretty easy. You can integrate them in your HTML with :class, then referring to the CSS classes used. This is VueJS syntax, which binds to it, but treats it all as one class. Video 2.23(exercise 2.6) is a great easy to understand example.


**Dynamic styling with CSS classes - using objects**

Here we can make computed properties, which does the same thing: it’s just outsourced to the Vue instance in computed, making our code leaner. 


**Dynamic styling with CSS classes - using names(!)**

It’s probably easier to just look at 2.24 and exercise 2.6, because it is too long to type it all out. Key-pair with name and condition.


**Setting styles dynamically without CSS classes(!)**

Directly interacting with styles attached to an element so you don’t have to use classes necessarily. Let’s say you only want to change the style, the colour. This can be done with :style=“{‘background-color’}”, with the quotation marks being there because dash is not a valid character or by removing the quotations marks and using the following camel case syntax: :style=“{backgroundColor: color}”.  Again, take a look at the exercises again, they are much easier to follow.


**Styling elements with the array syntax**

You can also use arrays, like [myStyle, {height: width + ‘px’}] to style as you can see in 2.7.



## Chapter 3 - Using conditionals and rendering lists

**Conditional rendering with v-if**

In this exercise, we are showing and hiding or attaching and detaching elements to the DOM.  You see it everywhere in applications, for example sometimes you only want to show an error message. Let’s say in case of a wrong input. VueJS has methods to allow us to just do that.

- v-if: it allows us to bind it to a condition or to a property whatever which resolves to true or false
- v-if=“show”: what’s it binding to
- @click=“show = !show”: doing the exact opposite of show
-> let’s text disappear

It’s not hidden, it’s not transparent. It’s gone(put this in bold). It’s important to understand, v-if really attaches or detaches elements to the DOM. It completely removes them if the condition is false here. This is also true for nested elements in the complete element, for example a span in a paragraph. 

* v-else: Whenever the v-if condition is false, this happens, which makes sense like a normal if-else statement.

*Side note: If you’re using Vue 2.1 or higher, you now have access to a v-else-if directive, have a look at this link to learn more: [click here](https://vuejs.org/v2/guide/conditional.html#v-else-if).*


**Using an alternative v-if syntax**

We can also use the template tag, to wrap multiple elements in a v-if condition. It groups all the elements together and it’s not visible in the console. An alternative would be a div, but you don’t want the side effect div introduces, so template v-if would be a valid option to group multiple elements.

**Don’t detach it with v-show**

V-if as mentioned before completely attaches or detaches an element to the DOM. It doesn’t hide it. If you want to hide it, you can use v-show instead. It toggles between visible and invisible. Also in the console it’s not removed completely, it just adds ‘display: none’ to it as styling.  That’s the key difference, it’s still there; it’s just not displayed anymore through CSS. It’s still in the DOM. V-show only hides and doesn’t remove it entirely. The default though will be v-if, as it is also better performance-wise to have less elements in the DOM. It makes sense removing not required elements. But if you have a special case where you absolutely need it, use v-show.


**Rendering lists with v-for**

The v-for directive allow us, like a normal for-loop, to loop through an array and replicate the element on which v-for sits as often as needed and additionally also pull out the content in the array for the current iteration and use it in the template. You use it to loop through an array or any property which happens to be a list or iterable. In exercise 3.2, you can see the following code:

	<li v-for=“ingredient in ingredients”> {{ ingredient }}</li>

It’s looping through the array of ingredients through a sort of variable ‘ingredient’ (you can choose the name). You can then use this variable, which Vue.js creates during the loop with {{ interpolation }} here for example to output it.

*Side note: You can use it like you use any other property, so I could also bind to the reference of a link. I can pass it to a function call when listening to an event. Vue.js just creates it dynamically for you instead.*


**Looping through objects or a list of numbers**

I suggest looking at the code, which is clear as it is. I’ve added some comments as well to further clarify the looping. 


**Keeping track of elements when using v-for**

There is one more important thing you got to know about the for loop in Vue.js. The for loop, as we use it here, works fine. It’s important to understand what happens behind the scenes though. If Vue.js needs to update one of these values because somewhere in your code, you change one of the elements here. Take a look at the following code:

	<button @click="ingredients.push('spices')">Add new</button>


This pushes whatever you choose to your array. It works fine. Two things to be noted here:

1. Vue.js proxies this push method because generally, the push method does not create a new array, it simply adds items to the existing one and that’s hard to track since the object itself(persons) doesn’t change here because it’s a reference type and the pointer to the type hasn’t changed, only the value in memory.
2. How does Vue update this list if some item needs to be changed or something like that? It updates the list by simply updating the position in the array where something changed. It does not keep track of the specific element it created, it will only patch it in the second position. Oftentimes, this is the behaviour you want, but if you want to be safe and you want to make sure that Vue.js is not only aware of the position, but of the actual list item on which the value you’re working with sits, you need to assign a unique key to that list item. You can do this, as seen in 3.2, by using the shorthand :key=“ingredients”. This is unique value. You know that each ingredient will only be on this list once, you might very well use that as a key here. If we now re-render, this works the same, but behind the scenes, you are now safe and Vue.js not only stores the position of the element but the element itself which means should it ever need to reorder then, or do something like that, it will take the actual element and reorder it and not just override the values in some of the positions it finds in the array. If you run into bugs with your for loop, check if you assigned a key. 



## Chapter 4 - First course project: The Monster Slayer

I’ve added comments to the code to quickly see what does what while reviewing. The following space is used to go in depth about some harder structured code. 

Important note: The finished code looks different than the code below, because these are just examples of basic concepts, which I might reuse later. The final version of the code has been refactored and outsourced in different functions. This just serves getting the logic behind the code.

For example:

1. On the attack method, we want to randomise damage between 3 and 10, which looks like this:

- var max = 10
- var min = 3
- var damage = Math.max(Math.floor(Math.random() * max) + 1, min)

Steps:

1. var damage = Math.random() // A random number between 0 and 1; 1 excluded.
2. var damage = Math.random() * max // A random number between 0 and 10, 10 excluded. So 0 - 9.999…
3. var damage = Math.floor(Math.random() * max) // A random number between 0 and 9.
4. var damage = Math.floor(Math.random() * max) + 1 // A random number between 0 and 10. 
5. var damage = Math.max(Math.floor(Math.random() * max) + 1, min) // If the random number is 1 or 2, then we’ll take the minimum 3, otherwise we will take the random number. Thus the damage gets a random number from 3-10.
