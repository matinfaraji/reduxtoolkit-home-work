import db from "../../../../data.json";
import logo from "*/" //logo
export default function JobCard() {
  return (
    <>
      {db.map((item, index) => (
        <div className="job-card" key={index}>
          <div className="job-card-header">
            <div className="job-card-logo">
              <img src={item.logo} alt={`${item.company} Logo`} />
            </div>
            <div className="job-card-tags">
              <p>{item.company}</p>
              {item.new && <span className="tag">NEW!</span>}
              {item.featured && <span className="tag">FEATURED</span>}
              <span className="tag">{item.role}</span>
              <span className="tag">{item.level}</span>
              {item.languages.map((item, index) => (
                <span className="tag" key={index}>
                  {item}
                </span>
              ))}
              {/* <span className="tag">item.tools</span>  */}
            </div>
          </div>
          <div className="job-card-body">
            <h2>{item.position}</h2>
            <p>
              {item.postedAt}. {item.contract} ·{item.location}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
