
function init(){
    alert("Welcome to the best calculator! Remember that only numbers can be entered from the keyboard.The operators must be pressed by clicking on the buttons at the screen. In order to be sure that the operator was accepted, the number on display should disappear.");
    var res = 0; //Result in numeric form
    var nums =""; //Input string
    var num = 0; //Input numeric
    var op = ""; //Operation (last)
    var ress = ""; //Entire operations in string form
    var display = document.getElementById('display');
    var result = document.getElementById('resultValue');
    var reset = document.getElementById('resetButton');
    var equal = document.getElementById('equalButton');
    var add = document.getElementById('addButton');
    var substract = document.getElementById('substractButton');
    var multiplication = document.getElementById('multiplicationButton');
    var division = document.getElementById('divisionButton');
    var logInf = document.getElementById('logInformation');

    reset.onclick = function(e){
        clean();
    }

    add.onclick = function(e){
        nums = display.value;
        if(nums!=""){
            num = Number(nums);
            if(ress!=""){
                solve();
                ress += op;
                ress += nums;
            }
            else{
                ress =+nums;
                res=num;
            }
            display.value = "";
            op="+";
        }
    }

    substract.onclick = function(e){
        nums = display.value;
        if(nums!=""){
            num = Number(nums);
            if(ress!=""){
                solve();
                ress += op;
                ress += nums;
            }
            else{
                ress =+nums;
                res=num;
            }
            display.value = "";
            op="-";
        }
    }

    multiplication.onclick = function(e){
        nums = display.value;
        if(nums!=""){
            num = Number(nums);
            if(ress!=""){
                solve();
                ress += op;
                ress += nums;
            }
            else{
                ress =+nums;
                res=num;
            }
            display.value = "";
            op="*";
        }
    }

    division.onclick = function(e){
        nums = display.value;
        if(nums!=""){
            num = Number(nums);
            if(ress!=""){
                solve();
                ress += op;
                ress += nums;
            }
            else{
                ress =+nums;
                res=num;
            }
            display.value = "";
            op="/";
        }
    }

    equal.onclick = function(e){
        nums = display.value;
        num = Number(nums);
        if(ress!=""){
            solve();
        ress += op;
        }
        ress = ress + nums + "=" + String(res);
        display.value = ""; 
        printD();
    }

    function solve(){
        switch(op){
          case "+":
            res = parseFloat(res) + parseFloat(num);
            break;
          case "-":
              res = parseFloat(res) - parseFloat(num);
              break;
          case "*":
            res = parseFloat(res) * parseFloat(num);
            break;
          case "/":
            res = parseFloat(res) / parseFloat(num);
            break;
        }
        result.value = res;
    }

    function printD(){
        logInf.value = ress;
        result.value = res;
    }

    function clean(){
        result.value = "";
        display.value = "";
        logInf.value = "";
        res = 0;
        op ="";
        nums="";
        num = 0;
        ress = "";
      }


}



