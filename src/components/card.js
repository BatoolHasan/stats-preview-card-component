import Stat from './stat';
const Card = ({ title, body, stats})=>{
    const titleComponents = title.split("-");
    return (
        <div className="container__card">
            <div className="container__hero">
            </div>
            <div className="container__info">
                <h1>{titleComponents[0]+" "}<span>{titleComponents[1]}</span>{" "+titleComponents[2]}</h1>
                <p>{body}</p>
                <div className="container__stats">
                    {stats.map((stat,i)=><Stat key={i} heading={stat.heading} subheading={stat.subheading}/>)}
                </div>
            </div>

      </div>
    );
}
export default Card;