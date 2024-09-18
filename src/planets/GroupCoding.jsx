import eniacImage from "../media/ENIAC.webp";
import Initiative from "./Initiative";
import InitiativePhoto from "../moons/InitiativePhoto";
import Banner from "../moons/Banner";

function GroupCoding() {
  const initiative = {
    initiativeName: "Group Coding Sessions",
    initiativeText: `Our group coding sessions are a continuous practice group focused on 
            hands-on skill development. We apply Test Driven Design/Development
            and good coding practices while Ensemble coding on Katas and
            practice applications. We onboard new starters a few times a year.
            Sign-up here to get notified about the next session.`,
    initiativeLink:
      "https://docs.google.com/forms/d/1avQMSWMHpTmXv3atDX1hk3ZUU2T7xuw3M30nuEIXGpU/viewform?edit_requested=true",
    initiativeImage: eniacImage,
    initiativeImageAlt: "The Women employed by the ENIAC project",
    initiativeFAQs: [
      {
        summary: "When and where do the Group Coding Sessions take place?",
        details:
          "Our Group Coding sessions are held on Zoom on Wednesdays at 6pm BST.",
      },
      {
        summary: "Which programming languages do you use?",
        details: "We welcome all programming languages.",
      },
      {
        summary: "What do I need to know before attending?",
        details: `These sessions are suitable for people at all stages of their
          career, as well as those who are considering a career in tech, and
          would like to experience coding with others in a friendly
          environment and to expand their skills and knowledge. You'll need to
          know the basics of at least of one programming language before
          attending - that's it! The basics include: Setting up a project,
          basic syntax, variables, primitive types, loops and functions.`,
      },
    ],
  };

  return (
    <Initiative initiative={{initiativeFAQs: initiative.initiativeFAQs, initiativeLink: initiative.initiativeLink, initiativeText: initiative.initiativeText}}>
      <Banner name={initiative.initiativeName} />
      <InitiativePhoto src={initiative.initiativeImage} alt={initiative.initiativeImageAlt} />
    </Initiative>
  );
}

export default GroupCoding;
