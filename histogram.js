<!DOCTYPE html>
<meta charset="utf-8">
<style>

.bar rect {
  fill: steelblue;
}

.bar text {
  fill: #fff;
  font: 10px sans-serif;
}

</style>
<svg width="960" height="500"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>

var data = [{"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Italo Calvino", "End Date": null, "Title": "Invisible Cities ", "Nationality": "Italian ", "Start Date": null, "Rating": "7", "Fiction/Non fiction": "Fiction"}, {"Tags": "Basketball", "Format": "Kindle", "Gender": "Male", "Author": "Gabriel Allen", "End Date": null, "Title": "Around the World in 80 Days", "Nationality": "American", "Start Date": null, "Rating": "4", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Urban Planning", "Format": "Kindle", "Gender": "Various", "Author": "Various", "End Date": null, "Title": "City by City", "Nationality": "American", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Raymond Queneau", "End Date": null, "Title": "Exercises in Style", "Nationality": "French", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Fiction"}, {"Tags": "Biography", "Format": "Paperback", "Gender": "Male", "Author": "Robert Caro", "End Date": null, "Title": "The Power Broker", "Nationality": "American", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Science", "Format": "Kindle", "Gender": "Male", "Author": "Chris Woodford", "End Date": null, "Title": "Atoms Under the Floor Board", "Nationality": "English", "Start Date": null, "Rating": "7", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Leonard Mlodinow", "End Date": null, "Title": "The Drunkard's Walk", "Nationality": "American", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Japan", "Format": "Paperback", "Gender": "Male", "Author": "Haruki Murakami", "End Date": null, "Title": "After Dark", "Nationality": "Japanese", "Start Date": null, "Rating": "9", "Fiction/Non fiction": "Fiction"}, {"Tags": "Japan", "Format": "Kindle", "Gender": "Male", "Author": "Yasunari Kawabata", "End Date": null, "Title": "The Old Capital", "Nationality": "Japanese", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Fiction"}, {"Tags": "Japan, Travel", "Format": "Paperback", "Gender": "Male", "Author": "Alan Booth", "End Date": null, "Title": "Looking for the Lost", "Nationality": "English", "Start Date": null, "Rating": "9.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Memoir", "Format": "Kindle", "Gender": "Male", "Author": "Steve Martin", "End Date": null, "Title": "Born Standing", "Nationality": "American", "Start Date": null, "Rating": "7.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Japan", "Format": "Paperback", "Gender": "Female", "Author": "Ruth Ozeki", "End Date": null, "Title": "A Tale for the Time Being", "Nationality": "American", "Start Date": null, "Rating": "8.5", "Fiction/Non fiction": "Fiction"}, {"Tags": "Japan", "Format": "Kindle", "Gender": "Male", "Author": "Natsume S\u014dseki", "End Date": null, "Title": "Sanshiro", "Nationality": "Japanese", "Start Date": null, "Rating": "10", "Fiction/Non fiction": "Fiction"}, {"Tags": "Essays", "Format": "Paperback", "Gender": "Female", "Author": "Joan Didion", "End Date": null, "Title": "The White Album", "Nationality": "American", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Surfing", "Format": "Paperback", "Gender": "Male", "Author": "William Finnegan", "End Date": null, "Title": "Barbarian Days", "Nationality": "American", "Start Date": null, "Rating": "10", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Haruki Murakami", "End Date": null, "Title": "1Q84", "Nationality": "Japanese", "Start Date": null, "Rating": "6", "Fiction/Non fiction": "Fiction"}, {"Tags": "Cooking", "Format": "Paperback", "Gender": "Male", "Author": "Michael Pollan", "End Date": null, "Title": "Cooked", "Nationality": "American", "Start Date": null, "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Basketball", "Format": "Kindle", "Gender": "Male", "Author": "Stephen M. Shea", "End Date": null, "Title": "Spatial Tracking: Basketball Analytics", "Nationality": "American", "Start Date": null, "Rating": "9", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Basketball ", "Format": "Kindle", "Gender": "Male", "Author": "Jonathan Abrams", "End Date": null, "Title": "Boys Amongst Men", "Nationality": "American", "Start Date": null, "Rating": "5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Anthony Doerr", "End Date": null, "Title": "All The Light We Cannot See", "Nationality": "American", "Start Date": null, "Rating": "9.5", "Fiction/Non fiction": "Fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Female", "Author": "Elizabeth Kolbert", "End Date": null, "Title": "The Sixth Extinction", "Nationality": "American", "Start Date": null, "Rating": "9.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Basketball", "Format": "Paperback", "Gender": "Male", "Author": "John McPhee", "End Date": null, "Title": "A Sense of Where You Are", "Nationality": "American", "Start Date": null, "Rating": "7", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Paul Kalanithi", "End Date": null, "Title": "When Breath Becomes Air", "Nationality": "American", "Start Date": null, "Rating": "10", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Science Fiction", "Format": "Kindle", "Gender": "Male", "Author": "Ernest Cline", "End Date": null, "Title": "Ready Player One", "Nationality": "American", "Start Date": null, "Rating": "7.5", "Fiction/Non fiction": "Fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Don Norman", "End Date": null, "Title": "The Design of Everyday Things", "Nationality": "American", "Start Date": null, "Rating": "7", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Memoir", "Format": "Paperback", "Gender": "Male", "Author": "Haruki Murakami", "End Date": null, "Title": "What I Talk About When I Talk About Running", "Nationality": "Japanese", "Start Date": null, "Rating": "9", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Self-help", "Format": "Kindle", "Gender": "Male", "Author": "Mark Manson", "End Date": "9/21", "Title": "The Subtle Art of Not Giving a Fuck", "Nationality": "American", "Start Date": "9/18", "Rating": "7.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "W. Timothy Gallowey", "End Date": "9/27", "Title": "The Inner Game of Tennis", "Nationality": "American", "Start Date": "9/22", "Rating": "8", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Steve Jamison", "End Date": "10/5", "Title": "The Score Takes Care of Itself", "Nationality": "American", "Start Date": "9/27", "Rating": "6", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Sebastian Junger", "End Date": "10/9", "Title": "Tribe", "Nationality": "American", "Start Date": "10/5", "Rating": "7.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Memoir", "Format": "Kindle", "Gender": "Male", "Author": "J.D. Vance", "End Date": "10/14", "Title": "Hillbilly Elegy", "Nationality": "American", "Start Date": "10/12", "Rating": "10", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Brian Greene", "End Date": "11/7", "Title": "The Elegant Universe", "Nationality": "American", "Start Date": "10/16", "Rating": "8.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Memoir", "Format": "Kindle", "Gender": "Male", "Author": "Andrew X. Pham", "End Date": "11/13", "Title": "Catfish and Mandala", "Nationality": "American (Asian)", "Start Date": "11/8", "Rating": "10", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Cal Newport", "End Date": "11/23", "Title": "Deep Work", "Nationality": "American", "Start Date": "11/17", "Rating": "10", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Cal Newport", "End Date": "11/30", "Title": "So Good They Can't Ignore You", "Nationality": "American", "Start Date": "11/24", "Rating": "9", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "Basketball", "Format": "Kindle", "Gender": "Male", "Author": "Jack McCallum", "End Date": "12/6", "Title": "Seven Seconds or Less", "Nationality": "American", "Start Date": "12/1", "Rating": "9", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Peter Pomerantsev", "End Date": "12/17", "Title": "Nothing is True and Everything is Possible", "Nationality": "Russian", "Start Date": "12/10", "Rating": "7.5", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Paperback", "Gender": "Male", "Author": "Kurt Vonnegut", "End Date": "12/24", "Title": "Cat's Cradle", "Nationality": "American", "Start Date": "12/18", "Rating": "9", "Fiction/Non fiction": "Fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "BikeSnobNYC", "End Date": "12/24", "Title": "Bike Snob", "Nationality": "American", "Start Date": "12/21", "Rating": "7", "Fiction/Non fiction": "Non-fiction"}, {"Tags": "", "Format": "Kindle", "Gender": "Male", "Author": "Erik Brynjolfsson Andrew McAfee", "End Date": "1/4", "Title": "The Second Machine Age", "Nationality": "American", "Start Date": "12/27", "Rating": "8", "Fiction/Non fiction": "Non-fiction"}];

var formatCount = d3.format(",.0f");

var svg = d3.select("svg"),
    margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .rangeRound([0, width]);

var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))
    (data);

var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);

var bar = g.selectAll(".bar")
  .data(bins)
  .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + ratingToHeightScale(d.length) + ")"; });

bar.append("rect")
    .attr("x", 1)
    .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr("height", function(d) { return height - ratingToHeightScale(d.length); });

bar.append("text")
    .attr("dy", ".75em")
    .attr("y", 6)
    .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
    .attr("text-anchor", "middle")
    .text(function(d) { return formatCount(d.length); });

g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

</script>