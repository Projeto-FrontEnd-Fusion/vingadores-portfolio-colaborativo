import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";
import Footer from './components/Footer/Footer';
import FormDescription from "./components/FormDescription/FormDescription";
import Forms from "./components/Forms/Forms";
import MemberCarousel from './components/MemberCarousel/MemberCarousel';
import MemberProjects from './components/MemberProjects/MemberProjects';
import MembersDescription from "./components/MembersDescription/MembersDescription";
import Navbar from "./components/Navbar/Navbar";
import SectionPresentation from "./components/SectionPresentation/SectionPresentation";
import TechStack from './components/TechStack/TechStack';

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0a0920]">
        <header className="">
          <Navbar />
        </header>

        <main className="px-8 py-6">
          <SectionPresentation />
          <section id="Equipes" className="pb-16">
            <MembersDescription />
            <MemberCarousel />
            <MemberProjects />
            <TechStack />
          </section>

          <section className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row lg:items-start">
            <FormDescription />
            <Forms />
          </section>
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
