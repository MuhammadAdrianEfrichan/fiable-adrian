import ig from "../../assets/icons/ig.svg"
import linkind from "../../assets/icons/linkind.svg"

export default function MemberCard({ member }) {
    return (
        <div className="flex gap-10"  key={member.id}>
        <img
            src={member.photo}
            alt={member.name}
            className="w-93 h-116.5 object-cover shrink-0"
        />
        <div className="flex-1">
            <h3 className="font-bold text-heading text-[25px]">
            {member.name} {member.role && `(${member.role})`}
            </h3>
            <p className="text-[23px]">
            <span className="text-paragraf">Spesialisasi: {member.specialty}</span>
            </p>
            <div className="h-119.25 w-215.25">
            <p className="text-[23px] text-heading mt-2 text-justify leading-relaxed  font-normal">
            {member.bio}
            </p>
            <p className="text-[23px] text-heading mt-2 text-justify leading-relaxed  font-normal">
            {member.bioDua}
            </p>
            <div className="flex items-center gap-3 mt-10">
            
            <a href={member.instagramUrl}
                className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center"
            >
                <img src={ig} alt="" />
            </a>
            
                <a href={member.linkedinUrl}
                className="w-8 h-8 rounded-full bg-biru flex items-center justify-center"
            >
                <img src={linkind} alt="" className="color-white"/>
            </a>
            
            <a href={member.portfolioUrl}
                className="bg-oren w-70 text-[18px] hover:bg-orange-600 hover:text-white text-biru text-xs font-bold uppercase px-4 py-2 transition-colors"
            >
                Download Portfolio
            </a>
            </div>
            </div>
        </div>
        </div>
    );
}