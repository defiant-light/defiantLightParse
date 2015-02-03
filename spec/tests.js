/* Had issues implementing our tests */

/* global defiantLightParse, describe, it, expect, should */

describe('chance()', function () {
  'use strict';

  it('exists', function () {
    expect(Chance).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});

describe('mailboy()', function () {
  'use strict';

  it('exists', function () {
    expect(mailboy).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});


// describe('App', function() {
//   var app, fakeSongs;

//   beforeEach(function() {
//     fakeSongs = new Songs([
//       {
//         artist: 'data',
//         url: '/test/testsong.mp3',
//         title:'test song'
//       },
//       {
//         artist: 'data',
//         url: '/test/testsong2.mp3',
//         title:'test song 2'
//       }
//     ]);
//     app = new AppModel({library: fakeSongs});
//   });

//   it('creates a song queue on initialize', function(){
//     expect(app.get('songQueue')).to.be.an.instanceof(SongQueue);
//   });

//   it('sets the current song when a "play" event is fired', function(){
//     expect(app.get('currentSong')).to.be.an('object');
//     app.get('library').at(0).play();
//     expect(app.get('currentSong')).to.equal(app.get('library').at(0));
//   });

//   xit('queues the next song when an "enqueue" event is fired', function(){
//     app.get('library').at(1).enqueue();
//     expect(app.get('songQueue').at(0)).to.equal(app.get('library').at(1));
//   });

// });


// describe("LibraryView", function() {
//   var view, fakeSongs, fakeSongData, fakeSubview;

//   beforeEach(function() {
//     fakeSongData = [
//       {
//         artist: 'Fakey McFakerson',
//         title: 'Never Gonna Mock You Up',
//         url: 'example/url'
//       },
//       {
//         artist: 'BittyBacon',
//         title: 'Sizzle Sundays',
//         url: 'fake/url'
//       }
//     ];
//     fakeSongs = new Songs(fakeSongData);
//   });

//   it("should render its subviews when you render it", function(){
//     fakeSubview = { render: sinon.spy() };
//     sinon.stub(window, 'LibraryEntryView').returns(fakeSubview);
//     view = new LibraryView({collection: fakeSongs});
//     expect(fakeSubview.render).to.have.callCount(fakeSongData.length);
//     window.LibraryEntryView.restore();
//   });

//   it("should have a header element after being rendered", function(){
//     view = new LibraryView({collection: fakeSongs});
//     expect(view.$el.children().length).to.equal(2);
//     expect(view.$el.children()[0].tagName).to.equal('TH');
//   });
// });

// describe("blinkyDancer", function() {

//   var blinkyDancer;
//   var timeBetweenSteps = 100;
//   var clock;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
//   });

//   it("should have a jQuery $node object", function(){
//     expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
//   });

//   it("should have a step function that makes its node blink", function() {
//     sinon.spy(blinkyDancer.$node, 'toggle');
//     blinkyDancer.step();
//     expect(blinkyDancer.$node.toggle.called).to.be.true;
//   });

//   describe("dance", function(){
//     it("should call step at least once per second", function(){
//       sinon.spy(blinkyDancer, "step");
//       expect(blinkyDancer.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(blinkyDancer.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(blinkyDancer.step.callCount).to.be.equal(2);
//     });
//   });
// });




