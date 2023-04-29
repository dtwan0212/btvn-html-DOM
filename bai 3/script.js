const calculator = document.querySelector(`.calculator`);
const keys = calculator.querySelector(`.calculator_keys`);

addEventListenner('click', e => 
{
if (e,target.matches(`button`)) 
{}
})

const key = e.target;
const action = key.dataset.action;

if (!action)
{
  console.log(`number key!`);
} 

if (
  action === `add` ||
  action === `subtract` ||
  action === `multiply` ||
  action === `divide` 
) 
{
  console.log(`operate key!`)
}

if (action === `decimal`)
{
  console.log(`decimal key!`)
}
if (action === `clear`)
{
  console.log(`clear key`)
}
if (action === `calculate`)
{
  console.log(`equal ley!`)
}

const display = document.querySelector(`.caculator__display`)

key.addEventListenner (`click`, e => {
  if (e.target.matches(`button`)) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textcontent
  }
})

if (!action) 
{
  if (displayedNum === `0`)

{
  display.textContent = keyContent
} 
else 
{
  display.textContent = displayed.Num + keyContent
}
}

if (action ===`decimal`)
{
  display.textContent = displayedNum + `.`
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}

keys.addEventListener(`click`, e =>
{
  if (e.target.matches(`button`))
  {
    const key = e.target
    Array.from(key.parentNode.children)
        .forEachit(k => k.classlist.remove(`is-depressed`));
  }
})

const calculator = document.querySelector(`calculator`);
keys.addEventListener(`click, e =>`{
  if (e.target.matches(`button`)) {
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
  ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
  }
  }
})

if (displayedNum === '0' || calculator.dataset.previousKeyType === 'operator') {
  display.textContent = keyContent;
  calculator.dataset.previousKeyType= "";
} else {
  display.textContent = displayedNum + keyContent;
  calculator.dataset.previousKeyType= "";
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  
  calculator.dataset.firstValue = displayedNum;
  calculator.dataset.operator = action;
}
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum

  display.textContent = calculate(firstValue, operator, secondValue)
}
function calculate(firstNum,operator,secondNum){
  if(operator === 'add'){
      return parseFloat(firstNum) +parseFloat(secondNum) ;
  }
  if(operator === 'subtract'){
      return parseFloat(firstNum) -parseFloat(secondNum) ;
  }
  if(operator === 'multiply'){
      return parseFloat(firstNum) *parseFloat(secondNum) ;
  }
  if(operator === 'divide'){
      return parseFloat(firstNum) /parseFloat(secondNum) ;
  }
}

if (action === 'decimal') {
  console.log('decimal key!');
  if  (!displayedNum.includes('.')){
      display.textContent = displayedNum + '.';
  }

}
if (!action) {
  // ...
  calculator.dataset.previousKeyType = 'number'
}

if (action === 'decimal') {

  if (!displayedNum.includes('.') && calculator.dataset.previousKeyType != ‘operator’) {
      display.textContent = displayedNum + '.'
  } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
  }
  
  calculator.dataset.previousKeyType = 'decimal'

}

if (action === 'clear') {

  calculator.dataset.previousKeyType = 'clear'
}

if (action === 'calculate') {
  
  calculator.dataset.previousKeyType = 'calculate'
}
if (action === 'calculate') {
  console.log('equal key!');
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;
  
  if(firstValue!= undefined && operator !=undefined){
      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = 'calculate';
  }


}