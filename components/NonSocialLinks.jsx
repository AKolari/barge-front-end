import { getLinksLinks } from "csc-start/app/utils/data";

const links = getLinksLinks();

function NonSocialLinks() {
  return (
    <div className=" barge flex-col  items-center mt-16 mb-12 ">
      {links.map(function (i) {
        return (
          <button key={i.id} className=" mb-7 button  ">
            <p className=" pb-2">{i.title}</p>
          </button>
        );
      })}
    </div>
  );
}

export default NonSocialLinks;
