function startclassfication(){
   navigator.mediaDevices.getUserMedia({audio: true});
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2nEztdqpO/model.json", model_Loaded);

}

function model_Loaded(){
   console.log("Model successfully loaded");

   classifier.classify(gotResults);
}

function gotResults(error,results){
  
   if(error){
      console.error(error);
   }
   else{
      
      console.log(results); 
      
      document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence *100 ).toFixed(2) + "%";
      document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;


      img1 = document.getElementById("alien1");
      img2 = document.getElementById("alien2");
      img3 = document.getElementById("alien3"); 
      img4 = document.getElementById("alien4");


      if (results[0].label  == "CLAP"){

         img1.src = "aliens-01.gif";
         img2.src = "aliens-02.png";
         img3.src = "aliens-03.png";
         img4.src = "aliens-04.png";

      }
      else if (results[0].label  == "DRRRR"){

         img1.src = "aliens-01.png";
         img2.src = "aliens-02.gif";
         img3.src = "aliens-03.png";
         img4.src = "aliens-04.png";

      }

      else if (results[0].label  == "WHISTLE"){

         img1.src = "aliens-01.png";
         img2.src = "aliens-02.png";
         img3.src = "aliens-03.gif";
         img4.src = "aliens-04.png";

      }
      else{

         img1.src = "aliens-01.png";
         img2.src = "aliens-02.png";
         img3.src = "aliens-03.png";
         img4.src = "aliens-04.gif";
         
      }

     
   }
   
}

