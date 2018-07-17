 // DOM element where the Timeline will be attached
 var container = document.getElementById('visualization');

 // Create a DataSet (allows two way data-binding)
 var items = new vis.DataSet([
     {id: 1, content: 'de dag dat mijn moeder spijt kreeg', start: '1994-03-29'},
     {id: 2, content: 'basis school', start: '1998-01-01'},
     {id: 3, content: 'middelbare school vwo', start: '2006-01-01'},
     {id: 4, content: 'HKU gameart', start: '2013-01-01'},
     {id: 5, content: 'Informatica uu', start: '2017-01-01'},
     {id: 6, content: 'stage gamious', start: '2015-01-01'},
 ]);

 // Configuration for the Timeline
 var options = {
     start:'1994',
     end:'2018',
     min:'1950',
     max:'2050',
     timeAxis: {scale: 'year', step: 5},
     minHeight: 300,
 };

 // Create a Timeline
 var timeline = new vis.Timeline(container, items, options);