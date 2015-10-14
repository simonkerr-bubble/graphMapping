

var jsonFiles = [
  'projects',
  'headlinetype',
  'projectiontype',
  'keyword',
  'period'
];

var jsonData = {};

var mapping = {
  init: function() {
    this.load();
  },

  load: function() {
    for(var i in jsonFiles) {
      var fileName = '../data/' + jsonFiles[i] + '.json';
      $.ajax({
        url: fileName,
        async: false,
      }).done(function(data) {
        jsonData[jsonFiles[i]] = data;
      });
    }
  },
}

mapping.init();



var keywordId = 33;

console.log(jsonData.projects[0]);


var result = _.chain(jsonData.projects)
              .each(function(project) {
                return _.find(project, { keyword: keywordId });
              })
              .value();

console.log(result);


// console.table(jsonData.projects[0].keywords);

// console.table(jsonData.keyword);

// console.log(jsonData);
//
// console.table(jsonData.projects);
// console.table(jsonData.headlinetype);
