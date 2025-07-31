function weather()
{
    let n=document.getElementById("weath").value
    switch(n)
    {
        case "sunny":console.log("Wear sunglasses");
        break;
        case "rainy":console.log("Take an umbrella")
        break;
        case "cloudy":console.log("Might rain Later")
        break;
        default:console.log("Unknown weather condition")
    }
}

