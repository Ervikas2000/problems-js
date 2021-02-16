var stations = [
    {name:"MHOW", time:0, prev:"", next:"VIKRANT"}, 
    {name:"VIKRANT", time:5, prev:"MHOW", next:"MITM"}, 
    {name:"MITM", time:10, prev:"VIKRANT", next:"RAU"}, 
    {name:"RAU", time:15, prev:"MITM", next:"SILICON"}, 
    {name:"SILICON", time:20, prev:"RAU", next:"IPS"}, 
    {name:"IPS", time:25, prev:"SILICON", next:"RAJIVGANDHI"}, 
    {name:"RAJIVGANDHI", time:30, prev:"IPS", next:"VISHNUPURI"}, 
    {name:"VISHNUPURI", time:35, prev:"RAJIVGANDHI", next:"BHANWARKUA"}, 
    {name:"BHANWARKUA", time:40, prev:"VISHNUPURI", next:"HOLKAR"}, 
    {name:"HOLKAR", time:45, prev:"BHANWARKUA", next:"INDIRAPRATIMA"}, 
    {name:"INDIRAPRATIMA", time:50, prev:"HOLKAR", next:"GEETABHAWAN"}, 
    {name:"GEETABHAWAN", time:55, prev:"INDIRAPRATIMA", next:"AICTSL"}, 
    {name:"AICTSL", time:60, prev:"GEETABHAWAN", next:"PALASIA"}, 
    {name:"PALASIA", time:65, prev:"AICTSL", next:"INDUSTRYHOUSE"}, 
    {name:"INDUSTRYHOUSE", time:70, prev:"PALASIA", next:"LIG"}, 
    {name:"LIG", time:75, prev:"INDUSTRYHOUSE", next:"MR9"}, 
    {name:"MR9", time:80, prev:"LIG", next:"RASOMA"}, 
    {name:"RASOMA", time:85, prev:"MR9", next:"MR10"}, 
    {name:"MR10", time:90, prev:"RASOMA", next:"DEWASNAKA"}, 
    {name:"DEWASNAKA", time:95, prev:"MR10", next:""}, 
]


function getTime(src, dst){
     var srcTim = 0
    var dstTim = 0
    for(var i=0; i<stations.length; i++){
        if(stations[i]['name'] == src){
            srcTim = stations[i]['time']
        }

        if(stations[i]['name'] == dst){
            dstTim = stations[i]['time']
        }
    }

    var time =  dstTim-srcTim

    time = time < 0 ? -1*time : time

    return time
}

function getfare(source, destination){
    var fare = 0
    var time = (getTime(source, destination))
    if(getTime(source, destination)){
        if(time<=10){
            fare = 0
        }else{
            time = time - 10
            fare = time *0.2
        }
    }
    return fare
}


var source = "BHANWARKUA"
var destination = "PALASIA"
console.log(getfare(source, destination))