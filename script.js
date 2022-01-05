let btns = document.querySelectorAll(".num,.operator");

btns.forEach(btn => btn.addEventListener("click", event=>{
    btn.classList.add("my-class");
    setTimeout(function(){
        btn.classList.remove("my-class");
    },200);
}))
        let your = document.getElementsByClassName("num").value;
        console.log(your)
    
        function getHistory(){
            return document.getElementById("current-operand").innerText;
        }
        function printHistory(num){
            document.getElementById("current-operand").innerText= num;
        }
        function getOutput(){
            return document.getElementById("current-operand").innerText;
        }
        function printOputput(num){
            if(num==""){
                document.getElementById("current-operand").innerText=num;
            }
            else{
                document.getElementById("current-operand").innerText=getFormattedNumber(num);
            }	
        }
        function getFormattedNumber(num){
            if(num=="-"){
                return "";
            }
            var n = Number(num);
            var value = n.toLocaleString("en");
            return value;
        }
        function reverseNumberFormat(num){
            return Number(num.replace(/,/g,''));
        }

        let operator = document.getElementsByClassName("operator");
            for(let i=0;i<operator.length;i++) {
                operator[i].addEventListener("click", function(){
                    if(this.id == "re-set") {
                        printOputput("");
                    }else if(this.id == "remove") {
                        let output = reverseNumberFormat(getOutput()).toString();
                        if(output){
                            output = output.substring(0,output.length-1);
                            printOputput(output);
                        }
                    }
                })

            }
            let number = document.getElementsByClassName("num");
            for(let i=0;i<number.length;i++) {
                number[i].addEventListener("click", function(){
                    let output = reverseNumberFormat(getOutput());
                    if(output !== NaN){
                        output = output+this.id;
                        printOputput(output);
                    }else if(output.includes(".")){
                        output = output+this.id;
                        printOputput(output);
                    }
                })

            }
        
