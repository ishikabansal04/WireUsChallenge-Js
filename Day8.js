var subjects=["Maths", "Physics", "chemistry", "DWDM", "English","COA", "DataStructures"];
var number=window.prompt("Choose a number from 0-6");
document.write("Number you chose: " + number);

if(number<=6 && number >=0)
document.write("\nCorresponding subject: "+ subjects[number]);

else{
    document.write("Number chosen is not in range!");
}