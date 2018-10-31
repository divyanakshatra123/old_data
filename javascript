			Java Script 

its Jit(its a default ,it compiles the byte code into nnative machine code) complied programing language
java script is used to implement complexx tghings onthe web pages(interactive maps or animated 2d/3d graphics or scrolling video jukeboxes )

it helps to create dynamically updating content,control multimedia,animated images

var para = document.querySelector('p');

para.addEventListener('click',updatename)
function updatename()
{
var name = promt('enter a new name ');
para.textContext = 'player 1 :'+name;
}
		APPLICATION PROGRAMMING INTERFACES

API's are ready madee sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement

They generally fall into 2 categories

-------BROWSER APIS---------
built in ur web brrowser and are able to expose data from the surrounding comp environment or do things for ex:
THE DOM(document object model)
allows u to dynamically update the data (evrytime a  popup windows appears its because of dom)

-------GEO LOCATION API----

retieves geo info
this is how google maps is able to find ur location
-----CANVAS AND WEBGL-----
allow u to create 2D and 3D animated garphics 


------AUDIO AND VIDEO APIS------
like html media element and webrtc
play a video or audio in the webpage

-----THIRD PARTY APIS----
are nt buit into browser by dfault  and u generally have to grab their code and info on the web
ex:
TWITTER API:allows u to do things like dic=splaying thttweets in ur webpage
GOOGLE MAPS API:
embed custom maps into ur weebsite



JAVA SCRIPT ALWAYS AT THE LAST

BROWSER SECURITY
each browser tab is its own execution environment(buckets) for running the code

i.e if we change the code in one tab that doesnt effect the code in another tab 





var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, the updateName() code block (lines 5–8) is run. The updateName() code block (these types of reusable code blocks are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

if you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — TypeError: para is undefined. This means that the para object does not exist yet, so we can't add an event listener to it.


-----Interpreted versus compiled code---

You might hear the terms interpreted and compiled in the context of programming. In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it.

Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example C/C++ are compiled into assembly language that is then run by the computer.



--------------Server-side versus client-side code------


Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this JavaScript module we are explicitly talking about client-side JavaScript.



Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser. Examples of popular server-side web languages include PHP, Python, Ruby, and ASP.NET. And JavaScript! JavaScript can also be used as a server-side language

-------------Dynamic versus static code-----

The word dynamic is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.






go to your text editor and add the following in your head — just before your closing </head> tag:
<script>

  // JavaScript goes here

</script> 


JavaScript is case sensitive, and very fussy, so you need to enter the syntax exactly as shown, otherwise it may not work.





This works great, but what if we wanted to put our JavaScript in an external file? Let's explore this now.

First, create a new file in the same directory as your sample HTML file. Call it script.js — make sure it has that .js filename extension, as that's how it is recognized as JavaScript.


Replace your current <script> element with the following:
<script src="script.js" defer(async)></script>

the async attribute, which tells the browser to continue downloading the HTML content once the <script> tag element has been reached.

In the external case, we did not need to use the DOMContentLoaded event because the async attribute solved the problem for us. 

where as ASYNC 

<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>

You can't rely on the order the scripts will load in. jquery.js may load before or after script2.js and script3.js and if this is the case, any functions in those scripts depending on jquery will produce an error because jquery will not be defined at the time the script runs.

Defer will run the scripts in the order they appear in the page and execute them as soon as the script and content are downloaded:

<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>

in the above code examples, in the internal and external examples the JavaScript is loaded and run in the head of the document, before the HTML body is parsed. This could cause an error, so we've used some constructs to get around it.


if your scripts can run independently without dependencies then use async.

If your scripts depend on other scripts load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.


In the internal example, you can see this structure around the code:

 

document.addEventListener("DOMContentLoaded", function() {
  ...
});



This is an event listener, which listens for the browser's "DOMContentLoaded" event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided 

or
An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the </body> tag), so that it would load after all the HTML has been parsed. 
but in 
On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site. This is why async was added to browsers!
JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements.


