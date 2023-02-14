import Event from "./Event";

function Main() {
  return (
    <div className="flex flex-col w-full mt-8">
      <Event
        date="2/21"
        dateText="February 21, 2023"
        topic="web3 and The Creator Economy"
        eventUrl="https://www.eventbrite.com/e/the-web3-creator-economy-tickets-536231612187"
        desc="February's panel will feature Nashville creatives and founders who are building web3 platforms or adopting web3 technologies to transform photography, music, creativity, and everyday communication."
        imageUrl="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F440359109%2F192351677025%2F1%2Foriginal.20230206-200459?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=5004e3cd4a8c4524580bb8f437a03eba"
        speakers={[
          {name: "Derek Brown", subtitle: "CEO, Bunches", photo: "https://media.licdn.com/dms/image/C5603AQFL1tZGfw6dPw/profile-displayphoto-shrink_800_800/0/1608874359230?e=1681344000&v=beta&t=qxe7Ml9s9Irfjvbj0hdVTYDQZQPmhBw2SvTGW6Li2DY", url: "https://nf.td/derek"},
          {name: "Jeremy Cowart", subtitle: "Photographer", photo: "https://media.licdn.com/dms/image/C5603AQHmL8ukTSbL5g/profile-displayphoto-shrink_800_800/0/1630606708426?e=1681344000&v=beta&t=xb9Ty1Doc7btawRJIuOgK7022pHxmi3nGqaRjVQ1nf0", url: "https://www.linkedin.com/in/jeremycowart/"},
          {name: "Trevor Hinesley", subtitle: "CTO, Soundstripe", photo: "https://media.licdn.com/dms/image/D4E03AQGmt4QWtC4cuQ/profile-displayphoto-shrink_400_400/0/1674849117094?e=1681344000&v=beta&t=ws_YpGvfTdaMrIiuL2afTckEfOPIHd4JHNNyEHd6KzA", url: "https://www.linkedin.com/in/trevorhinesley/"},
          {name: "Spencer McClung", subtitle: "Partnerships, Bunches", photo: "https://media.licdn.com/dms/image/C5603AQFXSxWaGpo0EQ/profile-displayphoto-shrink_400_400/0/1571410692462?e=1681344000&v=beta&t=ykn5GC-n7LGjHNKg-korFLNpR9TqG9KeQmkpEdJEQik", url: "https://www.linkedin.com/in/spencermcclung/"},
        ]}
      />
      <Event
        date="3/21"
        dateText="March 21, 2023"
        topic="web3 and Your Privacy"
        eventUrl={false}
        desc="March's panel will deep dive on the changing nature of privacy in a blockchain-oriented world - when everything is public, is it actually possible to be private?"
        imageUrl="https://ik.imagekit.io/wrxztkausbq0/tenndao/march_privacy_uCSERXc8R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676401070703"
      />
      <Event
        date="4/18"
        dateText="April 18, 2023"
        topic="web3 to Make an (ESG) Impact"
        eventUrl={false}
        desc="April's panel will highlight activists, investors, and entrepreneurs who see web3 as a viable tool for having massive social impact across the environmental, social, and governance sectors."
        imageUrl="https://ik.imagekit.io/wrxztkausbq0/tenndao/april_impact_vHyRFY-mp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676401070701"
      />
      <Event
        date="5/16"
        dateText="May 16, 2023"
        topic="web3 in TN"
        eventUrl={false}
        desc="May's panel will feature speakers and stakeholders from the TN government discussing policies and opinions that pertain to web3 in TN: crypto, blockchain, and DAOs."
        imageUrl="https://ik.imagekit.io/wrxztkausbq0/tenndao/may_tn_uCbISDtQP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676401070638"
      />
    </div>
  );
}

export default Main;
