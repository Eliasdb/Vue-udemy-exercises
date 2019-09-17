# Learning Vue

## CHAPTER 1
INTRO - GETTING STARTED

**Properties**

- Runs in the browser
- Very reactive
- Extremely lean file size(16kb)
- Great runtime performance(fast)
- Feature-rich


**Installation**

CDN: copy link and import it


**First application(hello world)**

new Vue(argument) = instance of object (data-object)
el: “#app” =>  div in HTML where we output the inserted 			    
		data(JS) = ‘location’ of Vue object


**Extending the application**

V-on: directive -> special Vue command Vue/eventlistener
input -> name of event
input=“” -> what you want to happen at that event
changeTitle -> method you can create in JS(method!)
this.title -> access to all the data(title) + methods
event.target.value -> title equals input value


**Course structure(4 projects + quick exercises)**

Intro -> DOM(templates) -> understanding VueJS instance ->         		
Vue CLI -> components -> forms -> directives, filters and mixins -> 		
animations and transitions -> working with HTTP -> Routing -> 
State management -> deployment
	

**Setting up locally**

Adding vue.js file in project folder, link it on top!


## CHAPTER 2
DOM INTERACTION

**Understanding VueJS templates**

Vue creates templates based on HTML, stores it internally and uses it to create the real HTML code, which is then rendered as the DOM.  Vue basically is the layer in the middle. 


**Vue Template Syntax and instance**

You can execute functions in between the curly braces, too. It returns something that can be output in the DOM, it has to be something which can be converted to a string though. -> ‘sayHello’  Here we see we can also access anything in the methods property.


**Accessing data in the Vue instance**

This.title refers to ‘title’ in the object ‘data’, we can use it in the function to display it in the DOM.


**Binding to attributes**

If you try to add a hyper link through the instance, it gives you a 404. It tries to parse the curly braces as a link. This is normal; we can’t use curly braces in any HTML element attribute. Only where you would normally use text.

How do you bind it dynamically?
v-bind directive: so it knows not to use the normal attribute, instead bind it. 
By setting it up like this, we can now pass a link without curly braces, because we are in the VueJS template language.


**Understanding and using directives**

A directive is basically an instruction you place in your code. There are not that many, but it’s all you need for most cases. You can also write them yourself. The v-bind directive tells Vue to bind something to its data which is stored in the Vue instance. You’re passing arguments after the semi colon, which is the href here, then in the quotation marks you pass the property, function, whatever you want to bind from your Vue instance, the link in this case.


**Disable re-rendering with v-once**

You can overwrite the value of title on execution, with whatever you want. All usages get re-rendered. There is a directive which is called v-once, by adding this to an element, all the content inside of this element will only be rendered once, it will not be updated if it changes later on. It keeps its initial value. 


**Outputting raw HTML with v-html**

By default, VueJS escapes HTML. It doesn’t render its elements, it only renders text. This behaviour ensures that we don’t run into any problems with cross-site scripting attacks. 
With v-html, another directive, placed on the element where you want to output the code, you can pass the name of the property which holds the HTML code. This is to be done only if you know the source is clean or sanitised though.


**Listening to events**

V-on listens to something, an event. For example ‘click’, ‘mouse enter, ‘mouse leave’ and other default DOM events are on the element. In quotation marks you put the code you want to execute when clicking on the button. 


**Getting event data from the event object**

The default event created by JavaScript or by the DOM which holds information, for example the coordinates of where this click event happened. This shows us that we can listen to events other than click and it shows how we can pass this event object which is created automatically and use it as we do in the exercise(2.2).


**Passing own arguments with events**

We can add our own arguments and automatically created events at ‘increase’. See 2.2 for a clearer view.


**Modifying an event**

We can use stopPropagation which means only handle the element here in this handler, don’t let it propagate up to any elements which might hold this element.
-> event.stopPropagation = The dead spot works, it’s not being propagated from the previous function.

Another thing you can use is a modifier, an event modifier, stopping the propagation of the event. Adding ‘.stop’ after the event, will do the same thing without having to add the dummy function. Another modifier for example is ‘.prevent’, it prevents default. Side note: you can chain them if need be by adding .prevent right after .stop. -> see: https://vuejs.org/v2/guide/events.html#Event-Modifiers


**Listening to keyboard events**

We also have key modifiers. For example, v-on:keyup.enter: enter is the key modifier here. There are also other ones like .tap, .esc, .space. You can also chain these, like the other event modifiers. These modifiers enable us to listen to specific keys. 
-> see: http://vuejs.org/v2/guide/events.html#Key-Modifiers


**Writing Javascript code in the templates**

You could add ‘counter++’ on a button and it will do it, the same for {{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10' }}.
If it’s greater than 1	0, it will tell you, otherwise the latter. 
It’s easier to just see the code. Just keep in mind that you can use JS and HTML combined in the template as long as you use template expressions like the double curly braces. 
It creates a strong connection between your template(HTML) and your Vue instance(JS).


**Two-way-binding**

We saw how we could output data. For example string interpolation, like ‘Max’ is output through ‘name’. We saw event listeners, where they listen to key up for example. Here’s a way of doing both: two-way-databinding that would be.

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

