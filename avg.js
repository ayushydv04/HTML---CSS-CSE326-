window.alert("This page contains average marks")
var maths=20;
var eng=40;
var phy=50;
var bio=60;
var chem=70;
var python=80;

var a=(maths+eng+phy+bio+chem+python)/6
document.write("Average of marks is ",a)
document.write("<br>")
if (a>50)
{
    document.write("Average is greater than 50")
}
else if (a=50)
{
    document.write("Average is equal to 50")
}

else 
{
    document.write("Average is lesser than 50")
}