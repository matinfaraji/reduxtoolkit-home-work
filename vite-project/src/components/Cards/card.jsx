import db from "../../assets/db/data.json";
import { useSelector, useDispatch } from "react-redux";
import { addTag, removeTag } from "../../redux/reducers";

export default function JobCard() {
  const selectedTags = useSelector((state) => state.filter.tags);
  const dispatch = useDispatch();

  
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      dispatch(removeTag(tag));
    } else {
      dispatch(addTag(tag));
    }
  };

  const filteredJobs = db.filter((job) => {
    if (selectedTags.length === 0) {
      return true;
    } else {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return selectedTags.every((tag) => jobTags.includes(tag));
    }
  });

  return (
    <div className="bg">
      {filteredJobs.map((item, index) => (
        <div className="job-card" key={index}>
          {/* logo */}
          <div className="moshakhasat">
            <div className="job-card-logo logo">
              <img src={item.logo} alt={`${item.company} Logo`} />
            </div>
            <div className="left">
              <div className="bala">
                <span className="company">{item.company}</span>
                {item.new && <span className="new">NEW!</span>}
                {item.featured && <span className="featured">FEATURED</span>}
              </div>
              <div>
                <h2 className="position">{item.position}</h2>
              </div>
              <div>
                <p className="details">
                  {item.postedAt} . {item.contract} · {item.location}
                </p>
                <hr />
              </div>
            </div>
          </div>
          {/* logo */}

          <div className="tags">
            <span className="tag" onClick={() => handleTagClick(item.role)}>
              {item.role}
            </span>
            <span className="tag" onClick={() => handleTagClick(item.level)}>
              {item.level}
            </span>
            {item.languages.map((lang, index) => (
              <span
                className="tag"
                key={index}
                onClick={() => handleTagClick(lang)}
              >
                {lang}
              </span>
            ))}
            {item.tools.map((tool, index) => (
              <span
                className="tag"
                key={index}
                onClick={() => handleTagClick(tool)}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}