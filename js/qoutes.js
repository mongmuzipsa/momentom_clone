const quotes=[{
  quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
  author:"단테"
},
{
  quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
  author:"톰 모나건"
},
{
  quote:"진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다",
  author:"찰리 채플린"
},
{
  quote:"절대 어제를 후회하지 마라 인생은 오늘의 나 안에 있고   내일은 스스로 만드는 것이다",
  author:"L.론허바드"
},
{
  quote:"어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다",
  author:"제임스 오펜하임"
},
{
  quote:"행복은 습관이다 그것을 몸에 지녀라",
  author:"허버드"
},
{
  quote:"우리 인생의 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다",
  author:"넬슨 만델라"
},
{
  quote:"인간이 불행한 이유는 자신이 행복하다는 사실을 모르기 때문이다 단지 그뿐이다",
  author:"표도르 도스토옙스키"
},
{
  quote:"나만이 내 인생을 바꿀 수 있다 아무도 날 대신해 줄 수 없다",
  author:"캐롤 버넷"
},
{
  quote:"변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'이다",
  author:"에디슨"
}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;