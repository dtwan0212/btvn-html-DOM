
function showMessage() 
{
    let myInput = document.getElementById("myNumber").value;
    
    if (myInput % 2 === 0)
    {
        alert(`Ket qua la so chan`);
    }
    else
    {
        alert(`Ket qua la so le`);
    }
}