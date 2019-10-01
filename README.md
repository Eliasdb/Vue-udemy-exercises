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


## Chapter 5 - Understanding the Vue.js instance

**Some basics about the VueJS instance**

The Vue instance kind of is the middleman between our DOM, the HTML code up there and our business logic. We pack all our logic in this instance, either in the data property if it’s simply some data you want to work with. Or methods which you might want to call. Also dependencies, where we depend on the value of another property, like in the computed property. These are the options in Vue we already learned about and what composes the Vue instance and composes the application. Now we dig deeper. For example if we want multiple instances, how do we do that? Can we access our Vue instance from outside? We do have all of our logic inside this object we passed to the constructor, but could we access the instance from outside? 
Let’s look at it into more detail.



**Using multiple Vue instances**

Let’s focus on using multiple instances. You can just make another div and another Vue instance and link it in the ‘el’ like you’re used to. ‘this.whatever’ only refers to properties in that Vue instance. Exercise 5.1, for example, features two titles in two different instances. So this.title would obviously only refer to the data property in that instance. There is no connection between these instances, these are two separate kinds of Vue instances controlling different parts of your DOM. Bottom line is: You can have multiple Vue instances for different tasks, as long as there is no connection between them. You can call functions from one to another instance, but it makes more sense to keep it separately from a business logic perspective anyways.


**Accessing the Vue instance from outside**

We can store Vue instances in a variable, it’s often named vm for Vue model. You can, for example, use this variable in another Vue instance, if you wanted to do so. Note that Vue.js also proxies the properties we set up here in data and it does the same for our methods and computed properties, it proxies them so we can easily access them like vm1.title. Keep in mind, technically vm1 is our Vue instance and this instance may have whatever properties it has, it’s not created by us. It certainly by default hasn’t our title property. Our title property is set up on this data object we pass on this object, we pass to the Vue.js constructor. Vue.js does this proxying for us automatically which makes it easier for us to access it from outside.


**How Vue.js manages your data and methods**

Vue proxies a lot of your data. In theory, we are not creating the Vue instance. Yes, we are calling it, we’re creating it with the constructor (new Vue), but it’s just an object(the instance) shipped with the Vue.js framework. We don’t know which properties this has, we can find out from the API reference but it clearly does not have the properties we set up here in the object we passed to the constructor. Vm.title would refer to the title of vm, which is just the entire object, but in reality it refers to our data we put in it. It’s just an (argument) we give to that constructor.


But, behind the scenes, when creating an instance, Vue.js will take our object we pass in there and then it will take our data properties and our methods and will kind of use them as native properties on the Vue instance itself. So it’ll kind of copy them. It does a bit more than that behind the scenes, it actually sets up a kind of a watcher for each of those properties which makes sure that it recognizes whenever one of these properties is changed so that it knows when to update the DOM or when to do anything basically. It not only takes them and allows us to work with them like normal JavaScript, it also has this watcher layer where it recognises that something changed and is able to work with that. This has an important implication: we’re able to access our properties like that from outside but we’re not able to create a new property like this:


    vm.newProp = “New!”;


This will work, this is normal JS, you can add a property like this, but what you can’t do is use it in the Vue.js instance. It’s not reactive, Vue is not watching it because it will only create this proxying, it will only create these watchers for everything we pass in this object upon creation with this constructor. So everything we pass in this object, we pass to the constructor. Every other property we add thereafter will be there, as you can clearly tell, if we print it to the console (look up img later), we see our proxied properties with getters and setters, this is the watcher effect we were talking about. The newProp doesn’t have this getter or setter and that is because we didn’t pass it up on creation of the instance, therefore Vue is not watching it. We can add properties, but they will not work as normal properties(data, methods). This is really important to understand and to keep in mind.

**A closer look at $el and $data (console)**


- $el = keeps track of HTML code of our instance (native HTML element)
- $data = object which holds our data properties
-> for example: console.log(vm1.$data.title): $data is the data block we passed here accessible from outside (check 5.1)

This is basically to show you there’s other ways of initialising data in your instances. You don’t have to write everything in this object, you may also create the data variable before creating your Vue instance and then simply pass it as the value for this key pair value (data: data). It works in the same way, this is one of the key things of this chapter. Vue.js doesn’t create its own enclosed world, it’s normal JavaScript. It lives in the JS code and it’s able to interact with the JS code around it. We can use a normal JS variable to populate our data.

*Side note: Of course we don’t want to mess with things under control of Vue.js, so if we control a part of the HTML code with Vue.js, you probably don’t want to access it with Vanilla JS because it could mess up the reactivity Vue provides. You might try to access it when it doesn’t exists. But generally there’s nothing wrong with mixing your normal JS code and Vue.js, you don’t have to create a Vue.js only application. This is important to understand, that you can do that, too.*








## Vue-infinite-scrolling/working with Laravel - Laracasts

**Basic routing and views**

*How to set up a route:*


	Route::get(‘/contacts’, function() {
	return view(‘contacts’);
	});


This sets up a basic route, the url projectName.test/contacts shows the contacts.blade.php file in the folder ‘view’. You can also return strings or JSON.



**Routing to controllers**

*How to set up a controller:*


	Route::get('/contacts', 'ContactsController@show'); 

Here we have a route and a controller. Now create it in the folder app > http > controllers. Select create new PHP class, give it a name. Now the controller exists, but the method we attached to it doesn’t exist. Create it in the php file, like so:

	class ContactsController
	{
		public function show()
		{
			return ‘hello’;
		}
	}

*Important note:*

The php artisan command opens up a list of commands you can use. There’s a section of ‘make’ commands, which basically all generate files. A controller, an event, a model. Let’s select the make:controller class.
-> **php artisan make:controller ContactsController**


**Vue Ajax requests**

*Setup*

When creating a new Vue app, we can see our routes in web.php, one of them goes to a preset page welcome.blade.php(I’m working on contacts.blade.php). We’re gonna delete all of the preset code and make our own Vue project with basic structure and put Vue + the app.js file we’re working with between script tags. Also, make sure to run the npm run watch command to compile js and if you make a specific file, add it to the webpack.mix.js file.


**First part - created() and axios**


**Created()**(!)

In the created hook, you will be able to access reactive data and events are active. Templates and Virtual DOM have not yet been mounted or rendered. 

-> Created is called earlier in order to trigger actions like **data fetching from the API backend**. 


**Axios**

There’s a lot of ways you can go about this, but one of the more popular ones is the axios library, which is promise based. It’s nice and simple. We can use npm to install, but to start we’re going to reference it as a CDN. 

	new Vue({
   	el: '#app',
	
	
   	created() { // make an ajax request to our server and render the response, the endpoint I want to hit is /contacts


       	axios.get('/contacts').then(response => this.skills = response.data);
  	 }
	});

This is a simple way of fetching data and putting it into and array for example. We output it in our HTML like this:

	<li v-for="skill in skills" v-text="skill"></li>  // @{{ skill }} between tags is fine too

^ looping through the array skills with chosen keyword.


**Some functions highlighted on the web.php file:**

- main file, where 'contacts.blade.php' is being put out:

		Route::get('/', function() { 
    		return view('contacts');
		});


- raw data I gave a separate route 'contacts':

		Route::get('contacts', function() {  
   	 	return json_decode(file_get_contents(storage_path('contacts.json'))); 
		});

Let’s take a closer look at 

- json_decode = takes JSON encoded string and converts it into a PHP variable
- file_get_contents = reads content of a file into a string
- storage_path = returns a fully qualified path to the storage directory

*contacts.json is located in the storage folder 

This outputs all of the json data as we want it to.


**Specific data of JSON file in table**

If we for example only need a first and last name as an output. Following code does just that:


	<div id="app">
           	 <table>
             	   <thead>
              	  <tr>
                	    <th>First name</th>
                   	 <th>Last name</th>
             	   </tr>
            	    </thead>
	
            	    <tbody>
              	  <tr v-for=“contact in contacts”>
                 	   <td v-text=“contact.first_name"></td>
                 	   <td v-text=“contact.last_name"></td>
              	  </tr>
             	   </tbody>

           	 </table>
	</div>

It loops through the array and outputs the data in the correct cells.

# Javascript ES6 - Laracasts Crash Course

**Babel - JS Compiler**


**Setup**

1. npm install —save-dev babel-cli
2. setting up “build”: “babel src -d output” in json file
3. preset ES6 transformations: npm install babel-preset-es2015 —save-dev
4. specifying preset: create .babelrc, specifying “presets”: [“es2015”]

-> npm run build: compiling

-> used in production

Laravel Elixir -> gulp will just automatically compile JS


**To var, let or const**

**Hoisting**

The declaration of a variable gets hoisted to the top of the scope. It’s a good practice to declare variables on top and then you can assign them whenever you need to.


**Let and const**

They are block level declarations, a block is the space between {}. Let doesn’t hoist because of this. We get a ReferenceError kind of like we would naturally expect. In other words, we didn’t declare or initialise foo anywhere in an else statement, which makes sense. A lot of people prefer let.

*When to use var or let?* 

There is no reason to use var generally, maybe for a specific use case, a global variable or something.

**Const**

The binding is immutable, but not the value of const. If it’s an array for example, you can still push another element to it. You can modify the value, like adding, but not reassigning. The name constant doesn’t refer to constant values or even immutable values.

What to do? The community kind of agrees on taking const as a default and using let if you know it’s gonna change. Never use var again. Some people though say let as default, var at top level and const when you do not want reassignment. It’s also kind of a message to who reads your code.


**Arrow functions**

*The old way:*
	
	let names = [‘Elias’, ‘Ben’, ‘Olivier’];
	names = names.map(function(name) {
		return name + ‘ is cool.’;
	});

-> console.log(names) will output “Elias is cool, Ben is cool, Olivier is cool”


*The new way:*

	let names = [‘Elias’, ‘Ben’, ‘Olivier’];
	names = names.map(name => name + ‘ is cool.’);

-> exact same thing

*Side note: you can also use it like this: `${name} is cool.` with template strings(the two back ticks)*

- map() = creates new array with the output chosen by you(?)
- Arrow functions do not have their own this. They are not well suited for defining object methods. Arrow functions are not hoisted. They must be defined before they are used.

**Default parameters**

*The old way:*

	function applyDiscount (cost, discount) {
 		discount = discount || .10;		
		return cost - (cost * discount);
	}
	
	alert(applyDiscount(100));

=> which outputs 90

*The new way:*
	
	function defaultDiscountRate(){
		return .10;
	}
	
	function applyDiscount (cost, discount =  defaultDiscountRate() OR .10) {
		return cost - (cost * discount);
	}
	
	alert(applyDiscount(100));

=> does the same thing, just makes a separate function and refers it between parentheses


**Rest and spread**

**Rest operator**

‘…numbers’ indicates ‘the rest of the numbers’ incapsulated in an array, so you can add as many numbers as you like to the sum.

*Example using the old way:*

	function sum (…numbers) {
		return numbers.reduce(function(prev, current) {
		return prev + current;
		}};
	}
	console.log(sum(1,2,3)); // 6

- reduce() = method executes a reducer function on each element of the array, resulting in a single output value: returns the sum of all the values


**Spread operator**

Does the opposite of rest, it takes the array and converts it into single arguments. 

*Example using the old way:*

	function sum(x,y) { // 1, 2
		return x + y;
		}
	let nums = [1,2];
	console.log(sum(…nums));

Think of the rest and the spread operator as companions. In one case you want to translate any sequence of arguments into an array(like you can keep adding numbers to the sum() method, but not just any value of course.
In the second example you want to split an array into arguments to a function.

*Side note:*

Function *parameters* are the names listed in the function.
Function *arguments* are the real values passed to (and received by) the function.


**Refactoring this to ES6:**

	function sum(…numbers) {
		return numbers.reduce((prev, current) => prev + current);
	}
	
	sum(1,2,3); // 6

or each on its own line:

	function sum(…numbers) {
		return numbers.reduce(
		(prev, current) => prev + current;
		);
	}
	
	sum(1,2,3); // 6


**Template strings or literals**

Imagine you have a block of HTML and you’re going to throw it into the DOM or maybe you’re using Vue. 
Let’s say you have the following setup: 

	let template = [
		‘<div class=“Alert”>’,
			‘<p>Foo</p>’,
		‘</div>’
	].join(‘’);

	console.log(template);

*New way:*

	let template = `
		<div class=“Alert”>,
		<p>Foo</p>,
		</div>
	`;

	console.log(template);

- join() = joins elements of array into a string


**Case where foo is dynamic:**

*Old way:*

	let name = ‘Foo’;
	‘<p>’ + name + ‘</p>’
	let template = `
		<div class=“Alert”>,
			<p>Foo</p>,
		</div>
	`;

	console.log(template);


*New way:*

	let name = ‘Foo’;
	let template = `
		<div class=“Alert”>,
			<p>${name}</p>,
		</div>
		`.trim();

	console.log(template);

-> Back ticks and ${}, the template literal do the same thing.

- trim() = removes white space at the beginning and at the end of a string


**Using the template literals in Vue.js**
In Vue, you could easily implement it like so:

	new Vue({
		template: `
			<div class=“Alert”>
				<p>Foobar</p>
			</div>
		`
	});


**Awesome object enhancements**

*Old way:*

	function getPerson() {
		let name = ‘Elias’;
		let age = 25;
	
		return {
			name: name,
			age: age
		};


*New way:*

	function getPerson() {
		let name = ‘Elias’;
		let age = 25;

		return {name, age};
	}

	alert(getPerson().name);


*Old Vue example:*

	import HomeView from ‘./components/home-view.vue’;

	new Vue({
		components: {
			HomeView: HomeView
		}
	})

=> you can get rid of the value now, the second ‘HomeView’.


**Shorthands: objects and methods**

*Old ES5 way:*

	function getPerson() {
		let name = ‘Elias’;
		let age = 25;

		return { 
			name,
			age,
			greet: function() {
				return: ‘Hello, ‘ + this.name;
			}
		};

		alert(getPerson().greet());
	

*New ES6 way:*

	function getPerson() {
		let name = ‘Elias’;
		let age = 25;

		return { 
			name,
			age,
			greet() {
				return: `Hello,  ${this.name}`;
			}
		};

	alert(getPerson().greet());

=> Get rid of the function and add back ticks, as well as the literals.


**Object destructuring**

*Old ES5 way:*

	function getData(data) {
		let/var results = data.results;
		let/var count = data.count;

		console.log(results, count);
	}

	getData({
		name: ‘Karen’,
		age: 32,
		results: [‘foo’, ‘bar’],
		count: 30
	};

=> assigning an object property to a variable, then use it. This is the old way.

*New ES6 way:*

	function getData({ results, count }) {
		console.log(results, count);
	}

	getData({
		name: ‘Karen’,
		age: 32,
		results: [‘foo’, ‘bar’],
		count: 30
	};


*Second ES5 example:*

	function greet(person) {
		let name = person.name;
		let age = person.age;

		console.log(‘Hello, ‘ + name + ‘. You are ‘ + age);
	}

	greet({
		name: ‘Elias’,
		age: 24
	});


*Second ES6 example:*

 	function greet( { name, age }) {
		console.log(`Hello, ${name}. You are ${age}.`);
	}

	greet({
		name: ‘Elias’,
		age: 22
	});

Basically put your code between ${}, backticks, it will still work without having to type everything out. These shorthands are a huge timesaver. 


**Classes**

*How we used to handle classes in ES5:*


	function User(username, email) {
		this.username = username;
		this.email = email;
	}

	User.prototype.changeEmail = function(newEmail) {
		this.email = newEmail;
	};

	var user = new User(‘ProperDoofus’, ‘jslearning@blendr.io’);


	user.changeEmail(‘foo@example.com’);

	console.dir(user);

- console.dir() = hierarchical listing of all properties of an object


*New ES6 way:*

	class User {

		constructor(username, email) {
			this.username = username;
			this.email = email;
		}

		changeEmail(newEmail) {
			this.email = newEmail;
		}
	}

	let user = new User(‘ProperDoofus’, ’jslearning@blendr.io’);

	user.changeEmail(‘phplearning@blendr.io’);

	console.dir(user);


This is the basic setup of a class, but you can add some things to it:

	class User {

		constructor(username, email) {
			this.username = username;
			this.email = email;
		}

		static register(username, email) {
			return new User(username, email);
		}

		changeEmail(newEmail) {
			this.email = newEmail;
		}
	}

	let user = new User.**register**(‘ProperDoofus’, ’jslearning@blendr.io’);

	console.dir(user);


This method is only callable directly off of the user object. You can only use it by using User.register. It works the same as the previous examples though. You can also add the rest and spread operator here:

	class User {

		constructor(username, email) {
			this.username = username;
			this.email = email;
		}

		static register(…args) { //rest operator:
			return new User(…args); //spread operator:
		}

		changeEmail(newEmail) {
			this.email = newEmail;
		}
	}

	let user = new User.register(‘ProperDoofus’, ’jslearning@blendr.io’);

	console.dir(user);

This gives an array of arguments, but each of the items in that array will be converted to single arguments or values. We also have accessors: setters and getters:

	class User {

		constructor(username, email) {
			this.username = username;
			this.email = email;
		}

		static register(…args) { //rest operator:
			return new User(…args); //spread operator:
		}

		get/set foo() {
			return ‘foo’;
		}

		changeEmail(newEmail) {
			this.email = newEmail;
		}
	}

	let user = new User.register(‘ProperDoofus’, ’jslearning@blendr.io’);

	console.log(user.foo);


One very cool thing about classes and ECMAScript 6 is that they are first class citizens and this just means they can be passed around just about anywhere. You can use them as a value. So for example:

	function log(strategy) {
		strategy.handle();
	}

	class ConsoleLogger {
		handle() {
			console.log(‘Using the console strat to log.’);
		}
	}

	log(new ConsoleLogger);


*Quick recap:*

- In ES5: create constructor, assign methods to prototype object and then make a new variable with chosen data.
- In ES6: 
    - create class, assign attributes or properties in the constructor
    - any methods on prototype can be set in a much easier way
    - ending is still ‘newing it up’
- classes are first class citizens and they can be used as values anywhere
- get/set accessors -> computed properties
- static: prefix the word and you can access it directly off the class without first having to create an instance of the class


**Modules**
 
You can take of modules as just simple files. Don’t complicate it any more than that. Maybe we want a module for a task collection. Let’s create a TaskCollection.js file. The old way of doing things was linking different scripts in your HTML file with maybe a specific order, because certain scripts might be depending on others. This quickly becomes a nightmare, especially for larger projects. The solution they came up with was modules.

Our TaskCollection.js looks like this:


	export  class TaskCollection {
		constructor(tasks = []) {
			this.tasks = tasks;
	}

		dump() {
			console.log(this.tasks);
		}

	}

	*export let foo = ‘bar’;

	*export myfunc = function() {};

* You can export as much as you want in a file. Variables, functions. The truth is a lot of the time you’re really just exporting one thing.


- dump() = simply dumps all of the tasks to the console in this case


Now we want to export this behaviour outside of the file. ES2015 has a solution, whereas they used to work with CommonJS, AMD or UMD. The differences are mostly syntax and approach. A quick overview of those:


- CommonJS: in another file, you can import this code:
	  
	  module.exports = {
		foo: ‘bar’;
	  }

- AMD:
	
		define(’TaskCollection’, [‘_’], function () { 
		// here you create the module
		});

This is just an illustration, you don’t need to worry about that stuff anymore with ES6.


*Old importing way:*

var TaskCollection = require(‘./TaskCollection’); // CommonJS 


*New importing way:*

import { TaskCollection, foo } from ‘./TaskCollection;

// newing up class in main.js

	new TaskCollection([
		‘Learn Vue’, 
		‘Understand JS first’,
		‘Study Laravel too’
	]).dump();

- **export default** in TC.js => import TaskCollection from ‘./TaskCollection; (without {})
- **exporting a variable** => import TaskCollection, { foo } from ‘./TaskCollection;
- **exporting at the bottom works the same** => export default TaskCollection; 


**Conclusion**

- We’ve learned to make a module (just a file) that exposes or exports behaviour
- We’ve learned how to import using two ways (default, {other})


**Promises 101**

Take a look at this

	var button = document.querySelector(‘button’);
	console.log(‘before’)
	button.onclick = function () {
		console.log(‘I was clicked’);
	};
	console.log(‘after’);

This is basically asynchronous in a way, the function only gets executed when you click the button. These nested anonymous functions you can’t use a lot. More than three can really get difficult to maintain. Promises are one way where we can solve this and get away from callback hell.


**What is a promise?**

Literally nothing more than a placeholder or a holding spot for an operation that has not yet taken place. So it’s a promise to perform an action. It hasn’t done that yet, it’s not a confirmation. It’s a promise to perform the action. Here’s what I think you’ll find: you make use of promises without knowing what they really are. It’s likely the tool or library I’m using is doing that behind the scenes.

*For example:*

	var promise = this.$http.get(“/some/path’);

This is an AJAX request which returns a promise. It’s gonna take some amount of time to process. It’s something you can operate upon when it’s done. You can do some stuff like this with it:


	promise.then(function(data) {
		// promise to get me the data at this endpoint and when you have it, once you’re done, I want to do the following code
	}); 

	promise.catch(function(err) {
		// catch anything that went wrong and handle that in some way
	});


These cases are how you should think of this: a placeholder for an action that has not yet completed or even started just yet. But once it has completed, then proceed and perform the following action. You can refactor this too:


	promise.then(function(data) {
	}, function(err) {
	});


Making this the second argument to .then. On success(data) and on error(err).

All you really need to know to start is when you’re reading an API or a library, and they tell you to call .then, that’s your indication that the thing before it, is a promise. You’re going to find that with a lot of things that should be asynchronous. Like an AJAX request or reading a file or processing something that takes a very long time. They will return a promise to you which you can then operate on at a later time.


**Basic structure of a promise**

	var timer = function(length) {
		return new Promise(function (resolve, reject) {
			console.log(‘Init promise’);
			setTimeout(function () {
				console.log(‘Timeout done.’);

				resolve();
			}, length);
		});
	};

	timer(4000).then(() => alert(‘All done!’));

**Useful string additions**

- string.includes();

*Old way:*

	let title = ‘Red Rising’;

	if (title.indexOf(‘R’) == 0 {
		console.log(‘R is the first character’);
	}

	let title = ‘Red Rising’;

	if (title.indexOf(‘Blue’) == -1 {
		console.log(‘This book does not begin with Blue’);
	}

This is the old, weirder way of checking a string on its contents.

*New ES6 way:*

	let title = ‘Red Rising’;

	if (title.includes(‘Red’) {
		console.log(‘This book includes Red’);
	}


This would be true even if Red wasn’t at the beginning. It just checks if it’s included in the string. This is the addition we could use to check what it starts/ends with:

- string.startsWith
- string.endsWith


*New ES6 way:*

	let title = ‘Red Rising’;

	if (title.startsWith/endsWith(‘Red’/‘ing’)) {
		console.log(‘R is the first character’/‘It does end with ‘ing’’);
	}

*Another new ES6 way - startsWith:*

	let title = ‘Red Rising’;

	if (title.startsWith(‘i’, 5)) {
		console.log(‘R is the first character’);
	}

This checks the fifth index and if it includes an i. Endswith uses this differently and calculates the number of characters - 5 and checks if there’s an i there.


- string.repeat()

		let str = ‘lol’;
		console.log(str.repeat(100));

OR

		let str = ‘tro’;
		console.log(
		str + lol’.repeat(100)
		);

OR


		let heading = ‘The heading is here’;
		console.log(
			‘>=‘.repeat(5) + ‘’ + heading + ‘’ + ‘=<‘.repeat(5)
		)

These three examples are easy, it simply takes the string and repeats it n amount of times.


**Array#find and array#includes**

*Intro*

	console.log(
		[2, 4, 6, 8, 10].indexOf(8) > -1 // outputs true because its index is higher than -1
		[2, 4, 6, 8, 10].includes(8)  // outputs true (ES7? but browser supported)
	);


**Array#find**

Find me the first item in the array that meets the condition you set:

	console.log(
		[2, 4, 6, 8, 10, 11].find(function(item) {
			return item === 8; // 8
			return item > 5; // 6
			return item % 2 > 0 // first odd number 11
		})
	);


This is great and all, but can use the arrow syntax now and refactor our code:
 
	console.log(
		[2, 4, 6, 8, 10, 11].find(item => item % 2) // 11
		[2, 4, 6, 8, 10, 11].find(item  > item > 8) // 10
		[2, 4, 6, 8, 10, 11].findIndex(item => item > 8) // 4, the index number of 10

	);

Take a look at this more practical example:

	class User {
		constructor(name, isAdmin) {
			this.name = name;
			this.isAdmin = isAdmin
		}
	}

	let users = [
		new User(‘Olli’, false),
		new User(‘Simon’, true),
		new User(’Fred’, false)
	];’’

	console.log(
		users.find(user => user.isAdmin).name // find the name of the first one where the user is an admin
	);

*Side note:*

- [].fill()
- [].keys()
- [].values()
- [].entries()(!)

These also exist, but look them up when you need it. It basically gives you sometimes valuable information about arrays.












