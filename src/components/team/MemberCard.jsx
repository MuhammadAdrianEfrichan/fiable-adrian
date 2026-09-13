import ig from "../../assets/icons/ig.svg"
import linkind from "../../assets/icons/linkind.svg"

export default function MemberCard({ member }) {
    return (
        <div className="flex flex-col gap-6 sm:gap-10 lg:flex-row" key={member.id}>
        <img
            src={member.photo}
            alt={member.name}
            className="h-auto w-full max-w-93 object-cover sm:w-2/3 lg:shrink-0"
        />
        <div className="flex-1">
            <h3 className="text-xl font-bold text-heading sm:text-[25px]">
            {member.name} {member.role && `(${member.role})`}
            </h3>
            <p className="text-lg sm:text-[23px]">
            <span className="text-paragraf">Spesialisasi: {member.specialty}</span>
            </p>
            <div className="h-auto w-full">
            <p className="mt-2 text-justify text-base font-normal leading-relaxed text-heading sm:text-[23px]">
            {member.bio}
            </p>
            <p className="mt-2 text-justify text-base font-normal leading-relaxed text-heading sm:text-[23px]">
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
                className="bg-oren w-full max-w-70 px-4 py-2 text-xs font-bold uppercase text-biru transition-colors hover:bg-orange-600 hover:text-white sm:text-[18px]"
            >
                Download Portfolio
            </a>
            </div>
            </div>
        </div>
        </div>
    );
}