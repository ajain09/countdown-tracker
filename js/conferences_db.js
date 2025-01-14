// DATABASE
var deadlines= [
  {
    venue: "Hash Code 2023 Qualification Round",
    area: "Competitive Programming Contest",
    deadline: moment("2023-04-03 23:15:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/hashcode",
    approx: 0,
  },
  {
    venue: "Hash Code 2023 World Finals",
    area: "Competitive Programming Contest",
    deadline: moment("2023-07-29 22:00:00 +0000", "YYYY-MM-DD HH:mm:ss Z"), //
    website: "https://codingcompetitions.withgoogle.com/hashcode",
    approx: 0,
  },
  {
    venue: "Code Jam Qualification Round 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-03-11 04:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam Round 1A 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-03-25 06:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam Round 1B 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-04-02 21:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam Round 1C 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-04-02 14:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam Round 2 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-05-13 19:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam Round 3 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-06-03 19:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Code Jam World Finals 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-07-28 00:00:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/codejam",
    approx: 0,
  },
  {
    venue: "Kick Start Round H 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-11-03 08:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round G 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-10-14 17:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round F 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-09-18 04:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round E 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-08-19 15:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round D 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-07-08 10:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round C 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-05-21 19:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round B 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-04-15 22:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  {
    venue: "Kick Start Round A 2023",
    area: "Competitive Programming Contest",
    deadline: moment("2023-03-19 09:30:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
    website: "https://codingcompetitions.withgoogle.com/kickstart",
    approx: 0,
  },
  // {
  //   venue: "ML4H",
  //   area: "Healthcare",
  //   deadline: moment("2022-09-01 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://ml4health.github.io/2022/index.html",
  //   approx: 0,
  // },
  // {
  //   venue: "ICML",
  //   area: "Machine Learning",
  //   deadline: moment("2022-01-20 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "http://icml.cc",
  //   approx: 0,
  // },
  // {
  //   venue: "MLSys",
  //   area: "Machine Learning",
  //   deadline: moment("2021-10-15 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://mlsys.org/",
  //   approx: 0,
  // },
  // {
  //   venue: "UAI",
  //   area: "Machine Learning",
  //   deadline: moment("2022-02-25 23:59:00 +0100", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "http://auai.org/uai2022/",
  //   approx: 0,
  // },
  // {
  //   venue: "NeurIPS",
  //   area: "Machine Learning",
  //   deadline: moment("2022-05-16 13:00:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://nips.cc/",
  //   approx: 0,
  // },
  // {
  //   venue: "AISTATS",
  //   area: "Machine Learning",
  //   deadline: moment("2022-10-06 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "http://www.aistats.org/",
  //   approx: 0,
  // },
  // {
  //   venue: "ICLR",
  //   area: "Machine Learning",
  //   deadline: moment("2022-09-21 8:00:00 -0700", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "http://www.iclr.cc",
  //   approx: 0,
  // },
  // {
  //   venue: "CHIL",
  //   area: "Healthcare",
  //   deadline: moment("2022-01-14 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://chilconference.org"
  // },
  // {
  //   venue: "IJCAI",
  //   area: "AI",
  //   deadline: moment("2022-01-07 23:59:00 -1200", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://www.ijcai-22.org/",
  //   approx: 0,
  // },
  // {
  //   venue: "AAAI",
  //   area: "AI",
  //   deadline: moment("2022-08-08 23:59:00 -1000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://aaai.org/Conferences/AAAI-23/",
  //   approx: 0,
  // },
  // {
  //   venue: "KDD",
  //   area: "AI",
  //   deadline: moment("2022-02-10 23:59:00 -0800", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://www.kdd.org/kdd2022",
  //   approx: 0,
  // },
  // {
  //   venue: "RECOMB",
  //   area: "Computational Biology",
  //   deadline: moment("2021-11-01 17:00:00 -0400", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://www.recomb2022.org",
  //   approx: 0
  // },
  // {
  //   venue: "ISMB",
  //   area: "Computational Biology",
  //   deadline: moment("2022-01-13 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://www.iscb.org/ismb2022",
  //   approx: 0,
  // },
  // {
  //   venue: "PSB",
  //   area: "Computational Biology",
  //   deadline: moment("2022-08-01 23:59:00 +0000", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "http://psb.stanford.edu/",
  //   approx: 0,
  // },
  // {
  //   venue: "MLHC",
  //   area: "Healthcare",
  //   deadline: moment("2022-04-14 17:59:00 -0500", "YYYY-MM-DD HH:mm:ss Z"),
  //   website: "https://www.mlforhc.org/",
  //   approx: 0,
  // },
];

var shouldDisplay = {
                    "Machine Learning": true,
                    "Competitive Programming Contest": true,
                    "Hackathon": true,
                    "AI": true,
                    "Computational Biology": true,
                    "Healthcare": true,
                    "Linguistics": false
                  };
                   
// HELPER FUNCTIONS
var timeDescription = function(x) {
  return x.format("MM/DD/YYYY h:mm:ss A");
};

var timeLeftDescription = function(t) {
  if(t<0) t=0;
  var tseconds = t / 1000;
  var seconds = Math.floor(tseconds) % 60;
  var tminutes = tseconds / 60;
  var minutes = Math.floor(tminutes) % 60;
  var thours = tminutes / 60;
  var hours = Math.floor(thours) % 24;
  var tdays = thours / 24;
  var days = Math.floor(tdays);

  return [days, (days + " days, " + hours + "h " + minutes + "m " + seconds + "s")];
};

// Display function, called every second or so
function refreshDisplay() {
  var eventsMissed = 0;
  var maxTime = 0;
  var d = moment();
  $("#currtime").text("Current time: " + timeDescription(d));
  
  // calculate and display deadlines
  for(var i=0; i<deadlines.length; i++) {
    var dl = deadlines[i];
    var checkBox = document.getElementById(dl.area);
    if (checkBox.checked === true){
    if(dl.deadline == null){
      prefix = "";
      suffix = "";
      if ("website" in dl) {
        prefix = "<a class=\"sd\" href=\"" + dl.website + "\">";
        suffix = "</a>";
      }

      // console.log(prefix)
      warningString= "";
      if (dl.approx) { warningString= "based on previous year!"; }
      $("#deadline" + i).html(
        prefix + "<div class=\"vd\">" + dl.venue + "</div>"
              + "<div class=\"ad\">" + dl.area + "</div>" 
              + "<div class=\"td\"> Deadline: None" + "</div>" + suffix
      );

      $("#deadline" + i).css("background", "var(--after-month)");
      $("#deadline" + i).show();
    }
    else{
      // var checkBox = document.getElementById(dl.area);
      // if (checkBox.checked === true) {
        var result = timeLeftDescription(dl.deadline - d);
        var daysLeft = result[0]
        var timeLeft = result[1];
        if(dl.deadline < d) {
          eventsMissed++;
          var daysGone = timeLeftDescription(d - dl.deadline)[0];
          maxTime = Math.max(maxTime, daysGone);
          // console.log(daysGone);
        }
        warningString= "";
        if (dl.approx) { warningString= "based on previous year!"; }
        prefix = "";
        suffix = "";
        if ("website" in dl) {
          prefix = "<a class=\"sd\" href=\"" + dl.website + "\">";
          suffix = "</a>";
        }
        var color = "var(--after-month)";
        if(daysLeft < 7) color = 'var(--within-week)';
        else if(daysLeft >= 7 && daysLeft < 30) color = 'var(--within-month)';
        else if(daysLeft >= 30 && daysLeft < 90) color = 'var(--within-3months)';
  
        $("#deadline" + i).html(
          prefix + "<div class=\"tld\">" + timeLeft + "</div>"
                 + "<div class=\"vd\">" + dl.venue + "</div>"
                 + "<div class=\"ad\">" + dl.area + "</div>"
                 + "<div class=\"td\">Deadline: " + timeDescription(dl.deadline) + "</div>"
                 + "<div class=\"wd\">" + warningString + "</div>"
                 + suffix
        );
  
        $("#deadline" + i).css("background", color);
        $("#deadline" + i).show();
      }} else {
        $("#deadline" + i).hide();
      }
    }
  // }
  // }
  if(eventsMissed > 0){
    var numMonths = Math.ceil(maxTime / 30);
    var s = numMonths == 1 ? "month" : "months";
    // if(maxTime > 30)
    $("#missed-events").text("You missed " + eventsMissed + " events in last " + numMonths + " " + s + ". Bookmark this page (Ctrl + D) to avoid missing more events.");
  }
}

$(document).ready(function() {
  $("input").each(function() {
      var mycookie = $.cookie($(this).attr('name'));
      if (mycookie !== null) {
        if (mycookie == 'true') {
          $(this)[0].checked = true;
        } else {
          $(this)[0].checked = false;
        }
      }
  });
  $("input").change(function() {
      $.cookie($(this).attr("name"), $(this).prop('checked'), {
          path: '/',
          expires: 365
      });
  });

  for (var i=0; i<deadlines.length; i++) {
    var d = moment();
    var dl = deadlines[i];
    if (dl.deadline - d <= 0) {
      dl.deadline.add(1, 'year');
      dl.approx = 1;
    }
  }
  deadlines.sort(function(a, b) {
    return a.deadline - b.deadline;
  });
  // create divs for all deadlines and insert into DOM
  for(var i=0; i<deadlines.length; i++) {
    $("<div class=dd id=deadline" + i + "></div>").appendTo("div#deadlinesdiv");
    var divid = "#deadline" + i;

    $(divid).hide();
    $(divid).fadeIn(100*(i+1), function() { }); // create a nice fade in effect
  }

  // set up deadline timer to redraw
  setInterval(
    function(){ refreshDisplay(); },
    1000
  );

  // draw!
  refreshDisplay();
});