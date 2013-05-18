#jQuery News

jQuery News is a basic [jQuery](https://github.com/jquery/jquery/) plugin that fetches headlines on a given topic from [Google News](https://news.google.com/) and puts them into the selected class.

##Demo

Here is a demo of the application: [jQuery News Demo](http://smith197.koding.com/jquery-news/demo/) It ain't much, but hopefully it will get you on your way!

##Features

* Retrieves headlines on a given keyword(s). 
* ALlows you to set the number of headlines returned.
* Returns the link to the full article.

##Usage

1. Include the `jquery.js` in your header. (This has only been tested with version 1.9).
1. Create a `<ul>` or `<ol>` to put the results in.
1. Include the `jquery.news.js` file.
1. Now put the following (Change `.news` to the class of the `<ul` or `<ol>` you want to put the results in.


        <script>
            $('.news').newsReader({
                // Put in your required parameters here!
            });
        </script>


###Available parameters (Leave out for the default value):

1. Topic - The topic of which you want the headlines to be about. The default topic is `github`.
1. Items - How many headlines you want to return. The minimum is 1, maximum is 10 and the default is 5.
1. listClassName - The class name you want the returned `<li>` to have. The default is `item`.

####Example with all custom parameters:

    <script>
        $('.news').newsReader({
            Topic: 'android',
            Items: '10',
            listClassName: 'headlines'
        });
    </script>
    
###Thanks for reading!