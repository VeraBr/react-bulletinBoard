import ReactPost from "./ReactPost"

const BulletinBoard = () => {
  let posts = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "En React applikation är uppbyggda av olika komponenter som är återanvändbara vilket det finns fördelar med för att man slipper upprepa kod och det gör det enklare att göra ändringar och underhålla applikationen. React använder sig av en VirtualDOM vilket ökar prestandan. Utöver det är React relativt lätt att lära sig."
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "En Single Page Application är en webbsida som laddas en gång och därefter uppdateras endast delar av sidan med innehåll utefter hur du navigerar dig. Finns det en meny på webbsidan som alltid ska synas till exempel ligger den kvar utan att laddas om även om resten av innehållet på sidan ändras. Tillskillnad från en vanlig webbplats där hela sidan måste hämtas på nytt varje gång du klickar dig runt, även om delar av innehållet är identiskt."
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "React är ett JavaScript-bibliotek medan Angular är ett TyeScript-baserat framework. En annan skillnad är att React använder en VirtualDOM för sina applikationer vilket Angular inte gör. Samt att React använder sig av one-way data binding och Angular av two-way data binding. "
    }
  ]

return (
  <>
    {posts.map((post,i) => <ReactPost question={post.question} answer={post.answer} id={i} />)}
  </>
)
}

export default BulletinBoard