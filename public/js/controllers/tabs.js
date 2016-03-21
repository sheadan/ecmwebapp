// js/controllers/main.js
angular.module('tabsController', [])

    .controller('TabController', function(){

      //initialize to no default tab
      this.tab = 0;

      //define function to set tab value
      this.setTab = function(newValue){

        // if selecting the already-existing tab, set new value to 0 (this clears the currently selected tab)
        if(this.tab === newValue) {
          this.tab = 0;
        }
        // otherwise set the tab value to the newly requested value
        else{
          this.tab = newValue;
        }
      };

      // function to check the value of currently selected tab against requested value, and return boolean
      this.isSet = function(tabName){
        return this.tab === tabName;
      };
      });
