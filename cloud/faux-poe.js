var Chance=require("cloud/chance.js");

module.exports=function(seed){
  var c = seed ? new Chance(seed) : new Chance();
  var nouns=[
    "maiden",
    "mountain",
    "river",
    "shore",
    "wall",
    "heath",
    "moore",
    "wood",
    "manse",
    "fever",
    "heart",
    "love",
    "night",
    "dream",
    "star",
    "locket",
    "route",
    "path",
    "road",
    "hall",
    "stranger",
    "winter",
    "stage",
    "season",
    "ring"
    ];
  var adjectives=[
    "abandoned",
    "afraid",
    "aweful",
    "great",
    "beautiful",
    "black",
    "red",
    "white",
    "pale",
    "iron",
    "empty",
    "broken",
    "wandering",
    "lost",
    "beloved"
    ];
  
  var articles=[
    "the",
    "that",
    "their",
    "her",
    "our",
    "my"
    ];
    
  //past-tense single
  var verbs=[
    "was",
    "wandered",
    "stalked",
    "hid",
    "lied",
    "wondered",
    "dreamed",
    "breathed",
    "dwelt",
    "slept"
    ];  
  
  var rhymingAdjectives=[
    ["torn","forelorn"],
    ["cold","old"],
    ["tall","small"],
    ["vast","fast"],
    ["sleeping","keeping"],
    ["fled","bled"],
    ["forgotten","begotten"]
    ];
    
  var rhymingNouns=[
    ["tomb","room"],
    ["place","space"],
    ["hell","bell"],
    ["ghost","host"],
    ["fire","pyre"],
    ["king","ring"],
    ["fate","gate"],
    ["castle","vassal"]
    ];

    
    var phrases=[
      "in the valley of",
      "in",
      "upon",
      "on",
      "with",
      "by",
      "beside",
      "within",
      "beneath"
      ];
    
  var pPhrase=function(){
    return c.pick(phrases)+" "+c.pick(articles)+" "+c.pick(nouns);
  };
  var d="";
  
  var oddLine=function(){
    return (c.first({gender:'female'})+" "+c.pick(adjectives)+" "+c.pick(adjectives)+".");
  }
  
  var couplet=function(){
    var rhyme=c.pick(rhymingAdjectives);
    var d=[];
    d.push(pPhrase()+" was a "+c.pick(nouns)+", "+c.pick(adjectives)+" and "+rhyme[0]);
    d.push(pPhrase()+" "+c.pick(verbs)+" "+c.pick(articles)+" "+c.pick(nouns)+", so "+rhyme[1]);
    return d;
  };
  
  var personalCouplet=function(){
    var rhyme=c.pick(rhymingNouns);
    var d=[];
    d.push(c.first({gender:'female'})+" "+c.pick(verbs)+" "+pPhrase()+" "+c.pick(phrases)+" "+c.pick(articles)+" "+c.pick(adjectives)+" "+rhyme[0]);
    d.push(pPhrase()+", "+c.pick(verbs)+" "+c.pick(articles)+" "+c.pick(adjectives)+" "+c.pick(adjectives)+" "+rhyme[1]);
    return d;
  };
  
  var combineLines=function(l1,l2){
    l1[0]=l1[0][0].toUpperCase()+(l1[0]).substring(1);
    
    l1[1]=l1[1][0].toUpperCase()+(l1[1]).substring(1);
    
    l2[0]=l2[0][0].toUpperCase()+(l2[0]).substring(1);
    
    l2[1]=l2[1][0].toUpperCase()+(l2[1]).substring(1);
    
    return l1[0]+",\n"+l2[0]+",\n"+l1[1]+",\n"+l2[1]+".";
  };
  
  d+=combineLines(couplet(), personalCouplet() );
  return d;
};
