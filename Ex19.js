 //문제) 버튼을 눌렀을 때, 웹 페이지의 숫자가 변하는 로직
        //조건) 감소버튼 클릭했을 때 0밑으로는 떨어지지 않게(음수 출력X)

        let num = document.getElementById("num");
        let btnp = document.getElementById("btn-plus");
        let btnm = document.getElementById("btn-minus");
        //1. 사용하고 싶은 HTML태그에 접근(p,button)
        btnp.addEventListener("click",function(){
            num.innerText =Number(num.innerHTML)+ 1;
        })
        btnm.addEventListener("click",function(){
            num.innerText= Number(num.innerHTML)-1;
            if(num.innerText < 0){
                num.innerText =Number(num.innerHTML)+ 1;
                alert("0이하입니다. 더이상 내릴 수 없습니다.")
            }
        })
        //2. 각 버튼에 이벤트를 정의

        //3. 결과값은 p태그에 출력되게 한다.