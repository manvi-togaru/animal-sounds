function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IRHNvlGZe/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults)
}
function gotResults(error,results)
{
    if (error)
    {
        console.log('error')
    } else {
        console.log(results);
        document.getElementById("labelresult").innerHTML="𝓘 𝓬𝓪𝓷 𝓱𝓮𝓪𝓻-"+results[0].label;
        document.getElementById("labelaccuracy").innerHTML="𝔸𝕔𝕔𝕦𝕣𝕒𝕔𝕪--"+results[0].confidence*100+"%";
        
        if (results[0].label=="dog") 
        {
         document.getElementById("animal").src="https://c.tenor.com/AZt_GipMle0AAAAM/dog-barking.gif"
        }
        else if(results[0].label=="cat")
        {
            document.getElementById("animal").src="https://c.tenor.com/JlhpkIk57UgAAAAM/cat-meow.gif"
        }
        else if(results[0].label=="Background Noise")
        {
            document.getElementById("animal").src="https://c.tenor.com/yFACvCi8Y7IAAAAM/heart-from-ears-kaan-se-dil.gif"
        }
    
    }
}