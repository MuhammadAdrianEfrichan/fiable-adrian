import { useState } from "react";
import AccordionItem from "../../team/AcordionItem";
import MemberCard from "../../team/MemberCard";
import { teamCategories } from "../../../data/teamData";
import timKamiHero from "../../../assets/image/timKamiHero.png";
import timKami from "../../../assets/icons/timKami.svg";
import LawyerCard from "../../team/LawyerCard";

export default function TimKami() {
  const [openId, setOpenId] = useState("");

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  const partnerCategory = teamCategories.find((cat) => cat.id === "partner");
  const consultanCategory = teamCategories.find((cat) => cat.id === "legalConsultan");
  const lawyerCategory = teamCategories.find((cat) => cat.id === "lawyer");

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-24 pb-32"
      style={{ backgroundImage: `url(${timKamiHero})` }}
    >

      <div className="mb-10 flex flex-col items-center justify-center gap-8 px-5 sm:mb-16 sm:px-10 lg:gap-10">
        <img src={timKami} alt="" />
      

      <div className="mx-auto w-full max-w-376.75 px-0 sm:px-4">
        <AccordionItem
          title="Partner Profile"
          isOpen={openId === "partner"}
          onToggle={() => handleToggle("partner")}
        >
            <div className="py-5"></div>
            {
            partnerCategory.member.map((member) => (
              <MemberCard key={member.id} member={member}/>
            ))}
          <div className="py-5"></div>
        </AccordionItem>
      </div>


      <div className="mx-auto w-full max-w-376.75 px-0 sm:px-4">
        <AccordionItem
          title="Legal Consultant Profile"
          isOpen={openId === "legalConsultan"}
          onToggle={() => handleToggle("legalConsultan")}
        >
            <div className="py-5"></div>
          {
          consultanCategory.members.map((member) => (
            <MemberCard key={member.id} member={member}/>
          ))}
          <div className="py-5"></div>
        </AccordionItem>
      </div>


      <div className="mx-auto w-full max-w-376.75">
      <AccordionItem
  title="Lawyer Profile"
  isOpen={openId === "lawyer"}
  onToggle={() => handleToggle("lawyer")}
>
  <div className="py-5"></div>
  <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
    {lawyerCategory.members.map((member) => (
      <LawyerCard key={member.id} member={member} />
    ))}
  </div>
  <div className="py-5"></div>
</AccordionItem>
      </div>
      </div>
    </section>
  );
}