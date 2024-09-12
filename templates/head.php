<!doctype html>
<html class="no-js" ng-app="ualib" <?php language_attributes(); ?>>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZP70R9Q7H"></script>
    <link rel="dns-prefetch" href="//v2.libanswers.com">
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9ZP70R9Q7H');
    </script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="https://comm.sa.ua.edu/wp-content/themes/ua-theme/assets/img/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="alternate" type="application/rss+xml" title="<?php echo get_bloginfo('name'); ?> Feed" href="<?php echo esc_url(get_feed_link()); ?>">
    <style>
        /* LibChat Widget CSS */
        #libchat_0b2583da7dbf524a3390409cce1fb375 .lci_chat_load { width: 100%; height: 350px; background-color: #F9F9F9; border: 1px solid transparent; box-sizing: content-box; }
        #libchat_0b2583da7dbf524a3390409cce1fb375 iframe { width: 100%; height: 350px; background-color: #F9F9F9; border: 0px; box-sizing: border-box; }
    </style>
    <script async type="text/javascript" src="https://ask.lib.ua.edu/load_chat.php?hash=0b2583da7dbf524a3390409cce1fb375"></script>
    <script>
        (function() {
            var options = {
                "hash": "0b2583da7dbf524a3390409cce1fb375",
                "siteUrl": "https://ask.lib.ua.edu",
                "width": "100%",
                "height": "350px"
            };

            const embedWidget = {
                config: options,
                chatContainer: document.querySelector(`#libchat_${options.hash}`),
                buildIFrame: function() {
                    console.log("Building iframe"); // Check if this is logged
                    const widgetUrl = `${this.config.siteUrl}/chat/widget/${this.config.hash}`;
                    console.log("Widget URL:", widgetUrl); // Check URL validity
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("id", `iframe_${this.config.hash}`);
                    iframe.setAttribute("name", `iframe_${this.config.hash}`);
                    iframe.setAttribute("src", widgetUrl);
                    iframe.setAttribute("title", "Chat Widget");
                    iframe.setAttribute("style", `width: ${this.config.width}; height: ${this.config.height}; border: none;`);
                    iframe.setAttribute("scrolling", "no");
                    iframe.innerHTML = "Content is loading...";
                    this.chatContainer.appendChild(iframe);
                },
                start: function() {
                    console.log("Starting widget"); // Check if this is logged
                    if (this.chatContainer) {
                        this.buildIFrame();
                    } else {
                        console.error('Chat container not found');
                    }
                }
            };

            // Ensure the script runs after the document is fully loaded
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                embedWidget.start();
            } else {
                document.addEventListener('DOMContentLoaded', embedWidget.start.bind(embedWidget), false);
            }
        })();
    </script>
    <?php wp_head(); ?>
</head>
