import bgDesktap from "../../assets/images/bg-header-desktop.svg";
import { useSelector, useDispatch } from "react-redux";
import { clearTag, removeTag } from "../../redux/reducers";
export default function Header() {
  const selectedTags = useSelector((state) => state.filter.tags);
  const dispatch = useDispatch();
  const handelClickc = () => {
    dispatch(clearTag());
  };
  const removeItem = (item) => {
    dispatch(removeTag(item));
  };
  return (
    <div
      className="bg
    "
    >
      <img src={bgDesktap} alt="" className="bg-desktep" />
      <div className="sort">
        {selectedTags.map((item, index) => (
          <section
            className="sorted"
            key={index}
            onClick={() => removeItem(item)}
          >
            {item}
          </section>
        ))}
        <a onClick={handelClickc} className="cleare">cleare</a>
      </div>
    </div>
  );
}
