window.addEventListener("load",function(){
    fetch("http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA")
    .then(function(response){
        console.log(response)
        return response.json();

    })
    .then(function(data){
       console.log(data)
        document.getElementById("stockcount").innerHTML = "Stocks:"+data.length;
    })
    .catch(function(error){
        console.log(error);
    })
    
});