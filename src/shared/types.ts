export enum SelectedPage {
    Home = "home",
    About = "about",
    FearOfFailure = "fearoffailure",
    GrowthAndFixed = "growthandfixed",
    Resilience = "resilience",
    FailForwardWeek = "failforwardweek",
    Footer = "footer",
    NewPage = "newpage",
    Continue = "continue",
    Interview = "interview",
    Communication = "communication",
    OtherEvents = "otherevents",
  }

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description:string;
  writing?:string;
}
  
export interface ClassType {
  name: string;
  description?: string;
  image: string;
  link: string;
}
