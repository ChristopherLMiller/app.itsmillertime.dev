import styled from "styled-components";
import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/components/layout/PageLayout";

const StyledDiv = styled.div`
  font-size: var(--p-responsive);
`;

const IndexPage = () => {
  const auth = useAuth();

  return (
    <PageLayout
      meta={{
        title: "Home",
        description: "Programmer. Amateur Designer. Model Enthusiast.",
        useSEO: false,
      }}
    >
      <StyledDiv>
        <h1>Test Home Page</h1>
        <p>Hello, {auth.methods.getUsername()}</p>
        <p>Email: {auth.methods.getEmail()}</p>
        <p>Authed: {auth.isAuthenticated ? "True" : "False"}</p>
        <p>
          Bacon ipsum dolor amet ribeye chuck meatball meatloaf capicola
          sirloin. Jowl ribeye swine kevin doner ham andouille short loin
          picanha leberkas strip steak bacon short ribs. Bacon kielbasa pastrami
          chislic. Venison shankle meatloaf t-bone leberkas pig picanha
          landjaeger chuck doner pork shoulder fatback spare ribs capicola.
        </p>
        <p>
          Meatloaf shankle beef tri-tip jowl, kevin landjaeger turkey.
          Frankfurter rump pork chop burgdoggen. Pork filet mignon tail strip
          steak, pancetta pork loin meatball pig ground round alcatra corned
          beef turducken doner pastrami ham. Salami rump sirloin, frankfurter
          cupim short loin jowl fatback spare ribs tongue. Fatback sausage doner
          pastrami hamburger chicken. Chicken capicola meatloaf, ball tip beef
          ribs turducken short ribs pastrami picanha jerky t-bone meatball
          porchetta strip steak kevin. Shank porchetta alcatra, capicola chislic
          flank turkey pork jerky.
        </p>
        <p>
          Picanha ribeye kevin pancetta shank. Ground round meatloaf jowl
          alcatra landjaeger pork porchetta chislic. Pork loin leberkas bacon
          short ribs burgdoggen capicola turducken buffalo ground round. Cow
          pork chicken, chuck venison kielbasa pork chop tri-tip buffalo boudin
          turkey ground round picanha spare ribs shank.
        </p>
        <p>
          Venison porchetta buffalo chuck, pork pork chop jowl leberkas picanha
          chicken fatback ball tip doner corned beef ham hock. Bresaola kevin
          frankfurter filet mignon swine doner capicola picanha jowl beef.
          Alcatra filet mignon pancetta strip steak meatloaf picanha, kevin beef
          turducken tongue burgdoggen shank. Prosciutto meatball jowl flank
          t-bone chislic cow ribeye landjaeger bacon bresaola ham hock shank
          frankfurter burgdoggen.
        </p>
        <p>
          Landjaeger rump swine biltong kielbasa. Turducken ham rump, alcatra
          prosciutto chicken meatloaf shank t-bone jowl pork chop shoulder filet
          mignon. Pork loin rump ground round shoulder. Strip steak prosciutto
          turducken short loin sirloin pork chop landjaeger doner pork loin
          salami shank kevin cupim. Tri-tip pig chicken pork belly ball tip
          kevin leberkas picanha brisket fatback.
        </p>
        <p>
          Tri-tip biltong capicola andouille cow ribeye turkey sausage. Pork
          loin corned beef meatloaf pork belly flank, tail meatball venison.
          Cupim kielbasa bresaola buffalo biltong tenderloin turkey sausage
          chicken. Fatback shankle meatloaf pork ham hock brisket hamburger
          venison doner bresaola tail andouille. Spare ribs jerky doner capicola
          sirloin beef ribs drumstick ground round andouille pig. Pancetta cupim
          picanha bacon tail. Kevin boudin swine biltong filet mignon alcatra
          porchetta buffalo pork belly pork chop brisket beef venison.
        </p>
        <p>
          Short ribs cupim strip steak bresaola capicola, rump turducken
          porchetta. Leberkas chicken beef burgdoggen. Tri-tip biltong pork
          belly t-bone brisket. Fatback meatball jerky bacon ball tip spare ribs
          tongue leberkas sausage ground round shank chicken venison tail ham
          hock. Ham jerky landjaeger hamburger, kielbasa tongue swine pork loin
          strip steak ribeye leberkas. Chislic landjaeger pork burgdoggen beef
          ham jerky strip steak filet mignon. Filet mignon ball tip sirloin
          ribeye, pork loin ground round leberkas bresaola bacon capicola t-bone
          corned beef.
        </p>
        <p>
          Jowl buffalo prosciutto meatloaf kielbasa, shank chicken pastrami
          corned beef pig rump. Tri-tip ribeye ham hock cupim ham pig ground
          round filet mignon buffalo andouille turducken jowl. Chuck ribeye
          doner ham capicola. Short loin chicken pig boudin salami drumstick,
          bresaola alcatra pork belly ground round ham hock pancetta turkey.
          Chislic cow ground round, tri-tip jerky hamburger tenderloin pork
          loin. Pancetta ball tip pork loin chicken brisket porchetta turducken
          pork.
        </p>
        <p>
          Pork belly boudin shank picanha brisket shoulder cupim tongue turkey
          filet mignon burgdoggen. Beef ribs rump prosciutto kielbasa filet
          mignon jowl. Capicola t-bone beef ribs, jerky turducken buffalo
          sausage beef pork chop boudin short ribs shank tail. Chicken chuck
          salami boudin, sirloin andouille tongue cow prosciutto short loin
          ribeye short ribs pork belly turducken burgdoggen. Pig pastrami
          hamburger meatloaf. Pork belly jerky picanha chicken ham hock pig ball
          tip chuck burgdoggen.
        </p>
        <p>
          Meatball burgdoggen rump picanha. Prosciutto pastrami bresaola doner
          biltong frankfurter short loin shoulder capicola kevin pork loin
          leberkas. T-bone venison cow, chuck cupim porchetta pork chop salami
          turducken shoulder kevin. Jowl pancetta sirloin, bacon chuck kevin ham
          hock pig kielbasa prosciutto. Andouille leberkas ground round, bacon
          chicken brisket chislic kevin burgdoggen.
        </p>
        <p>
          Hamburger fatback alcatra ball tip leberkas sirloin salami. Jowl cupim
          filet mignon swine buffalo ground round leberkas pancetta alcatra
          sausage turducken doner pork loin spare ribs. Hamburger ham cow, kevin
          pancetta bacon sirloin beef ribs jowl ribeye ground round tail sausage
          tongue. Tail cow brisket meatball chicken.
        </p>
        <p>
          Brisket leberkas t-bone ham hock. Alcatra frankfurter ham, meatloaf
          bresaola fatback drumstick ball tip doner burgdoggen. Spare ribs
          sausage jerky, pork andouille shank sirloin short loin beef ribs pig
          pork loin rump t-bone shoulder chuck. Jowl buffalo rump frankfurter
          leberkas, jerky bresaola brisket filet mignon bacon. Pig leberkas
          alcatra, cupim jerky ham hock chicken chuck boudin pork jowl buffalo
          beef.
        </p>
        <p>
          Fatback boudin short ribs chuck. Ball tip chislic pork chop andouille
          burgdoggen tail bresaola sausage tongue capicola tri-tip short ribs.
          Meatball bacon landjaeger, hamburger capicola ribeye fatback chislic
          frankfurter flank ham pastrami. Spare ribs jowl landjaeger chicken
          tongue alcatra salami capicola drumstick jerky sausage leberkas turkey
          pig. Chuck kevin pork loin beef ribs kielbasa jerky.
        </p>
        <p>
          Hamburger swine venison, chuck spare ribs pork meatloaf chicken beef
          ribs burgdoggen. Shank filet mignon picanha, tail andouille beef
          bresaola pastrami chicken hamburger kielbasa cupim sirloin. Biltong
          burgdoggen capicola, frankfurter cow venison ham hock landjaeger
          chicken shank corned beef brisket ribeye pork. Cupim rump tail, pork
          loin tenderloin porchetta doner ball tip meatball prosciutto leberkas
          pork belly beef pancetta. Salami short loin turducken tail doner
          shankle sirloin cupim brisket pork belly rump frankfurter pork chop.
          Sirloin tenderloin short ribs, alcatra prosciutto short loin pork
          belly capicola porchetta kevin sausage landjaeger turducken chicken.
          Jerky filet mignon porchetta sirloin landjaeger chuck boudin
          frankfurter corned beef.
        </p>
        <p>
          Strip steak venison jerky, beef ribs frankfurter ham jowl sausage pork
          belly short loin tri-tip meatloaf. Fatback buffalo leberkas strip
          steak chuck landjaeger. Leberkas picanha strip steak pig jerky t-bone,
          chuck flank frankfurter. Drumstick picanha landjaeger turducken pork
          chop pork loin salami venison meatball beef short loin ball tip.
        </p>
        <p>
          Does your lorem ipsum text long for something a little meatier? Give
          our generator a try… it’s tasty!
        </p>
      </StyledDiv>
    </PageLayout>
  );
};

export default IndexPage;
