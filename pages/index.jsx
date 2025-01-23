import DrawerAppBar from "@/components/NavBar";
import Home from "@/components/Home";
import Numbers from "@/components/numbers";
import About from "@/components/About";
import Expertise from "@/components/expertise";
import Projects from "@/components/Projects";
import { Contact } from "lucide-react";
import ContactMe from "@/components/Contact";

export default function  Main () {
return (
    <div>
        <DrawerAppBar />
        <Home />
        <Numbers />
        <About />
        <Expertise />
        <Projects />
        <ContactMe />
    </div>
)
}