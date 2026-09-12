import Head from "../../components/Head"
import Footer from "../../components/sections/Footer"
import Navbar from "../../components/sections/Navbar"
import LawyerCard from "../../components/team/LawyerCard"
import { teamCategories } from "../../data/teamData"

const Lawyer = () => {

      const lawyerCategory = teamCategories.find((cat) => cat.id === "lawyer");
    return (
        <>
            <Navbar />
            <Head>Lawyer Profile</Head>
            <div className="py-5"></div>
                <div className="flex flex-wrap gap-x-10 gap-y-10 px-14.75"  >
                    {lawyerCategory.members.map((member) => (
                    <LawyerCard key={member.id} member={member} />
                    ))}
                </div>
                <div className="py-5"></div>
            <Footer />
        </>
    )
}

export default Lawyer
