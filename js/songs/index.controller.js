angular
  .module("songs")
  .controller("SongIndexController", [
    "$firebaseArray",
    SongIndexControllerFunction
  ]);

function SongIndexControllerFunction($firebaseArray){
  var vm = this;
  var ref = firebase.database().ref().child("songs");
  vm.songs = $firebaseArray(ref);

  // This method is triggered whenever the user clicks "Create Grumble".
  vm.create = function(){
    vm.songs.$add(vm.newSong).then(function(){
      vm.newSong = {}; // Once the Grumble has been created, clear the contents of vm.newGrumble.
    });
  }

  vm.delete = function(song){
    vm.songs.$remove(song)
  }
}
