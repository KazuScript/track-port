import Service from "../Components/Service";
import TrackDispatch from "../Components/TrackDispatch";
import ContactForm from "../Components/ContacForm";
import Hero from "../Components/Hero";
import About from "../Components/About";

export default function Home({ name }) {
    return (
        <>
            <Hero />
            <About />
            <Service />
            <TrackDispatch />
            <ContactForm />
        </>
    );
}
