## Roadmap

 * The Problem(s)
 * My Idea
 * Introducing ShareCoffee
 * Writing your own AddOns



## The Problem(s)

### The eight paths of pain



## The Problem(s)

### true isnt always true



## My Idea

As a developer I'd like to have a **unified**, **tiny** and **mighty** API to rule them all. To access data from SharePoint no matter in which *context* my code runs.

SharePoint drove me nuts for years, but from now I wanna focus on building stuff and not on how to monkey-patch SharePoint.

I wanna use the API within [Angular](http://www.angularjs.org)-, [jQuery](http://www.jquery.com)- and plain JavaScript-Apps.

I want to have **no** dependencies for my API.



## Introducing ShareCoffee

With all those ideas I sat down and started coding.



### The REST Interface
````javascript
    ShareCoffee.REST.build.read.for.angularJS()
    ShareCoffee.REST.build.read.for.jQuery()
    ShareCoffee.REST.build.read.for.reqwest()

    // or

    ShareCoffee.REST.build.read.f.angularJS()
    ShareCoffee.REST.build.read.f.jQuery()
    ShareCoffee.REST.build.read.f.reqwest()

    // or

    $s.REST.build.read.f.angularJS()
    $s.REST.build.read.f.jQuery()
    $s.REST.build.read.f.reqwest()
    
    // or
    
    $s.REST.build.read.f.angularJS()
    $s.REST.build.read.f.jQuery()
    $s.REST.build.read.f.reqwest()
````



## Writing your own AddOns
