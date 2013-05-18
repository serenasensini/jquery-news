;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "newsReader",
        defaults = {
            Topic: "github",
            Items: "5", // Max of 10
            listClassName: "item"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            // Call the Function
            this.fetchNews(this.element, this.options);
            
        },

        fetchNews: function(el, options) {
            // Get the Results!
            $.ajax({
                url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + options.Items + '&callback=?&q=' +
                            encodeURIComponent('https://news.google.com/news/feeds?pz=1&cf=all&ned=uk&hl=en&q=' + options.Topic 
                                                + '&output=rss?nocache=' + ((new Date).getTime())),
                            dataType : 'json',
                            success  : function (data) {
                                if (data.responseData.feed && data.responseData.feed.entries) {
                                    $.each(data.responseData.feed.entries, function (i, e) {
                                        // Get the link for the article
                                        var link = e.link.split("&url=");
                                        console.log(link[1]);
                                        // Display the Results to the selected Element
                                        $(el).append('<li class=\"' + options.listClassName + '\">' + '<a href=\"' + link[1] + '\">' + e.title + '</a></li>')
                                    });
                                }
                            }
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );