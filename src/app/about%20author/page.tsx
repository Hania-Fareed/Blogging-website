import Header from "../components/header";

type IData={
    title: string;
    description: string;
    image: any;
};

const data: IData[]=[
    {title: "My Self", description: " am a hard-working and driven individual who isn't afraid to face a challenge.I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do." , image: ""},
    {title: "Learning", description: "Different people use different words to define learning within educational psychology, but in general, we're talking about a step-by-step process in which an individual experiences permanent, lasting changes in knowledge, behaviors, or ways of processing the world." , image: ""},
    {title: "hobbies", description: "", image: "img src="},
];
    

export default function author(){
    return(
        <div>
            <Header/>
            <div className="authorContainer tracking-in-expand">
               <h1 className="authorTitle">Author</h1>
            </div>
            <div className="authorPage">
             <div className="authorBox">
               <h1 className="boxTitle">My Self</h1>
               <p className="aboutDescription">I am a hard-working and driven individual who isn't 
                afraid to face a challenge.I'm passionate about my work and I know how to get the 
                job done. I would describe myself as an open and honest person who doesn't believe 
                in misleading other people and tries to be fair in everything I do.</p>
                <div className="aboutProfile1">
               <img src="./picture07.PNG"/>
               <img src=""/>
               </div>
             </div> 
             <div className="authorBox2">
               <h1 className="boxTitle">Learning</h1>
               <p className="aboutDescription">Different people use different words to define 
                learning within educational psychology, but in general, we're talking about a 
                step-by-step process in which an individual experiences permanent, lasting 
                changes in knowledge, behaviors, or ways of processing the world.</p>
                <div className="aboutProfile2">
               <img src="./picture08.PNG"/>
               </div>
             </div> 
             <div className="authorBox3">
               <h1 className="boxTitle">hobbies</h1>
               <p className="aboutDescription">
                <li>Cooking and Baking</li>
                <li>Photography</li>
                <li>Gardening</li>
                <li>Coding</li>
                <li>Painting</li>
                <li>Video game</li>
                <li>Watching Films</li>
               </p>
               <div className="aboutProfile">
               <img src="./picture09.PNG"/>
               </div>
             </div>
            </div>
        </div>
    )
}