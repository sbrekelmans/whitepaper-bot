# yBlockChain Bot

Bot based on the BotKit Starter Kit for Slack Bots. Hardly maintained, and may contain many errors. For testing purposes only!

# Plot Heatmap Creator

Put a csv file in the data folder, and call it heatmapdata.csv. Format it like so:
```shell
    latitude,longitude,date,hour,devices
    52.339,4.842,2017-10-18,22,1
    ....
```
Each row is a COUNT of unique devices in a certain lat-lon GROUP (individual device locations are rounded off to 3 digits accuracy) within 1 hour.

The application should find the extreme locations of the dataset and plot a Google map in the center of the extremes. The zoom is set roughly to the size of the dataset, but you might have to adjust. The parameters for the heatmap for each individual frame work very well, but for some reason the combination of the entire dataset doesn't produce satisfactory results. I think this is a bug related to the size of the dataset. I cant find any specific reason this doesn't work.

# Running the application

Install node.js from here: https://nodejs.org/en/

After installation, go to this folder and on the command line run:'
```console
 npm install http-server
```

and after it completes:

```console
 http-server -p 3000
```

Then, in your web-browser, go to http://127.0.0.1:3000

It should run the animation. You can navigate to single times via the buttons.

If you want to create an animation, run it full screen and capture the animation with a screen-recording app. I used OBS Studio from this website: https://obsproject.com/ but you can use any screen recording you like.

# Questions
Ask me!
* [sbrekelmans](https://github.com/sbrekelmans) -
**Sven Brekelmans** &lt;svenbrekelmans@gmail.com&gt; or &lt;sven.brekelmans@plotprojects.com&gt;