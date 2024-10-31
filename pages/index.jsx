import DrawerAppBar from "@/components/NavBar";
import Home from "@/components/Home";
import Numbers from "@/components/numbers";
import About from "@/components/About";
import Expertise from "@/components/expertise";

export default function  Main () {
return (
    <div>
        <DrawerAppBar />
        <Home />
        <Numbers />
        <About />
        <Expertise />
    </div>
)
}