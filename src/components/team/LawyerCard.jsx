import ig from "../../assets/icons/ig.svg"
import linkind from "../../assets/icons/linkind.svg"

const LawyerCard = ({ member }) => {
  return (
    <div className="flex flex-col w-100.75 justify-baseline">
      <img
        src={member.photo}
        alt={member.name}
        className=" h-116.5 object-cover shrink-0"
      />
      <div className="mt-4">
        <h3 className="font-bold text-heading text-[25px]">
          {member.name}
        </h3>
        <p className="text-[23px]">
          <span className="text-paragraf">Spesialisasi: {member.specialty}</span>
        </p>
        <div className="flex items-center gap-3 mt-10">
          
           <a href={member.instagramUrl}
            className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center"
          >
            <img src={ig} alt="" />
          </a>
          
          <a  href={member.linkedinUrl}
            className="w-8 h-8 rounded-full bg-biru flex items-center justify-center"
          >
            <img src={linkind} alt="" className="color-white" />
          </a>
          
           <a href={member.portfolioUrl}
            className="bg-oren w-70 text-[18px] hover:bg-orange-600 hover:text-white text-biru text-xs font-bold uppercase px-4 py-2 transition-colors"
          >
            Download Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard