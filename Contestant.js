class Contestant {
    constructor(){
  this.index=null,
  this.distance=0,
  this.name=null
  
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = " contestant/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
      static getContestantInfo(){
      var  contestantInfoRef= database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestants= data.val();
      })
  
    }
  }
  