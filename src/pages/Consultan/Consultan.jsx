import Head from "../../components/Head"
import Footer from "../../components/sections/Footer"
import Navbar from "../../components/sections/Navbar"
import MemberCard from "../../components/team/MemberCard";
import { teamCategories } from "../../data/teamData";

const Consultan = () => {

      const consultanCategory = teamCategories.find((cat) => cat.id === "legalConsultan");
    return (
        <>
            <Navbar />
            <Head>Legal Consultant Profile</Head>
               <div className="py-5"></div>
               <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-14.75">
                {
                consultanCategory.members.map((member) => (
                    <MemberCard key={member.id} member={member}/>
                    ))}
                    </div>
                <div className="py-5"></div>
            <Footer />
        </>
    )
}

export default Consultan
