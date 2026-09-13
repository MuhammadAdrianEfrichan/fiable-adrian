import ig from "../../assets/icons/ig.svg"
import linkind from "../../assets/icons/linkind.svg"

const LawyerCard = ({ member }) => {
  return (
    <div className="flex w-full max-w-100.75 flex-col justify-baseline">
      <img
        src={member.photo}
        alt={member.name}
        className="h-auto w-full object-cover"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-heading sm:text-[25px]">
          {member.name}
        </h3>
        <p className="text-lg sm:text-[23px]">
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
            className="bg-oren w-full max-w-70 px-4 py-2 text-xs font-bold uppercase text-biru transition-colors hover:bg-orange-600 hover:text-white sm:text-[18px]"
          >
            Download Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard