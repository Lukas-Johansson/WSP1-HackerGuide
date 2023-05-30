# XSS SIDA COOL

Lukas Johansson | 2023-05-30

## Inledning

Jag har gjort en webbsida för att testa XSS där man får utföra de mest klassiska fallen av XSS och hur de kan vara ett hot. Men även en del information om hur man kan skydda sitt inmatingsfält från dessa typer av attacksförsök.

Jag gjorden denna webbsida för att uppmana folk att utforska webbskydd och varför det är väldigt viktigt att utföra korrekta skyddsmetoder för att kunna ha en skyddad sida. Att människor lär sig skydda sina sidor är viktigt eftersom det kommer leda till en mer vänlig och pålitlig web. 

För att bygga denna webbsida så kommer jag att skapa sidan bas ifrån forumet och ändra det till behov. Jag använder den eftersom det finns redan ett fungerande login system vilket gör att jag kommer kunna spendera med tid på de nya delarna av sidan istället för att göra om allting ifrån grunden. 

## Bakgrund

Det finns två delar av denna sida vilka är den tagna forum delen och det nya som har blivit tilläget den existerande grundsidan. 

Den tagna forumen delen hade ett simpelt login system vilket jag tänkte använda för att kunna ha achivments som blev kopplade till sitt konto. Tyvärr så hade jag det inte i fokus och tid gränsen ledde till att jag tyvärr inte han lägga till det. 

Det som är nytt på sidan är praktiskt sätt allt innehåll, allt backend som jag skulle lägga till i slutet som achivments och liknande hann jag inte så det blev praktiskt sätt inget mer nytt i den delen förutom att rendra de nya delarna av sidan.

Jag behövde lägga till ett sätt att kunna välja emellan stored och reflected XSS vilket jag gjorde igenom ett simpelt 2 knappar val där man kunde välja vilken variant man ville testa. Testerna var lite kluriga att komma på eftersom jag inte riktigt visste hur jag skulla ta mig till att visa hur stored xss skulle fungera eftersom orignellt så lagras koden i stored xss men om jag skulle göra det i detta test så skulle man behöva förlita på människa som testade att sedan ta bort det som dem har laggit till i servern. Detta kom jag över med att printa ut texten som de hade men en litet citat att denna kod i orginellt fall skulle spara och sedan sicka till alla användare som gick in på samma sida. 

Reflected xss var relativt enkelt eftersom det var helt enkelt att göra en input som sedan printades ut och körde koden så det gick enkelt att visa det med tanke på att man inte behövde göra något mer än att printa ut det som användaren skrev in.

## Positiva erfarenheter

Mina positiva erfarenheter har varit att jag har lärt mig lite mer javascript spesefikt med hur man kan göma inehåll med hjälp av knappar och js. Eftersom jag inte har använt mig av det tidigare så var det en ny erfarenhet för mig. Detta har jag lärt mig genom att kolla på lite tutorials och sedan applicera det på min sida. Jag har även lärt med mer frontend eftersom jag fått jobbat med lite mer jobbiga layout för att få alla komponenter att fungera tillsammans och ser bra ut.


## Negativa erfarenheter

Generellt så var det inget som gick jättedåligt men det var lite svårt med de roliga knapparna som jag ville lägga till eftersom jag fick till dem men då man använde js för att gömma och visa dem så blev det lite svårt att få dem att fungera som jag ville. Detta ledde till att de exploderade och cssen blev lite konstig. Detta ledde till att jag inte hade tid att fixa det och det så det får bli lite knasiga. 

## Sammanfattning

Jag tycker att projektet var roligt och lärorikt. Jag fick lära mig en hel del nya saker och tekniker för att försöka hålla en sida okej stilren. Jag skulle nog ha behållt samma knapp version på hela sidan och inte börjat exprimentera med nya knappar så långt in på arbetet. Detta ledde till att jag fick lite problem med att få dem att fungera som jag ville. 

Jag skulle även ha börjat med att göra en planering av hur jag skulle lägga upp sidan och vad jag skulle lägga till för att kunna ha en bättre planering av hur jag skulle lägga upp arbetet. Detta skulle ha lett till att jag hade kunnat lägga till mer saker på sidan och fått en bättre struktur på sidan.



