let number = parseInt(prompt('몇 명이 참가한나요?'),10);
if (confirm('게임 참가자가 ' + number + '명 맞나요?')) {
    confirm('게임을 시작합니다');
}else {
    let number = parseInt(prompt('몇 명이 참가한나요?'),10);
}

const $input= document.querySelector('input');
const $button = document.querySelector('button');
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
let word; //제시어
let newword; //입력받은 제시어

//화살표 함수??
const onClickButton = () => {
    //제시어가 비어있는가?
    if (!word) { //***비어있다.>입력
        word = newword;
        $word.textContent = word;
        $input.value = '';
        const order = Number($order.textContent);
        if (order + 1 > number) {
            $order.textContent = 1;
        }else {
            $order.textContent = order + 1;
        }
    }else { //제시어가 비어있지 않다 
        //올바른가?
        if (word[word.length - 1] === newword[0] && newword.length === 3) { //올바르다
            word = newword;
            $word.textContent = word;
            $input.value = '';
            const order = Number($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            }else {
                $order.textContent = order + 1;
            }   
        }else { //올바르지 않다
            alert('다시 입력하세요');
        } 
    }
    //3글자가 아닌경우
};

const onInput = (event)  => {
    newword = event.target.value;
};
$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickButton);