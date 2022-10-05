const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts)
{
    for(let i = 0; i < gifts.length; i++)
    {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

function writeCards(names, event) // Create custom thank you message for an event and iterate through each element in the array.
{
    const thankYou = [];

    for(let i = 0; i < names.length; i++)
    {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        thankYou.push(message);
    }
    return thankYou;
}

function countDown(num) //Iterate over a number counting down all the way to zero using the while loop.
{
    while(num >= 0)
    {
        console.log(num);
        num--;
    }
}

//wrapGifts(gifts);