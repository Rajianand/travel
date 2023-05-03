function input()
{
    var a = document.getElementById("uname").value;
    localStorage.setItem("name",a);
    var b = document.getElementById("psw").value;
    localStorage.setItem("password",b);
}

function validation()
{
    var a = localStorage.getItem("name");
    var b = localStorage.getItem("password");
    var c = document.getElementById("name").value;
    localStorage.setItem("name",c);
    var d = document.getElementById("pass").value;
    localStorage.setItem("password",d);

    if(a==c && b==d)
    {
        alert("correct! Successfully registerd");
        return true;
    }
    else
    {
        alert("Wrong!");
        return false;
    }
}