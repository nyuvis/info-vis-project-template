# Info Vis Project Template

## Intro

This is a simple template to use for class projects. You can change this template however you want and you do not have to use it. This is just one possible way to structure your code that works for making static visualizations, but there are many others. For example, there's the [reusable charts pattern](https://bost.ocks.org/mike/chart/).

## Running the code

Run one of the following commands in this directory:

```bash
# For Python 3:
python -m http.server

# For Python 2:
python -m SimpleHTTPServer
```

You can then go to http://localhost:8000 in your browser. See [How do you set up a local testing server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) for more.

## Contents

* `index.html` contains the basic HTML structure and links to the CSS and JS files.

* `style.css` contains CSS rules.

* `d3` contains the D3 library.

* `data` contains datasets used by the visualizations. For now there is a toy dataset that contains the scores for a game and `countries.json`, which is a GeoJSON file for world countries. This file is derived from data from [Natural Earth](https://www.naturalearthdata.com).

* `main.js` loads the datasets and then calls the visualization functions.

* `visualizations` contains the code to make the visualizations. As an example, right now there is a bar chart and an empty world map.

## Transitioning from Observable

So far in this course, we have used [Observable](https://observablehq.com) to build our visualizations. Observable is an awesome tool, but we want to make sure that you also know how to make visualizations outside of it. We want you to become comfortable building visualizations in normal websites, using HTML, CSS, and D3 + JavaScript. The good news is that what you've learned so far is easy to transfer from Observable to your own websites.

For example, the bar chart in `vis1.js` is mostly the same as the one in the [Fundamental Graphs](https://observablehq.com/@nyuvis/fundamental-graphs) notebook. The main difference is how we create the SVG element. First, I added a `<div id="vis1">` in `index.html` for where I want the visualization to go on the page. In `main.js`, I select the div and pass it to the `vis1` function. In that function, we add an SVG element to the div and select it with `const svg = div.append('svg')`. Now that we've selected and added the SVG element to the page, the rest of the code is the same as on Observable, except that we no longer have `return svg.node();` at the end.

## Caches

You may experience a problem where you make changes to your code, but they are not reflected in the browser. This is likely due to your broswer using a cached version of the file instead of the most recent version. To fix this, you can do a hard reload or adjust your browser settings to disable caches when your developer tools are open. The Wikipedia article [Bypass your cache](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache) explains how this can be done for different browsers.
