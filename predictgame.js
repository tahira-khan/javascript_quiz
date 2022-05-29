

var quiz=[
    'Name Programming languages',
    'Name harry potter characters',
    'Name green vegetables',
    'Name things used in dinner table',
    'write synonyms of tasty',
    'Cake ingredients',
    'Common bakery items',
    'Name famous sports',
    'Name operating system',
    'Fruit with single seed',
    'Name red fruits',
    'Famous Social Media platform',
    'Name religion',
    'Name Famous scientist',
    'Anything sweet',
    'Name Beverages',
    'Shades of blue',
    'Name Tech gadgets',
    'Famous Games',
    'Famous cars',
    'Basic Home Appliances'
]


//First word must be right in the series of words.
var a0=['python|pyhton|pithon|piethon|pyton|pythoon|pythonn|snake',
'javascript|java script|javscript|jscript|jsscript|js',
'c#|c sharp|csharp|chash|cshrap|csharpe|c',
'java|jav',
'php|ph|pph',
'perl|perls|pearl|peral|parl|parls'];
var a1=['harry|herry|harri|herri|hari|har|hery|daniel',
'hermoine|hermone|hermoeni|emma|hermione|hermaini',
'ron|run|ran|rupert|redhead|redhair',
'Professor Snape|snape|stern|professor',
'voldmort|voldermort|voldemort|evil|villain',
'dumbledore|dumble|dore|dumble dore|duble|headmaster'];
var a2=['CUCUMBER|cucumber|cu cumber|cumber|cucmber',
'LADYFINDER|ladyfinger|lady finger|fingerlady|finger lady',
'BROCCOLLI|broccolli|brocoli|broccoli|broccli',
'SPINACH|spinach|spanish|spinich|spinish',
'CAPSICUM/PEPPER|pepper|capsicum|chilli|greenchilli|green chilli|chillies',
'Lettuce|lettuce|letus'];
var a3=['SPOON|spon|spoons|spoon',
'FORK|folk|forks|fox|fork',
'KNIFE|nife|nyf|knife',
'Plate|plate|plates',
'Glass|glass|grass',
'Napkin|tissue|napkin|paper towel|towel'];
var a4=['Delicious|delicious|delcious|delcous','Scrumptious|scrumptious|scrumps|scrump','Delectable|delectable|amazing|tasty','Mouth-Watering|juicy|watery|mouth watering','Yummy|yumm|yum|yummy|yums'];
var a5=['Flour|flour|corn flour','Eggs|eggs|egg','Butter/Oil|butter|oil|fat','Sugar|sugar|suga|sweet','Essence/Extract|vanilla|essence|extract','Baking Powder|baking powder|soda'];
var a6=['Bread|bread','Bun|bun','Cinamon Roll|roll','Cake|cake|cke','Pastry|puff|pastry','Pie|pi|pie|cookies|biscuits'];
var a7=['Cricket|cricket|bat|ball|batting','FootBall/Soccer|football|soccer','Basket Ball|basketball','Hockey|hockey|hocky','Tennis|tenis|tennis|racket|shuttle',
'Volley Ball|volleyball|volley|volley ball'];
var a8=['Linux|linus|linux','Windows|window|windows','iOS|ios|iphone','Android|android|robot','macOS|mac os|mac'];
var a9=['Mango|mango','Avacado|avacado|avaco','Date|dates|date','Peach|peaches|peach','Plum|plums|plum'];
var a10=['Water Melon|melon|water melon','Apple|apple','Cherry|cherry','Pomegranet|pomegranet','Strawberry|strawberry|berry','Red Grapes|grapes'];
var a11=['Facebook|facebook|wall|status','Twitter|twitter|tweet','Instagram|instagram|insta','SnapChat|snapchat|chat','Tumblr|tumblr','YouTube|youtube|video'];
var a12=['Islam|islam|muslim','Christianity|christianity','Judaism|judaism|jews','Buddhism|buddhism|budhist|budh','Hinduism|hinduism|hindu','Taoism|taoism'];
var a13=['Issac Newton|newton','Einstein|einstein','Galileo Galilie|galileo','Marie Curie|marie curie|marie','Nikola Tesla|tesla','Aristotle|aristotle'];
var a14=['Chocolate|chocolate|cocoa|choclate','Candy|candy|toffee','Cookies|Biscuits|cookies|biscuits|biscuit|cookie','Ice Cream|ice cream|icecream','Cake|cake','Honey/Sugar|honey|sugar'];
var a15=['Tea|tea|t','Coffee|coffee','Soft Drinks|pepsi|coke|drinks','Juice|juice|shake|shakes','Milk|milk','Water|water'];
var a16=['Royal Blue|royal','Sky Blue|sky','Navy Blue|navy','Dark blue|dark','Electric Blue|electric','Indigo|indigo'];
var a17=['Computer|computer|pc','Laptop|laptop','Smart Phones|phones|iphone|phone','Smart Watches|watch','Tablet|ipod|tab','Headphones|earpods|headphone|headphones'];
var a18=['PUBG|pubg','Fortnight|fortnight|fort|night','GTA|gta','Counter Strike|counter strike|cs|csgo|go','Minecraft|minecraft|mine','Assasin Creed|assasin creed'];
var a19=['Lamborghini|lamborghini|ghini|lambo','Tesla|tesla|autopilot','BMW|bmw','Ferrari|ferrari','Porsche|porsche','Audi|audi'];
var a20=['Microwave|microwave|micro|wave|warm','Refrigerator|fridge|freezer','Washing Machine|washing machine|clothes','Food processor|blender|grinder|shopper','Television|television|tv','Dish Washer|dishwasher|dish washer'];

//variables 


//random array for Random questions
var randques=Math.floor(Math.random()*quiz.length);

var score=0;
var attempt=0;
var click=0;
var sp1=document.getElementById('span1');
var sp2=document.getElementById('span2');
var sp3=document.getElementById('span3');
var sp4=document.getElementById('span4');
var sp5=document.getElementById('span5');
var sp6=document.getElementById('span6');
function startt()
{
   
    document.getElementById('scores').textContent = 0;
    document.getElementById('strtbtn').style.visibility = "hidden";
    // document.getElementById('ques').innerHTML 
    document.getElementById('ques').textContent=quiz[randques];
   clearans();
}

function next()
{
    click=1;
    if(click==1)
    {
        click=0;
        document.getElementById('nxt').style.visibility = "hidden";
    }
    clearans();
    document.getElementById('ques').textContent=quiz[randques+1   ];
    randques = Math.floor(Math.random()*quiz.length);
}


function clearans()
{
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    document.getElementById('ans').value="";
    ans0.textContent="";
    ans1.textContent="";
    ans2.textContent="";
    ans3.textContent="";
    ans4.textContent="";
    ans5.textContent="";
}


function question0()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a0[0]))
        {
            let ans=result(a0[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a0[1]))
            {
                let ans=result(a0[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a0[2]))
                {
                    var ans=result(a0[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a0[3]))
                    {
                        let ans=result(a0[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a0[4]))
                        {
                            let ans=result(a0[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a0[5]))
                            {
                                let ans=result(a0[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question1()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a1[0]))
        {
            let ans=result(a1[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a1[1]))
            {
                let ans=result(a1[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a1[2]))
                {
                    var ans=result(a1[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a1[3]))
                    {
                        let ans=result(a1[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a1[4]))
                        {
                            let ans=result(a1[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a1[5]))
                            {
                                let ans=result(a1[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question2()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a2[0]))
        {
            let ans=result(a2[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a2[1]))
            {
                let ans=result(a2[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a2[2]))
                {
                    var ans=result(a2[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a2[3]))
                    {
                        let ans=result(a2[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a2[4]))
                        {
                            let ans=result(a2[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a2[5]))
                            {
                                let ans=result(a2[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question3()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a3[0]))
        {
            let ans=result(a3[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a3[1]))
            {
                let ans=result(a3[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a3[2]))
                {
                    var ans=result(a3[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a3[3]))
                    {
                        let ans=result(a3[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a3[4]))
                        {
                            let ans=result(a3[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a3[5]))
                            {
                                let ans=result(a3[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question4()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a4[0]))
        {
            let ans=result(a4[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a4[1]))
            {
                let ans=result(a4[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a4[2]))
                {
                    var ans=result(a4[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a4[3]))
                    {
                        let ans=result(a4[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a4[4]))
                        {
                            let ans=result(a4[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a4[5]))
                            {
                                let ans=result(a4[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question5()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a5[0]))
        {
            let ans=result(a5[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a5[1]))
            {
                let ans=result(a5[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a5[2]))
                {
                    var ans=result(a5[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a5[3]))
                    {
                        let ans=result(a5[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a5[4]))
                        {
                            let ans=result(a5[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a5[5]))
                            {
                                let ans=result(a5[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question6()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a6[0]))
        {
            let ans=result(a6[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a6[1]))
            {
                let ans=result(a6[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a6[2]))
                {
                    var ans=result(a6[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a6[3]))
                    {
                        let ans=result(a6[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a6[4]))
                        {
                            let ans=result(a6[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a6[5]))
                            {
                                let ans=result(a6[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question7()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a7[0]))
        {
            let ans=result(a7[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a7[1]))
            {
                let ans=result(a7[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a7[2]))
                {
                    var ans=result(a7[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a7[3]))
                    {
                        let ans=result(a7[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a7[4]))
                        {
                            let ans=result(a7[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a7[5]))
                            {
                                let ans=result(a7[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question8()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a8[0]))
        {
            let ans=result(a8[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a8[1]))
            {
                let ans=result(a8[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a8[2]))
                {
                    var ans=result(a8[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a8[3]))
                    {
                        let ans=result(a8[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a8[4]))
                        {
                            let ans=result(a8[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a8[5]))
                            {
                                let ans=result(a8[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}


function question9()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a9[0]))
        {
            let ans=result(a9[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a9[1]))
            {
                let ans=result(a9[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a9[2]))
                {
                    var ans=result(a9[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a9[3]))
                    {
                        let ans=result(a9[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a9[4]))
                        {
                            let ans=result(a9[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a9[5]))
                            {
                                let ans=result(a9[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question10()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a10[0]))
        {
            let ans=result(a10[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a10[1]))
            {
                let ans=result(a10[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a10[2]))
                {
                    var ans=result(a10[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a10[3]))
                    {
                        let ans=result(a10[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a10[4]))
                        {
                            let ans=result(a10[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a10[5]))
                            {
                                let ans=result(a10[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question11()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a11[0]))
        {
            let ans=result(a11[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a11[1]))
            {
                let ans=result(a11[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a11[2]))
                {
                    var ans=result(a11[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a11[3]))
                    {
                        let ans=result(a11[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a11[4]))
                        {
                            let ans=result(a11[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a11[5]))
                            {
                                let ans=result(a11[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question12()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a12[0]))
        {
            let ans=result(a12[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a12[1]))
            {
                let ans=result(a12[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a12[2]))
                {
                    var ans=result(a12[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a12[3]))
                    {
                        let ans=result(a12[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a12[4]))
                        {
                            let ans=result(a12[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a12[5]))
                            {
                                let ans=result(a12[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question13()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a13[0]))
        {
            let ans=result(a13[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a13[1]))
            {
                let ans=result(a13[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a13[2]))
                {
                    var ans=result(a13[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a13[3]))
                    {
                        let ans=result(a13[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a13[4]))
                        {
                            let ans=result(a13[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a13[5]))
                            {
                                let ans=result(a13[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question14()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a14[0]))
        {
            let ans=result(a14[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a14[1]))
            {
                let ans=result(a14[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a14[2]))
                {
                    var ans=result(a14[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a14[3]))
                    {
                        let ans=result(a14[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a14[4]))
                        {
                            let ans=result(a14[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a14[5]))
                            {
                                let ans=result(a14[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question15()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a15[0]))
        {
            let ans=result(a15[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a15[1]))
            {
                let ans=result(a15[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a15[2]))
                {
                    var ans=result(a15[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a15[3]))
                    {
                        let ans=result(a15[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a15[4]))
                        {
                            let ans=result(a15[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a15[5]))
                            {
                                let ans=result(a15[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question16()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a16[0]))
        {
            let ans=result(a16[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a16[1]))
            {
                let ans=result(a16[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a16[2]))
                {
                    var ans=result(a16[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a16[3]))
                    {
                        let ans=result(a16[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a16[4]))
                        {
                            let ans=result(a16[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a16[5]))
                            {
                                let ans=result(a16[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question17()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a17[0]))
        {
            let ans=result(a17[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a17[1]))
            {
                let ans=result(a17[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a17[2]))
                {
                    var ans=result(a17[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a17[3]))
                    {
                        let ans=result(a17[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a17[4]))
                        {
                            let ans=result(a17[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a17[5]))
                            {
                                let ans=result(a17[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question18()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a18[0]))
        {
            let ans=result(a18[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a18[1]))
            {
                let ans=result(a18[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a18[2]))
                {
                    var ans=result(a18[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a18[3]))
                    {
                        let ans=result(a18[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a18[4]))
                        {
                            let ans=result(a18[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a18[5]))
                            {
                                let ans=result(a18[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}


function question19()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a19[0]))
        {
            let ans=result(a19[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a19[1]))
            {
                let ans=result(a19[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a19[2]))
                {
                    var ans=result(a19[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a19[3]))
                    {
                        let ans=result(a19[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a19[4]))
                        {
                            let ans=result(a19[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a19[5]))
                            {
                                let ans=result(a19[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}

function question20()
{
    var txt=document.getElementById('ans').value;
  //  var words=[txt.match(/Python|pyhton|pithon|piethon|pyton|pythoon|pythonn/gi)];
    var ans0=document.getElementById('a0');    
    var ans1=document.getElementById('a1');  
    var ans2=document.getElementById('a2');
    var ans3=document.getElementById('a3');
    var ans4=document.getElementById('a4');
    var ans5=document.getElementById('a5');
    var sc=document.getElementById('scores');
  //  var str=['PYTHON|python|pyhton|pithon|piethon|pyton|pythoon|pythonn',txt.match(/Javscript/gi)];
    //var n=txt.match(words[0]);
 
  
    if(txt.toLowerCase().match(a20[0]))
        {
            let ans=result(a20[0]);
            ans0.textContent="1. "+ans.toUpperCase(); //str[0].split("/\s+(?:pyhton|pithon|piethon|pyton|pythoon|pythonn)\+s/");
            ans0.style.animation="1s exists alternate-reverse";
            txt="";
            score=score+100;
            sc.textContent= score;
        }

    else if(txt.toLowerCase().match(a20[1]))
            {
                let ans=result(a20[1]);
                ans1.textContent="2. "+ans.toUpperCase();
                ans1.style.animation="1s exists alternate-reverse";
                txt="";
                score=score+100;
                document.getElementById('scores').textContent = score;
             }

          else   if(txt.toLowerCase().match(a20[2]))
                {
                    var ans=result(a20[2]);
                    ans2.textContent="3. "+ans.toUpperCase();
                    ans2.style.animation="1s exists alternate-reverse";
                    txt="";
                    score=score+100;
                    sc.textContent= score;
                 }
             else    if(txt.toLowerCase().match(a20[3]))
                    {
                        let ans=result(a20[3]);
                        ans3.textContent="4. "+ans.toUpperCase();
                        ans3.style.animation="1s exists alternate-reverse";
                        txt="";
                        score=score+100;
                        sc.textContent= score;
                     }
                 else    if(txt.toLowerCase().match(a20[4]))
                        {
                            let ans=result(a20[4]);
                            ans4.textContent="5. "+ans.toUpperCase();
                            ans4.style.animation="1s exists alternate-reverse";
                            txt="";
                            score=score+100;
                            sc.textContent= score;
                         }

                   else  if(txt.toLowerCase().match(a20[5]))
                            {
                                let ans=result(a20[5]);
                                ans5.textContent="6. "+ans.toUpperCase();
                                ans5.style.animation="1s exists alternate-reverse";
                                txt=""
                                score=score+100;
                                sc.textContent= score;
                             }
                             else {
                                 attempt++;
                                alert("enter the rigth answer");
                                score=score-100;
                                sc.textContent=score;
                                txt="";
                             }
    
                            if(ans0.textContent!="" && ans1.textContent!=""&& ans2.textContent!="" && ans3.textContent!="" && ans4.textContent!=""&& ans5.textContent!="")
                             {
                                document.getElementById('nxt').style.visibility = "visible"
                              //  document.getElementById('ans').disabled = "true";
                                 alert("You won!!!");
                                 
                             }
                             if(attempt>3)
                             {
                               attempt=0;
                                 document.getElementById('ans').disabled = "true";
                                 alert("Game over!!!");
                                 document.getElementById('strtbtn').style.visibility = "visible";
                                 score=0;
                                 document.getElementById('scores').textContent = score;
                             }
}


//split array function
var result=function(arrayindex){
    var arr=arrayindex.split("|");
    return arr[0];

}
/*
function splitarray(arrayindex){

    var arr=arrayindex.split("|");
    var result=arr[0];
    return result;
}*/

function display()
{
    var questions=document.getElementById('ques').textContent;
    if(questions==quiz[0])
        {
           question0();
        }  
        else if(questions==quiz[1])
            {
                question1();
            }      
            else if(questions==quiz[2])
            {
                question2();
            }  
            else if(questions==quiz[3])
            {
                question3();
            } 
            else if(questions==quiz[4])
            {
                question4();
            } 
            else if(questions==quiz[5])
            {
                question5();
            } 
            else if(questions==quiz[6])
            {
                question6();
            } 
            else if(questions==quiz[7])
            {
                question7();
            } 
            else if(questions==quiz[8])
            {
                question8();
            }    
            else if(questions==quiz[9])
            {
                question9();
            } 
            else if(questions==quiz[10])
            {
                question10();
            } 
            else if(questions==quiz[11])
            {
                question11();
            } 
            else if(questions==quiz[12])
            {
                question12();
            } 
            else if(questions==quiz[13])
            {
                question13();
            } 
            else if(questions==quiz[14])
            {
                question14();
            } 
            else if(questions==quiz[15])
            {
                question15();
            } 
            else if(questions==quiz[16])
            {
                question16();
            } 
            else if(questions==quiz[17])
            {
                question17();
            } 
            else if(questions==quiz[18])
            {
                question18();
            } 
             else if(questions==quiz[19])
            {
                question19();
            } 
            else if(questions==quiz[20])
            {
                question20();
            } 

     //   ans0.textContent="1. "+a0[0];
       // sp1.textContent="20";
        //sp1.style.visibility="visible";
        //ans0.style.animation="1s exists alternate-reverse";

      

       empty();
       clears();
     

}

function clears(){

    document.getElementById('ans').value="";
}

function empty()
{
    var textbox=document.getElementById('ans').value;
    if(textbox=="")
        {
            alert('Enter the answer');
        }
}